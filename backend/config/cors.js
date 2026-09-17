import cors from "cors";

export function createCorsMiddleware(env = process.env) {
  const allowedOrigins = [
    "https://jayproinfratech.com",
    "https://www.jayproinfratech.com",
    "http://localhost:5173",
  ];

  // Optional additional origins from environment variable
  if (env.CLIENT_URL) {
    const additionalOrigins = env.CLIENT_URL
      .split(",")
      .map((origin) => origin.trim().replace(/\/+$/, ""))
      .filter(Boolean);

    allowedOrigins.push(...additionalOrigins);
  }

  return cors({
    origin: function (origin, callback) {
      // Allow requests without Origin
      // e.g. Postman, curl, server-to-server
      if (!origin) {
        return callback(null, true);
      }

      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      console.log("CORS blocked origin:", origin);

      return callback(
        new Error(`CORS blocked origin: ${origin}`)
      );
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
      "Origin",
      "X-Requested-With",
    ],

    optionsSuccessStatus: 204,
  });
}