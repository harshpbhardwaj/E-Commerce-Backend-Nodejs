import express from 'express';
import http from "http";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import compression from "compression";
import cors from "cors";
import mongoose from "mongoose"

const app = express();

app.use(cors({
 credentials: true,
}));
app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

const mongo_uri = "mongodb+srv://harshpbhardwaj:6xBVKGQfFG9QABp9@ecom.av3axnl.mongodb.net/?retryWrites=true&w=majority&appName=ECom";
mongoose.Promise = Promise;
mongoose.connect(mongo_uri);
mongoose.connection.on( 'error', ( error: Error)=> console.log(error))


// const server = http.createServer(app);
const server = http.createServer(app);
const port = 5050;
server.listen(port,() => {
    const address = server.address();
    console.log('Server running on http://localhost:'+String(port)+' and http://127.0.0.1:'+String(port));
});