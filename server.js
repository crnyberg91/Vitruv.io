const express = require("express");
const path = require("path");
const mongoose = require("mongoose");

// const bodyparser = require("body-parser");
// const cors = require("cors");
const PORT = process.env.PORT || 3001;
const app = express();
// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/virtuviodb", { useNewUrlParser: true});

const connection = mongoose.connection;

connection.once("open", function () {
  console.log("MongoDB connected")
})

if (process.env.NODE_ENV === "production") {
  app.get('*', function (req, res) {
    res.json(path.join(__dirname + "./client/build/index.html"));
  })
}

// Define API routes here
require("./routes/api-routes")(app);

// Send every other request to the React app
// Define any API routes before this runs
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
