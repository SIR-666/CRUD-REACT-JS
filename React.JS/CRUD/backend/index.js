import express from 'express';
import cors from 'cors';
import UserRoute from "./routes/UserRoutes.js";
import dataPenghuni from "./routes/PenghuniRoutes.js";

const app = express();
const port = 5000;
app.use(cors());
app.use(express.json());
app.use(dataPenghuni);
app.use(UserRoute);


app.listen(port, ()=> console.log('listening on port connected'));