import  express  from "express";
import cors from "cors";
import authRouter from "./router/authRoutes.js"
import locationRoutes from "./router/locationRoutes.js"
import mongoose from "mongoose";
import { countriesData } from "./data.js";
import locationsModel from "./model/locationsModel.js";
const app = express();

const PORT = 5400

const connect = async () =>{
    try {
        await mongoose.connect("mongodb+srv://anshulwork1998:freq.research@cluster-0.xi2sr2v.mongodb.net/?retryWrites=true&w=majority",{
            useNewUrlParser: true,
            useUnifiedTopology: true,
          })
        console.log("Connection established with database")
    } catch (error) {
        throw error
    }
}

app.use(express.json())
app.use(cors())

// locationsModel.insertMany(countriesData)          <-----------For inserting few data on Countires,States and Citites in DB

app.use("/auth", authRouter)
app.use("/location", locationRoutes)

app.listen(PORT || 5450,()=>{
    connect()
    console.log(`Server is running on port: ${PORT}`)
})