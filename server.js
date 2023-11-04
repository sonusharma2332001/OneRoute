const express =  require('express')
const mongoose = require('mongoose')
const dotenv =require('dotenv')
const routes = require('./Router/routes')
dotenv.config()
const app = express();
const cors =  require("cors")


// bodyParser
app.use(express.json());
app.use(cors());
app.use(express.static(process.env.PUBLIC_DIR))
app.use('/landing',(req,res)=>{
    res.sendFile(__dirname+'/build/index.html')
})
app.use('/all',(req,res)=>{
    res.sendFile(__dirname+'/build/index.html')
})

// DataBase Connection
mongoose
.connect(process.env.dburl)
.then(()=>{
    console.log("DB connected");
    app.listen(process.env.port || 8000,()=>{
        console.log("serverr started")
    });
})
.catch((err)=>{
    console.log(err,"error");
})

app.get('/',(req,res)=>{
    res.send("api is data running")
})

app.use(routes)