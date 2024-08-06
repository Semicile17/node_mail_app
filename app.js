const dotenv = require("dotenv");
const express = require("express");
const cors = require('cors')
const morgan = require('morgan');

const sendMail = require('./utils/sendMail')

dotenv.config({ path: './config.env' });

const app = express();
 
console.log(process.env.NODE_ENV)

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(express.json())
app.use(cors());

app.post('/api/v1/mails',async (req,res)=>{
    try{
        const title = req.body.title;
        const body = req.body.body;
        const email = req.body.email;
        
        const sendStatus = await sendMail(title,body,email);
        return res.status(201).json({
            status:'success',
            reponse : sendStatus
        })

    }catch(err){
        res.status(400).json({
            status:'fail',
            error : err.message || err
        })
    }

})
app.get('/',(req,res)=>{
    res.status(200).send('<h1>SERVER RUNNING. use api/v1/emails</h1>')
})

const port = process.env.PORT;

app.listen(port,console.log(`server listening on port ${port}`));