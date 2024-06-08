import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";
import routes from "./routes/routes.js";
import config from "./config/config.js";

const app = express();

app.use(cors());
app.use(cookieParser());

//parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/titan/v1", routes);

async function main() {
  try {
    await mongoose.connect(config.database_url);
    app.listen(config.port, () => {
      console.log(
        `Database connected and server is listening on port ${config.port}`
      );
    });
  } catch (error) {
    console.log(error);
  }
}

main();
