const express = require('express');
const fetch = require('node-fetch')
const path = require('path')
const cors = require('cors')

const app = express();
app.use(express.json());
app.use(cors())
const port = 5000 || process.env.PORT;
app.use(express.static(path.join(__dirname,'public')))

app.get('/data',async (req,res) => {
    let data =await fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json())
    res.json(data)
})

app.listen(port,()=>{
    console.log(`Server running on port ${port}`);
})