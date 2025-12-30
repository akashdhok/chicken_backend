
import dotenv, { config } from "dotenv"
import express from 'express'
import morgan from "morgan"
import cors from "cors"
import bodyParser from "body-parser"
import DbConnect from "./config/db.connect.js"
const app = express();
dotenv.config();
const Port = process.env.PORT || 3000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : true}))


app.use(cors({
    origin : true,
    credentials : true,
    methods:["POST" , "GET" , "PATCH" , "PUT", "DELETE"],
    allowedHeaders :["Content-Type", "Authorization"]
}))


app.use(morgan('dev'))


DbConnect()
app.listen(Port , ()=>{
    console.log(`listening at the port of ${Port}`)
})


