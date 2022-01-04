import express from "express";
import mongoose from "mongoose";
import bodyparser from "body-parser";
import cors from "cors";
import { routes } from "./routes/soccerRoutes.js";

const app = express();
const PORT = 4000;

// mongo connection
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/soccerDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// bodyparser setup

app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

app.use(cors());

routes(app);

app.get("/", (req, res) => res.send(`Our soccer app is running on ${PORT}`));

app.listen(PORT, () => console.log(`Your app is running on port ${PORT}`));
