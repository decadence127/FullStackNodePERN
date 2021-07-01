const express = require("express");
require("dotenv").config();

const entities = require("./entities/entities");
const sequelize = require("./database");
const PORT = process.env.PORT || 5050;
const cors = require("cors");
const fileUpload = require("express-fileupload");
const router = require("./routes/index");
const errorHandler = require("./middleware/ErrorHandling");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.resolve(__dirname, "static")));
app.use(fileUpload({}));
app.use("/api", router);

app.get("/", (req, res) => {
  res.status(200).json({ message: "OK" });
});

app.use(errorHandler);

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();

    app.listen(PORT, () => console.log(`Server listening on ${PORT}`));
  } catch (e) {
    console.log(e);
  }
};

start();
