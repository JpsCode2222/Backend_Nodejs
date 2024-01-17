import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(cors());

// CORS PACKAGE USE AS ALSO
// app.use(
//   cors({
//     origin: process.env.CORS_ORIGIN,
//     Credential: true,
//   })
// );

// TO ACCESS JSON DATA
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());

export { app };
