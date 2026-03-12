import express from "express";
import dotenv from "dotenv";
import bcrypt from "bcryptjs";
import main_router from "./router.mjs";

dotenv.config();

const app = express();
const PORT = 8080;
// Do authentication middleware

app.use("/", main_router);

app.listen(PORT, "127.0.0.1", () => {
  console.log(`Server running at localhost:${PORT}`);
});
