import cors from "cors";

export function createCorsMiddleware(env = process.env) {
  const origins = [
    "https://jayproinfratech.com",
    "https://www.jayproinfratech.com",
    ...(env.CLIENT_URL || "").split(","),
    ...(env.NODE_ENV !== "production"
      ? ["http://localhost:5173", "http://127.0.0.1:5173"]
      : []),
  ].map(origin => origin.trim().replace(/\/+$/, "")).filter(Boolean);

  return cors({
    origin: origins,

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
