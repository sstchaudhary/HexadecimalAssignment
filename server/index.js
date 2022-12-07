import express from 'express';
import route from './route/route.js';
import cors from 'cors';
const app=express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());
app.use('/',route);
const PORT=process.env.PORT||8000
app.listen(PORT,'localhost',()=>{
    console.log(`server running on port ${PORT} `);
})