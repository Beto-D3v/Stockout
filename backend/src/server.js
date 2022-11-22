const express = require('express');
const routes = require("./routes")
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.urlencoded({extended: true}))
app.use(express.json())
// app.use(express.static("./routes.js"))
app.use(routes)
const PORT = 8080;
app.listen(PORT, () => {
   console.log("O servidor esta pronto na url: localhost:" + PORT)
});