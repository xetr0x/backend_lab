import express from "express";
import dotenv from "dotenv";
import bcrypt from "bcryptjs";
import main_router from "./router.mjs";
import helmet from "helmet";

dotenv.config();

const app = express();
const PORT = 8080;
// Do authentication middleware

app.use(express.json());
app.use(helmet());
app.disable("x-powered-by");
app.use("/api", main_router);

app.listen(PORT, () => {
  console.log(`Server running at localhost:${PORT}`);
});
