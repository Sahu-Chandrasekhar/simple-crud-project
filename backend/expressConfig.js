const express = require("express");
const cors = require('cors');

const app = express();
app.use(cors());

// const router = express.Router();

app.listen(5000);
app.use(express.json())
module.exports= app;
