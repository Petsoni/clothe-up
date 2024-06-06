import cors from 'cors';
import express from 'express';
import dotenv from 'dotenv';
import http from 'http';
import bodyParser from 'body-parser';
import {router as weather} from './routes/weather-routes';

dotenv.config();

const PORT = 3000

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(bodyParser.json());
app.use(weather)

const SERVER = http.createServer(app);

app.get("/", (req, res) => {
  res.send("Clothe Up Backend API");
});

SERVER.listen(PORT, () => {
  console.log(`Running on port: ${PORT}`);
});
