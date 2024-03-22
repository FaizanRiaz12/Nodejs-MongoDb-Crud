const { register, getuser, getalluser, update, deletedata } = require("../controller/usercontroller");
const route = require ("express").Router();





route.post("/register", register);
route.get("/getuser" , getuser);
route.get("/getalluser/:id", getalluser);
route.put("/update/:id", update);
route.delete("/deletedata/:id", deletedata);
module.exports=route;