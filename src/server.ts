import mongoose from "mongoose";
import config from "./config";
import app from "./app";

async function main() {
  try {
    await mongoose.connect(`${config.databaseUrl}`);
    console.log("Database connected");

    app.listen(`${config.port}`, () => {
      console.log(`Application running on http://localhost:${config.port}`);
    });
  } catch (err) {
    console.log("error =>", err);
  }
}

main();
