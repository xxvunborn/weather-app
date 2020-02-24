const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");

const routes = require("./routes");

require("dotenv").config();

const port = process.env.PORT || 3001;

const app = express();

app.use(morgan("common"));
app.use(helmet());
app.use(cors());
app.use(express.json());

app.use("/api", routes);

//app.get("/", (req, res) => {
//res.json({ message: "Hello World" });
//});

app.listen(port, () => {
  console.log(`listen at http://localhost:${port}`);
});
