import { useState } from "react";
import toast from "react-hot-toast";
import {
  User,
  Phone,
  MapPin,
  Briefcase,
  IndianRupee,
  ChevronDown,
} from "lucide-react";

import { servicePrice, locationCharge } from "../data/pricing";

const BookingForm = () => {
  const initialState = {
    name: "",
    mobile: "",
    purpose: "",
    location: "",
    address: "",
    amount: "",
  };

  const [formData, setFormData] = useState(initialState);

  // ✅ This is the correct place for handleChange
  const handleChange = (e) => {
    const { name, value } = e.target;

    const updatedData = {
      ...formData,
      [name]: value,
    };

    if (updatedData.purpose && updatedData.location) {
      const service = servicePrice[updatedData.purpose] || 0;
      const location = locationCharge[updatedData.location] || 0;

      updatedData.amount = service + location;
    } else {
      updatedData.amount = "";
    }

    setFormData(updatedData);
  };

  // handleSubmit...
};