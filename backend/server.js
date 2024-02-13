import express from "express";
import cookieParser from "cookie-parser";
import AuthRoute from "./routes/auth.routes.js";
import MessageRoute from './routes/message.routes.js'
import userRoutes from './routes/user.routes.js'

import connectToMongoDB from "./db/connectToMongoDB.js";
import dotenv from "dotenv";
import { app, server } from "./socket/socket.js";


dotenv.config();
const PORT = process.env.PORT || 5000;

//controllers
app.use(express.json()) // to parse the incoming requests with json payloads (from req.body)
app.use(cookieParser());


app.use("/api/auth", AuthRoute);
app.use("/api/messages",MessageRoute);
app.use("/api/users",userRoutes);
app.use(express.json())


server.listen(PORT, () => {
    connectToMongoDB()
  console.log(`server running at ${PORT}`);
});
