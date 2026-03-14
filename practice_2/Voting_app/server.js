const express = require('express')

const app = express();

const bodyParser = require('body-parser')
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => { console.log('Lostening at Port 3000') })