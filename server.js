const express = require('express');
const cors = require('cors');
const {urlencoded} = require("express");

const app = express();

let corsOptions = {
  origin: 'https//localhost:8081'
}

//middleware
app.use(cors(corsOptions));
app.use(express.json());
app.use(urlencoded({extended: true}))

//routers
const issueRouter = require('./routes/issueRouter')
const agentRouter = require('./routes/agentRouter')

app.use('/api/agents', agentRouter);
app.use('/api/issues', issueRouter);

// test api
app.get('/', (req, res) => {
  res.json({message: 'hello from node'})
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}...`)
});
