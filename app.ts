import { createServer } from "./app/index";
import env from "dotenv";

// Set up the environment
process.env = { ...process.env, ...env.config().parsed };

if (!process.env.PORT || !process.env.CLIENT_URL) {
  throw new Error(
    "Please set environment variables in .env file. Rename .env.example to .env for default settings."
  );
}

// Serve
createServer(parseInt(process.env.PORT), process.env.CLIENT_URL);
