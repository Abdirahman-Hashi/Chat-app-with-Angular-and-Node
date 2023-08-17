const express = require('express');
const app  = express();
const jwt = require('jsonwebtoken');
const { MongoClient } = require('mongodb')
const bcrypt = require('bcrypt');


let client =new  MongoClient("mongodb://localhost:27017/MyDb");

const cors = require('cors');


app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());


const port = 3000;
let database = client.db('mainDb');
app.get('/',(req,res)=>{
   res.send({msg:"you are at home"})
})

app.post('/register',(req,res)=>{
    bcrypt.hash(req.body.password,10, function(err, hash) {
        // Store hash in your password DB.
        database.collection('Users').insertOne({firstName:req.body.firstName, lastName:req.body.lastName, email:req.body.email, password:hash}).
        then((res) => {
            console.log(res)
        })
        .catch((err) => console.log(err))
    })
    
})

app.post('/login',async (req,res)=>{
    try{
            let user =await database.collection('Users').findOne({email: req.body.email})
            if(!user){
                console.error("invalid username or password")
            }else{
                bcrypt.compare(req.body.password, user.password,  function(err, result){
                    if(err) console.log(err)
                    if(!result){
                        console.error("invalid email or password")
                    }else{
                        console.log("loged in")
                        const token = jwt.sign({ id: user.id, email: user.email }, config.secret);
                        res.set('Authorization', `Bearer ${token}`);
                        res.send({userId:user._id, token:token})
                    }
                })
            }
    
    }catch(err){
        throw err
    }
})

app.listen(port,()=>{
    console.log("app is listening to: ",port)
})