import cors from "cors";

export function createCorsMiddleware() {
  return cors({
    origin: [
      "https://jayproinfratech.com",
      "https://www.jayproinfratech.com",
      "http://localhost:5173",
    ],

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