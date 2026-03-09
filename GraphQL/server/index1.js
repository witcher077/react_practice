import express from "express"
import dotenv from "dotenv"
import contactRoutes from "./Routes/Routes.js"

const app =express();
const port =process.env.PORT||5000;
app.use("/api/contacts",contactRoutes )

app.listen(port,()=>{
    console.log(`Server is running at ${port}`)
});