import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
const PORT = process.env.PORT;



const app = express();

app.get('/', (req,res)=>{
    res.send('TS+EX');
});

app.listen(PORT, () => {
    console.log(`Listening on http://[::1]:${PORT}`);
})