import express from 'express';
import cors from 'cors';
import  {
    fetchSingleCheck_In
} from "./db/noMadQueries.js"


import "dotenv/config";

const port = process.env.PORT || 3000;

// Create an instance of express
const requestHandler = express();

const PORT = process.env.PORT || 3123; // Default to 3000 if no port is specified

requestHandler.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

requestHandler.use(cors())

requestHandler.use(express.json());


requestHandler.get('/api/v1/nomad-app', async (req, res) => {
try{
    const singleCheckIn = await fetchSingleCheck_In()
    res.send(singleCheckIn)
}catch(e){
    console.log(e)
    req.status(500).send({"error":"Server Error"})
}});