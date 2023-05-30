import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
import mongoose from "mongoose";

const app = express();
const PORT = 3000;

app.set("port", PORT);
app.use(express.json());

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI!);
    console.log("Conexión exitosa a la base de datos");
  } catch (error) {
    console.error("Error al conectar a la base de datos:", error);
    process.exit(1);
  }
};

connectDB()
  .then(() => {
    app.listen(app.get("port"), () => {
      console.log(`Server on port ${app.get("port")}`);
    });
  })
  .catch((error) => {
    console.error("Error al conectar a la base de datos:", error);
    process.exit(1);
  });
