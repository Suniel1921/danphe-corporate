const express = require ('express');
const dotenv = require ('dotenv');
dotenv.config();
const cors = require ('cors');
const connectDB = require('./config/dbConn');
const authRoute = require ('./routes/authRoute');



const port = process.env.PORT || 5000;
const app = express();

//middleware
app.use(express.json());
app.use(cors());



//database Connection
connectDB();


//routes
app.use('/api/v1/auth', authRoute)


app.get('/', (req ,res)=>{
    res.send("WelCome to Nepal Tech");
})

app.listen(port, ()=>{
    console.log(`Server is running on port no : ${port}`);
})