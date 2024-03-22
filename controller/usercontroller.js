const usermodel= require("../model/usermodel");



// create method
exports.register = async (req, res) => {
    try {
        const {name, age}= req.body;
        const senddata = new usermodel({name,age});
        const savedata= await senddata.save();
        res.send(savedata);
    } catch (error) {
        res.send(error);
    }
}
//  single get method
exports.getuser = async(req, res) => {
    try {
        const getdata = await usermodel.find();
        res.send(getdata);
    } catch (error) {
        res.send(error);
    }
}
// all get data method

exports.getalluser = async(req, res) => {
    try {
        const id= req.params.id
        const getall = await usermodel.findById({_id:id});
        res.send(getall);
    } catch (error) {
        res.send(error)
        console.log(error)
    }
}

// update data method
exports.update = async(req, res) => {
    try {
        const id = req.params.id;
        const updatedata = await usermodel.findByIdAndUpdate({_id:id},req.body,{new:true});
        res.send(updatedata);
    } catch (error) {
        res.send(error);
    }
}


// delete data method

exports.deletedata= async(req, res) =>{
    try {
        const id = req.params.id;
        const deletedata = await usermodel.findByIdAndDelete({_id:id});
        res.send(deletedata);
    } catch (error) {
        res.send(error);
    }
}