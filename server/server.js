const express = require ('express') ;
const bodyParser = require('body-parser')
const cors = require('cors');
const path = require("path");
var mongoose = require("mongoose");
const port=(process.env.PORT || 5000);

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
    extended:true
}));

require('dotenv').config();


const connection = process.env.DATABASE_URL;
mongoose.connect(connection)
    .then(() => console.log("Database Connected Successfully"))
    .catch(err => console.log(err));

// schema and model 
const userDetails = require('./models/Users');

// post user info
app.post("/createUser", (req,res)=>{
    const name = req.body.name;
    const pho = req.body.pho;
    const message = req.body.message;
 
    const newUser = new userDetails({
        name,pho, message
     
    });
    newUser
    .save()
    .then((doc) => console.log(doc))
    .catch((err) => console.log(err));
    console.log("data added")
});

// get user
app.get('/users', (req,res)=>{
    userModel.find()
    .then(users=> res.json(users))
    .catch((err) => console.log(err));
})

if(process.env.NODE_ENV ==="production"){
    app.use(express.static("client/build"));
    app.get("*", (req,res) => {
      res.sendFile(path.resolve(__dirname,"client", "build", "index.html"))
    });
  }
    
   // listen post
app.listen(port, ()=>{
    console.log('listening to port ')
})