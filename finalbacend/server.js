const express = require("express");
const cors = require("cors");
const bodyparser = require("body-parser");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
dotenv.config();
DB = process.env.DB_URL;

try {
  mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("Server connected to MongoDb!");
} catch (err) {
  console.error(err);
  throw new DbConnectionError();
}

const app = express();

app.use(cors());
app.use(bodyparser.json());

const { Schema } = mongoose;

const robotsSchema = new Schema({
  image: {
    type: String,
  },
  name: {
    type: String,
  },
  title: {
    type: String,
  },
});

const Robots = mongoose.model("robots ", robotsSchema);

app.get("/robots", async (req, res) => {
  try {
    const robots = await Robots.find();
    res.send(robots);
  } catch (err) {
    res.status(500).json({ message: err });
  }
});
app.get("/robots/:id", async (req, res) => {
  try {
    const robotsId = req.params.id;
    const robots = await Robots.findById(robotsId);
    res.send(robots);
  } catch (err) {
    res.status(500).json({ message: err });
  }
});
app.post("/robots", async (req, res) => {
  const Updaterobots = req.body;
  try {
    let robots = await Robots(Updaterobots);
    robots.save();
    res.send(robots);
  } catch (err) {
    res.status(500).json({ message: err });
  }
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server Qaldirildi ${PORT}`);
});
