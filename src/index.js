import "dotenv/config";
import app from "./app.js";
import { connectDB } from "./db/index.js";

const PORT = process.env.PORT || 8000;

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log("Sever running on port " + PORT);
    });
  })
  .catch((error) => {
    console.error("MongoDB connection failed : ", error);
  });
