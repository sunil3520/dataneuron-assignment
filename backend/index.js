const express = require("express");
const { connection } = require("./config/db");
const CrudRoute = require("./routes/routes")
const cors = require("cors");
require("dotenv").config();
const app = express();
app.use(cors());
app.use(express.json());
app.use("/", CrudRoute);

app.listen(process.env.PORT, async () => {
  try {
    await connection;
    console.log("Mongo is connected");
  } catch (error) {
    console.log(error, "Error");
    console.log("Mongo not connected");
  }

  console.log(`Server is running on port ${process.env.PORT}`);
});
