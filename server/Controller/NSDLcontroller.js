const NSDLDetails = require('../model/NSDLmodel');

const nsdlController = {
    createNSDLDetails: async (req,res)=>{
        try {
            const data = req.body;
            const newNSDLDetails = await NSDLDetails.createNSDLDetails(data)
            res.status(201).send ({status:data,data:newNSDLDetails})
        } catch (error) {
            console.error(error);
            res.status(500).send({status:"0",error:error.message})
            
        }
    },
    getAllNsdlDetails: async (req,res)=>{
        try {
            const allNSDLDetails = await NSDLDetails.getAllNSDLDetails();
            res.status(200).send({status:"1",data:allNSDLDetails})
        } catch (error) {
            console.error(error);
            res.status(500).send({status:"0",error:error.message})
            
        }
    },
    getNSDLDetailsById: async (req,res)=>{
        try {
            const id = req.params.id;
            const nsdlDetails = await NSDLDetails.getNSDLDetailsById(id);
            res.status(200).send({status:"1",data:nsdlDetails})
        } catch (error) {
            console.error(error);
            res.status(500).send({status:"0",error:error.message})
            
        }
    },

    updateNSDLDetails: async (req,res)=>{
        try {
            const id = req.params.id;
            const data = req.body;
            const updatedNSDLDetails = await NSDLDetails.updateNSDLDetails(id, data);
            res.status(200).json({ status: "1", data: updatedNSDLDetails });
        } catch (error) {
            console.error(error);
            res.status(500).json({ status: "0", error: error.message });
        }
    },

    deleteNSDLDetails: async (req,res)=>{
        try {
            const id = req.params.id;
            const deletedNSDLDetails = await NSDLDetails.deleteNSDLDetails(id);
            res.status(200).json({ status: "1", data: deletedNSDLDetails });
        } catch (error) {
            console.error(error);
            res.status(500).json({ status: "0", error: error.message });
        }
    }
}


module.exports = nsdlController;