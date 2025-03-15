import express from "express";

const app = express()
app.use(express.json())

const PORT = 8282;

app.listen(PORT, ()=>{
    console.log(`Server is running on ${PORT}`);
})