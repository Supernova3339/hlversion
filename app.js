const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

app.get('/', (req,res)=>{
  res.send(process.env.VERSION);
})
app.listen(PORT,()=>console.log(`Server started on port ${PORT}...`))