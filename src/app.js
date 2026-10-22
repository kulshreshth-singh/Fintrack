import express from 'express';


const app = express();

app.get("/", (req , res) =>{
    res.send("FinTrack API is running.");
})

app.get("/transaction", (req , res) =>{
    res.send("Transactions endpoint is working.");
})


export default app;