import express from "express";
import cors from "cors";
import { routes } from "./routes";

const app = express();

//middlewares
app.use(cors(/*{origin: 'http://localhost:3000'}*/));
app.use(express.json());

//end-points
app.use(routes);

//start
app.listen(3333, () => {
  console.log("HTTP server running!");
});
