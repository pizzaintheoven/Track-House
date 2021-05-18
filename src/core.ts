import express from 'express';
import dotenv from 'dotenv';

const PORT = process.env.PORT;



const app = express();

app.get('/', (req,res)=>{
    res.send('TS+EX');
});

app.listen(PORT, () =>{
    console.log(`Listening on https://[::1]:${PORT}`);
})