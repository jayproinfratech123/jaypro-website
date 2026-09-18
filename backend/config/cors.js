import cors from "cors";

// ----------------------------------------------------
// CORS CONFIGURATION
// ----------------------------------------------------

export function createCorsMiddleware(env = process.env) {

  // --------------------------------------------------
  // ALLOWED ORIGINS
  // --------------------------------------------------

  const allowedOrigins = new Set([
    "https://jayproinfratech.com",
    "https://www.jayproinfratech.com",

    // Local development
    "http://localhost:5173",
    "http://127.0.0.1:5173",
    "http://localhost:3000",
    "http://127.0.0.1:3000",
  ]);


  // --------------------------------------------------
  // ADD CLIENT_URL FROM ENV
  // --------------------------------------------------

  if (env.CLIENT_URL) {

    const envOrigins = env.CLIENT_URL
      .split(",")
      .map((origin) =>
        origin.trim().replace(/\/+$/, "")
      )
      .filter(Boolean);

    for (const origin of envOrigins) {
      allowedOrigins.add(origin);
    }
  }


  // --------------------------------------------------
  // CORS OPTIONS
  // --------------------------------------------------

  const corsOptions = {

    origin(origin, callback) {

      console.log(
        "Incoming Request Origin:",
        origin || "No Origin"
      );


      // ------------------------------------------------
      // REQUEST WITHOUT ORIGIN
      // ------------------------------------------------
      //
      // Allows:
      // curl
      // Postman
      // server-to-server requests
      //

      if (!origin) {

        return callback(
          null,
          true
        );
      }


      // ------------------------------------------------
      // NORMALIZE ORIGIN
      // ------------------------------------------------

      const normalizedOrigin =
        origin.replace(/\/+$/, "");


      // ------------------------------------------------
      // CHECK ALLOWED ORIGIN
      // ------------------------------------------------

      if (
        allowedOrigins.has(
          normalizedOrigin
        )
      ) {

        console.log(
          "CORS Allowed:",
          normalizedOrigin
        );

        return callback(
          null,
          true
        );
      }


      // ------------------------------------------------
      // BLOCK UNKNOWN ORIGIN
      // ------------------------------------------------

      console.warn(
        "CORS Blocked:",
        normalizedOrigin
      );

      const error =
        new Error(
          "Not allowed by CORS"
        );

      error.statusCode = 403;

      return callback(error);
    },


    // --------------------------------------------------
    // COOKIES / AUTH
    // --------------------------------------------------

    credentials: true,


    // --------------------------------------------------
    // ALLOWED METHODS
    // --------------------------------------------------

    methods: [
      "GET",
      "HEAD",
      "POST",
      "PUT",
      "PATCH",
      "DELETE",
      "OPTIONS",
    ],


    // --------------------------------------------------
    // ALLOWED HEADERS
    // --------------------------------------------------

    allowedHeaders: [
      "Content-Type",
      "Authorization",
      "Accept",
      "Origin",
      "X-Requested-With",
    ],


    // --------------------------------------------------
    // EXPOSED HEADERS
    // --------------------------------------------------

    exposedHeaders: [
      "Content-Length",
    ],


    // --------------------------------------------------
    // PREFLIGHT STATUS
    // --------------------------------------------------

    optionsSuccessStatus: 204,


    // --------------------------------------------------
    // PREFLIGHT
    // --------------------------------------------------

    preflightContinue: false,
  };


  // --------------------------------------------------
  // RETURN CORS MIDDLEWARE
  // --------------------------------------------------

  return cors(corsOptions);
}