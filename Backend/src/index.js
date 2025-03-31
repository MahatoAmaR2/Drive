import dotenv from "dotenv";
import connectDB from "./configs/dbConnect.js";
import app from "./app.js";
dotenv.config({
  path: "./.env",
});

app.get("/",(req, res)=>{
  res.send("<h1>Har Har Mahadev</h1>")
})
connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8028, () => {
      console.log(`Server is running at port : ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("MONGO db connection failes !!", err);
  });
