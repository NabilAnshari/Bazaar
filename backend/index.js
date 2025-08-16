import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import db from "./config/Database.js";
import router from "./routes/index.js";
import Users from "./models/UserModel.js"; // Import model biar bisa di-sync

dotenv.config();
const app = express();

(async () => {
  try {
    // Tes koneksi ke database
    await db.authenticate();
    console.log(" Database Connected...");

    // Sinkronisasi model -> otomatis buat tabel kalau belum ada
    await db.sync(); 
    console.log("All models were synchronized successfully.");
  } catch (error) {
    console.error("Database connection error:", error);
  }
})();

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(cookieParser());
app.use(express.json());
app.use(router);

app.listen(5000, () => console.log("Server running at port 5000"));
