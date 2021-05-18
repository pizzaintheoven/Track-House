import express from 'express';
const PORT = 9001;

const app = express();

app.get('/', (req,res)=>{
    res.send('TS+EX');
});

app.listen(PORT, () =>{
    console.log(`Listening on https://[::1]:${PORT}`);
})