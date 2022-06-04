const express = require("express");
const cors = require("cors");
const app = express();
const db = require("./models/index");

const corsOptions = {
  origin: "*"
};
app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.json({ message: "Welcome to Review-Endpoint application." });
});

require("./routes/routes")(app);
// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`);
});