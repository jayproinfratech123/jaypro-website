import cors from "cors";

export function createCorsMiddleware(env = process.env) {
  const allowedOrigins = new Set([
    "https://jayproinfratech.com",
    "https://www.jayproinfratech.com",
  ]);

  // Allow localhost only during development
  if (env.NODE_ENV !== "production") {
    allowedOrigins.add("http://localhost:5173");
  }

  // Optional additional origins
  if (env.CLIENT_URL) {
    env.CLIENT_URL
      .split(",")
      .map((origin) => origin.trim().replace(/\/+$/, ""))
      .filter(Boolean)
      .forEach((origin) => allowedOrigins.add(origin));
  }

  const corsOptions = {
    origin(origin, callback) {
      // Postman/curl/server-to-server requests
      if (!origin) {
        return callback(null, true);
      }

      if (allowedOrigins.has(origin)) {
        return callback(null, true);
      }

      console.error("CORS blocked origin:", origin);

      return callback(null, false);
    },

    credentials: true,

    methods: [
      "GET",
      "HEAD",
      "POST",
      "PUT",
      "PATCH",
      "DELETE",
      "OPTIONS",
    ],

    allowedHeaders: [
      "Content-Type",
      "Authorization",
      "Accept",
    ],

    // Finish permitted OPTIONS requests here; never pass them to auth.
    preflightContinue: false,
    optionsSuccessStatus: 204,
  };

  return cors(corsOptions);
}
