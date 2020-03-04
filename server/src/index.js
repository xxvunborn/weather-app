const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");

const routes = require("./service/http");

require("dotenv").config();

const port = process.env.PORT || 3001;

const app = express();

app.use(morgan("common"));
app.use(helmet());
app.use(cors());
app.use(express.json());

app.use("/api/favorite_places", routes);

app.listen(port, () => {
  console.log(`listen at http://localhost:${port}`);
});

// ==== examples
//(async () => {
//try {
//const res = await getFavoritePlaces();
//console.log("ehre");
//console.log(res);
//} catch (err) {
//console.log(err);
//}
//})();

//const res = getFavoritePlaces().then(data => {
//console.log("async then", data);
//});
//console.log("async", res);

//console.log("then", getFavoritePlaces2());

//app.get("/", (req, res) => {
//res.json({ message: "Hello World" });
//});
