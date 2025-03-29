import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.js";
import bookRoutes from "./routes/book.js";
import sequelize from "./config/db.js";
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/auth", bookRoutes);

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Hello my friend!");
});

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

// sequelize
//   .sync()
//   .then(() => console.log("Database synced"))
//   .catch((err) => console.error("Error syncing database:", err));

(async () => {
  try {
    await sequelize.authenticate();
    console.log("Database connection has been established successfully.");
    // Start the server only if the database connection is successful
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
})();
