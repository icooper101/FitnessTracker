const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");


const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

// const databaseUrl = "workouts_db";
// const collections = ["workouts"];

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
}
);

app.use(require("./routes/api"))
app.use(require("./routes/html"))

app.listen(process.env.PORT || 3050, () => {
  console.log("App running on port 3050!");
});
