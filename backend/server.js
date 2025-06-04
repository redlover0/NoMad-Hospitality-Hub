import express from 'express';
import cors from 'cors';

import "dotenv/config";


const port = process.env.PORT || 3000;

// Create an instance of express
const requestHandler = express();

const PORT = process.env.PORT || 3123; // Default to 3000 if no port is specified
console.log(port);

requestHandler.use(cors())

requestHandler.use(express.json());