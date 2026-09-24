import { useState } from "react";
import toast from "react-hot-toast";

// =====================================================
// API BASE URL
// =====================================================
// =====================================================
// BACKEND API
// =====================================================

import { API_URL, requireSupabaseConfig } from '../api/config';

// =====================================================
// SERVICE OPTIONS
// =====================================================

const serviceOptions = [
  "New Site Visit",
  "Site Supervision",
  "Architecture Design",
  "Structural Design",
  "Interior Design",
  "Turnkey Construction",
  "Vastu Report",
  "Other",
];

// =====================================================
// LOCATION OPTIONS
// =====================================================

const locationOptions = [
  "Patna",
  "Noida",
  "Other",
];

// =====================================================
// PAYMENT LEAD FORM
// =====================================================

export default function PaymentLeadForm({
  onSuccess,
  onClose,
}) {
  // ===================================================
  // FORM DATA
  // ===================================================

  const [formData, setFormData] = useState({
    fullName: "",
    mobile: "",
    service: "",
    location: "",
    otherService: "",
    otherLocation: "",

    // CUSTOMER ENTERS PAYMENT AMOUNT
    paymentAmount: "",
  });

  const [loading, setLoading] =
    useState(false);

  const [paymentStatus, setPaymentStatus] =
    useState("idle");
  const [paymentReference, setPaymentReference] = useState("");

  // =====================================================
  // HANDLE NORMAL INPUT
  // =====================================================

  const handleChange = (e) => {
    const { name, value } =
      e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // =====================================================
  // HANDLE MOBILE
  // =====================================================

  const handleMobileChange = (e) => {
    const value =
      e.target.value
        .replace(/\D/g, "")
        .slice(0, 10);

    setFormData((prev) => ({
      ...prev,
      mobile: value,
    }));
  };

  // =====================================================
  // HANDLE PAYMENT AMOUNT
  // =====================================================

  const handleAmountChange = (e) => {
    // Allow numbers only

    const value =
      e.target.value.replace(
        /[^0-9]/g,
        ""
      );

    // Prevent extremely large input
    if (value.length > 8) {
      return;
    }

    setFormData((prev) => ({
      ...prev,
      paymentAmount: value,
    }));
  };

  // =====================================================
  // GET PAYMENT AMOUNT
  // =====================================================

  const getPaymentAmount = () => {
    return Number(
      formData.paymentAmount
    );
  };

  // =====================================================
  // FORMAT AMOUNT
  // =====================================================

  const formatAmount = (value) => {
    const number =
      Number(value || 0);

    return new Intl.NumberFormat(
      "en-IN"
    ).format(number);
  };

  // =====================================================
  // LOAD RAZORPAY
  // =====================================================

  const loadRazorpay = () => {
    return new Promise(
      (resolve) => {
        // Already loaded

        if (window.Razorpay) {
          resolve(true);
          return;
        }

        const script =
          document.createElement(
            "script"
          );

        script.src =
          "https://checkout.razorpay.com/v1/checkout.js";

        script.async = true;

        script.onload = () => {
          resolve(true);
        };

        script.onerror = () => {
          resolve(false);
        };

        document.body.appendChild(
          script
        );
      }
    );
  };

  // =====================================================
  // VALIDATION
  // =====================================================

  const validateForm = () => {
    // NAME

    if (
      !formData.fullName.trim()
    ) {
      toast.error(
        "Please enter your name."
      );

      return false;
    }

    // MOBILE

    if (
      !/^[6-9]\d{9}$/.test(
        formData.mobile
      )
    ) {
      toast.error(
        "Please enter a valid 10 digit mobile number."
      );

      return false;
    }

    // SERVICE

    if (!formData.service) {
      toast.error(
        "Please select a service."
      );

      return false;
    }

    // OTHER SERVICE

    if (
      formData.service ===
        "Other" &&
      !formData.otherService.trim()
    ) {
      toast.error(
        "Please enter your service requirement."
      );

      return false;
    }

    // LOCATION

    if (!formData.location) {
      toast.error(
        "Please select your location."
      );

      return false;
    }

    // OTHER LOCATION

    if (
      formData.location ===
        "Other" &&
      !formData.otherLocation.trim()
    ) {
      toast.error(
        "Please enter your location."
      );

      return false;
    }

    // ===============================================
    // PAYMENT AMOUNT VALIDATION
    // ===============================================

    if (
      !formData.paymentAmount
    ) {
      toast.error(
        "Please enter payment amount."
      );

      return false;
    }

    const paymentAmount =
      getPaymentAmount();

    if (
      Number.isNaN(paymentAmount)
    ) {
      toast.error(
        "Please enter a valid payment amount."
      );

      return false;
    }

    // Minimum payment

    if (paymentAmount < 1) {
      toast.error(
        "Payment amount must be at least ₹1."
      );

      return false;
    }

    // Maximum safeguard

    if (
      paymentAmount >
      10000000
    ) {
      toast.error(
        "Payment amount is too high."
      );

      return false;
    }

    return true;
  };

  // =====================================================
  // FINAL SERVICE
  // =====================================================

  const getFinalService = () => {
    if (
      formData.service ===
      "Other"
    ) {
      return (
        formData.otherService.trim()
      );
    }

    return formData.service;
  };

  // =====================================================
  // FINAL LOCATION
  // =====================================================

  const getFinalLocation = () => {
    if (
      formData.location ===
      "Other"
    ) {
      return (
        formData.otherLocation.trim()
      );
    }

    return formData.location;
  };

  // =====================================================
  // HANDLE PAYMENT
  // =====================================================

  const handlePayment =
    async (e) => {
      e.preventDefault();
      if (loading || paymentStatus === "verification-pending") return;

      // ===============================================
      // VALIDATE
      // ===============================================

      if (!validateForm()) {
        return;
      }

      setLoading(true);

      setPaymentStatus(
        "creating-order"
      );

      try {
        requireSupabaseConfig();
        // =============================================
        // LOAD RAZORPAY
        // =============================================

        const razorpayLoaded =
          await loadRazorpay();

        if (!razorpayLoaded) {
          throw new Error(
            "Unable to load Razorpay payment gateway."
          );
        }

        // =============================================
        // FINAL VALUES
        // =============================================

        const finalService =
          getFinalService();

        const finalLocation =
          getFinalLocation();

        const finalAmount =
          getPaymentAmount();

        // =============================================
        // CREATE PAYMENT ORDER
        // =============================================

        const orderResponse =
          await fetch(
            `${API_URL}/payments/create-order`,
            {
              method: "POST",

              headers: {
                "Content-Type":
                  "application/json",
              },

              body:
                JSON.stringify({
                  source: "Engineer Site Visit",
                  serviceId:
                    "custom-payment",

                  serviceName:
                    finalService,

                  // CUSTOM AMOUNT
                  amount:
                    finalAmount,

                  customer: {
                    fullName:
                      formData.fullName,

                    mobile:
                      formData.mobile,

                    location:
                      finalLocation,

                    service:
                      finalService,
                  },
                }),
            }
          );

        const orderData =
          await orderResponse.json();

        // =============================================
        // ORDER ERROR
        // =============================================

        if (
          !orderResponse.ok
        ) {
          throw new Error(
            orderData.message ||
              "Unable to create payment order."
          );
        }

        // =============================================
        // OPENING PAYMENT
        // =============================================

        setPaymentStatus(
          "payment-open"
        );

        // =============================================
        // RAZORPAY OPTIONS
        // =============================================

        let checkoutCompleted = false;
        const options = {
          key:
            orderData.key,

          amount:
            orderData.amount,

          currency:
            orderData.currency,

          name:
            "Jaypro Infratech",

          description:
            finalService,

          order_id:
            orderData.orderId,

          // ===========================================
          // CUSTOMER PREFILL
          // ===========================================

          prefill: {
            name:
              formData.fullName,

            contact:
              formData.mobile,
          },

          // ===========================================
          // PAYMENT NOTES
          // ===========================================

          notes: {
            customer_name:
              formData.fullName,

            mobile:
              formData.mobile,

            service:
              finalService,

            location:
              finalLocation,

            payment_amount:
              String(
                finalAmount
              ),
          },

          // ===========================================
          // THEME
          // ===========================================

          theme: {
            color:
              "#dc2626",
          },

          // ===========================================
          // PAYMENT SUCCESS
          // ===========================================

          handler:
            async function (
              response
            ) {
              checkoutCompleted = true;
              setPaymentReference(response.razorpay_payment_id);
              try {
                setLoading(true);

                setPaymentStatus(
                  "verifying"
                );

                // =====================================
                // VERIFY PAYMENT
                // =====================================

                const verifyResponse =
                  await fetch(
                    `${API_URL}/payments/verify`,
                    {
                      method:
                        "POST",

                      headers: {
                        "Content-Type":
                          "application/json",
                      },

                      body:
                        JSON.stringify({
                          localOrderId:
                            orderData.localOrderId,

                          razorpay_payment_id:
                            response
                              .razorpay_payment_id,

                          razorpay_order_id:
                            response
                              .razorpay_order_id,

                          razorpay_signature:
                            response
                              .razorpay_signature,
                        }),
                    }
                  );

                const verifyData =
                  await verifyResponse.json();

                // =====================================
                // VERIFICATION FAILED
                // =====================================

                if (
                  !verifyResponse.ok
                ) {
                  throw new Error(
                    verifyData.message ||
                      "Payment verification failed."
                  );
                }

                // =====================================
                // SUCCESS
                // =====================================

                setPaymentStatus(
                  "success"
                );

                toast.success(
                  `₹${formatAmount(
                    finalAmount
                  )} payment received successfully.`
                );

                // =====================================
                // PARENT CALLBACK
                // =====================================

                if (onSuccess) {
                  onSuccess({
                    fullName:
                      formData.fullName,

                    mobile:
                      formData.mobile,

                    service:
                      finalService,

                    location:
                      finalLocation,

                    amount:
                      finalAmount,

                    paymentId:
                      response
                        .razorpay_payment_id,

                    orderId:
                      response
                        .razorpay_order_id,

                    localOrderId:
                      orderData.localOrderId,
                  });
                }

                // =====================================
                // RESET
                // =====================================

                setFormData({
                  fullName: "",
                  mobile: "",
                  service: "",
                  location: "",
                  otherService: "",
                  otherLocation: "",
                  paymentAmount: "",
                });
              } catch (error) {
                console.error(
                  "Payment verification error:",
                  error
                );

                setPaymentStatus(
                  "verification-pending"
                );

                toast.error(
                  error.message ||
                    "Payment verification failed."
                );
              } finally {
                setLoading(
                  false
                );
              }
            },

          // ===========================================
          // CLOSE RAZORPAY
          // ===========================================

          modal: {
            ondismiss:
              function () {
                if (checkoutCompleted) return;
                setPaymentStatus(
                  "cancelled"
                );

                setLoading(
                  false
                );

                toast.error(
                  "Payment was not completed."
                );
              },
          },
        };

        // =============================================
        // INITIALIZE RAZORPAY
        // =============================================

        const razorpay =
          new window.Razorpay(
            options
          );

        // =============================================
        // PAYMENT FAILURE EVENT
        // =============================================

        razorpay.on(
          "payment.failed",
          function (
            response
          ) {
            setPaymentStatus(
              "failed"
            );

            toast.error(
              response.error
                ?.description ||
                "Payment failed."
            );
          }
        );

        // =============================================
        // OPEN CHECKOUT
        // =============================================

        razorpay.open();

      } catch (error) {
        console.error(
          "Payment error:",
          error
        );

        setPaymentStatus(
          "failed"
        );

        setLoading(false);

        toast.error(
          error.message ||
            "Unable to start payment."
        );
      }
    };

  // =====================================================
  // UI
  // =====================================================

  return (
    <div className="w-full">
      {/* =================================================
          HEADING
      ================================================= */}

      <div className="mb-6 text-center">
        <h2 className="text-2xl font-bold text-gray-900">
          Make Payment
        </h2>

        <p className="mt-2 text-sm leading-6 text-gray-500">
          Enter your details,
          service, location and
          payment amount.
        </p>
      </div>

      {/* =================================================
          FORM
      ================================================= */}

      <form
        onSubmit={
          handlePayment
        }
        className="space-y-4"
      >
        {/* =================================================
            NAME
        ================================================= */}

        <div>
          <label
            htmlFor="payment-name"
            className="mb-1.5 block text-sm font-semibold text-gray-700"
          >
            Name

            <span className="text-red-600">
              {" "}*
            </span>
          </label>

          <input
            id="payment-name"
            type="text"
            name="fullName"
            value={
              formData.fullName
            }
            onChange={
              handleChange
            }
            placeholder="Enter your name"
            autoComplete="name"
            className="
              w-full
              rounded-xl
              border
              border-gray-300
              bg-white
              px-4
              py-3
              text-gray-900
              outline-none
              transition
              placeholder:text-gray-400
              focus:border-red-500
              focus:ring-2
              focus:ring-red-100
            "
          />
        </div>

        {/* =================================================
            MOBILE
        ================================================= */}

        <div>
          <label
            htmlFor="payment-mobile"
            className="mb-1.5 block text-sm font-semibold text-gray-700"
          >
            Mobile Number

            <span className="text-red-600">
              {" "}*
            </span>
          </label>

          <input
            id="payment-mobile"
            type="tel"
            name="mobile"
            value={
              formData.mobile
            }
            onChange={
              handleMobileChange
            }
            placeholder="Enter 10 digit mobile number"
            autoComplete="tel"
            inputMode="numeric"
            maxLength={10}
            className="
              w-full
              rounded-xl
              border
              border-gray-300
              bg-white
              px-4
              py-3
              text-gray-900
              outline-none
              transition
              placeholder:text-gray-400
              focus:border-red-500
              focus:ring-2
              focus:ring-red-100
            "
          />
        </div>

        {/* =================================================
            SERVICE
        ================================================= */}

        <div>
          <label
            htmlFor="payment-service"
            className="mb-1.5 block text-sm font-semibold text-gray-700"
          >
            Service

            <span className="text-red-600">
              {" "}*
            </span>
          </label>

          <select
            id="payment-service"
            name="service"
            value={
              formData.service
            }
            onChange={
              handleChange
            }
            className="
              w-full
              cursor-pointer
              rounded-xl
              border
              border-gray-300
              bg-white
              px-4
              py-3
              text-gray-900
              outline-none
              transition
              focus:border-red-500
              focus:ring-2
              focus:ring-red-100
            "
          >
            <option value="">
              Select Service
            </option>

            {serviceOptions.map(
              (service) => (
                <option
                  key={service}
                  value={service}
                >
                  {service}
                </option>
              )
            )}
          </select>
        </div>

        {/* =================================================
            OTHER SERVICE
        ================================================= */}

        {formData.service ===
          "Other" && (
          <div>
            <label
              htmlFor="other-service"
              className="mb-1.5 block text-sm font-semibold text-gray-700"
            >
              Enter Service

              <span className="text-red-600">
                {" "}*
              </span>
            </label>

            <input
              id="other-service"
              type="text"
              name="otherService"
              value={
                formData.otherService
              }
              onChange={
                handleChange
              }
              placeholder="Enter your service requirement"
              className="
                w-full
                rounded-xl
                border
                border-gray-300
                bg-white
                px-4
                py-3
                outline-none
                focus:border-red-500
                focus:ring-2
                focus:ring-red-100
              "
            />
          </div>
        )}

        {/* =================================================
            LOCATION
        ================================================= */}

        <div>
          <label
            htmlFor="payment-location"
            className="mb-1.5 block text-sm font-semibold text-gray-700"
          >
            Location

            <span className="text-red-600">
              {" "}*
            </span>
          </label>

          <select
            id="payment-location"
            name="location"
            value={
              formData.location
            }
            onChange={
              handleChange
            }
            className="
              w-full
              cursor-pointer
              rounded-xl
              border
              border-gray-300
              bg-white
              px-4
              py-3
              text-gray-900
              outline-none
              focus:border-red-500
              focus:ring-2
              focus:ring-red-100
            "
          >
            <option value="">
              Select Location
            </option>

            {locationOptions.map(
              (item) => (
                <option
                  key={item}
                  value={item}
                >
                  {item}
                </option>
              )
            )}
          </select>
        </div>

        {/* =================================================
            OTHER LOCATION
        ================================================= */}

        {formData.location ===
          "Other" && (
          <div>
            <label
              htmlFor="other-location"
              className="mb-1.5 block text-sm font-semibold text-gray-700"
            >
              Enter Location

              <span className="text-red-600">
                {" "}*
              </span>
            </label>

            <input
              id="other-location"
              type="text"
              name="otherLocation"
              value={
                formData.otherLocation
              }
              onChange={
                handleChange
              }
              placeholder="Enter your city / location"
              className="
                w-full
                rounded-xl
                border
                border-gray-300
                bg-white
                px-4
                py-3
                outline-none
                focus:border-red-500
                focus:ring-2
                focus:ring-red-100
              "
            />
          </div>
        )}

        {/* =================================================
            CUSTOM PAYMENT AMOUNT
        ================================================= */}

        <div>
          <label
            htmlFor="payment-amount"
            className="mb-1.5 block text-sm font-semibold text-gray-700"
          >
            Enter Payment Amount

            <span className="text-red-600">
              {" "}*
            </span>
          </label>

          <div className="relative">
            <div
              className="
                pointer-events-none
                absolute
                inset-y-0
                left-0
                flex
                items-center
                pl-4
                text-lg
                font-bold
                text-gray-700
              "
            >
              
            </div>

            <input
              id="payment-amount"
              type="text"
              name="paymentAmount"
              value={
                formData.paymentAmount
              }
              onChange={
                handleAmountChange
              }
              inputMode="numeric"
              placeholder="Enter amount"
              className="
                w-full
                rounded-xl
                border
                border-gray-300
                bg-white
                py-3
                pl-9
                pr-4
                text-lg
                font-semibold
                text-gray-900
                outline-none
                transition
                placeholder:text-base
                placeholder:font-normal
                placeholder:text-gray-400
                focus:border-red-500
                focus:ring-2
                focus:ring-red-100
              "
            />
          </div>

          <p className="mt-1.5 text-xs text-gray-500">
            Enter the amount you want
            to pay.
          </p>
        </div>


        {/* =================================================
            STATUS
        ================================================= */}

        {paymentStatus ===
          "creating-order" && (
          <div className="rounded-lg bg-blue-50 px-4 py-3 text-center text-sm font-medium text-blue-700">
            Preparing secure
            payment...
          </div>
        )}

        {paymentStatus ===
          "verifying" && (
          <div className="rounded-lg bg-yellow-50 px-4 py-3 text-center text-sm font-medium text-yellow-700">
            Payment received.
            Verifying payment...
          </div>
        )}

        {paymentStatus ===
          "success" && (
          <div className="rounded-lg bg-green-50 px-4 py-3 text-center text-sm font-semibold text-green-700">
            Payment successful.
          </div>
        )}

        {paymentStatus ===
          "failed" && (
          <div className="rounded-lg bg-red-50 px-4 py-3 text-center text-sm font-medium text-red-700">
            Payment failed. Please
            try again.
          </div>
        )}

        {paymentStatus === "verification-pending" && (
          <div role="alert" className="rounded-lg bg-yellow-50 px-4 py-3 text-center text-sm font-medium text-yellow-700">
            Payment confirmation is pending. Do not pay again. Contact our team
            at <a href="tel:+919835852462">+91 9835852462</a> with payment ID: {paymentReference}.
          </div>
        )}

        {paymentStatus ===
          "cancelled" && (
          <div className="rounded-lg bg-gray-50 px-4 py-3 text-center text-sm font-medium text-gray-600">
            Payment cancelled.
          </div>
        )}

        {/* =================================================
            PAY BUTTON
        ================================================= */}

        <button
          type="submit"
          disabled={
            loading ||
            paymentStatus === "verification-pending" ||
            !formData.paymentAmount
          }
          className="
            flex
            w-full
            items-center
            justify-center
            rounded-xl
            bg-red-600
            px-5
            py-4
            text-base
            font-bold
            text-white
            shadow-lg
            transition
            hover:bg-red-700
            disabled:cursor-not-allowed
            disabled:opacity-50
          "
        >
          {loading
            ? "Please Wait..."
            : formData.paymentAmount
            ? `Pay ₹${formatAmount(
                formData.paymentAmount
              )}`
            : "Enter Amount to Pay"}
        </button>

        {/* =================================================
            CANCEL
        ================================================= */}

        {onClose && (
          <button
            type="button"
            onClick={onClose}
            disabled={loading}
            className="
              w-full
              rounded-xl
              border
              border-gray-200
              bg-white
              px-5
              py-3
              text-sm
              font-semibold
              text-gray-600
              transition
              hover:bg-gray-50
              hover:text-red-600
              disabled:opacity-50
            "
          >
            Cancel
          </button>
        )}
      </form>
    </div>
  );
}
