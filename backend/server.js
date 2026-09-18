import express from "express";
import cors from "cors";

const app = express();

app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "https://jayproinfratech.com",
      "https://www.jayproinfratech.com",
    ],
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

app.use(express.json());

app.get("/api/test", (req, res) => {
  res.json({ message: "API working" });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});