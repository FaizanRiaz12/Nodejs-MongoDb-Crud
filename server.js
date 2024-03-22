const express = require ("express");
const app = express();
 require("../Backend/config/database");
const route= require("./Router/route");


app.use(express.json());
app.use(route);

const PORT = 5000;





app.listen(PORT, (req , res) => {
    console.log(`Server in Running on PORT No:${PORT}`);
})