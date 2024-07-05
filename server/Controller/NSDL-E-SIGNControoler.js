const NsdlesignDetails = require('../model/NSDL-E-SIGNmodel');

const nsdlesignDetailsController = {
    createNsdlesign: async (req, res) => {
        try {
            console.log('Request body:', req.body); 
            const data = req.body;
            const newNsdlesignDetails = await NsdlesignDetails.createNsdlesign(data);
            res.status(201).send({ status: "1", data: newNsdlesignDetails });
        } catch (error) {
            console.error('Error in controller:', error); 
            res.status(500).send({ status: "0", error: error.message });
        }
    },

    getAllgetAllNsdlesign: async(req, res, next) =>{
        try {
            const allNsdlesignDetails = await NsdlesignDetails.getAllNsdlesign();
            res.status(200).json({ status: "1", data: allNsdlesignDetails });
        } catch (error) {
            console.error(error);
            res.status(500).json({ status: "0", error: error.message });
        }
    },

    updateNsdlesign: async (req, res) => {
        try {
            const id = req.params.id;
            const data = req.body;
            const updatedNsdlesignDetails = await NsdlesignDetails.updateNsdlesign(id, data);
            res.status(200).json({ status: "1", data: updatedNsdlesignDetails });
        } catch (error) {
            console.error(error);
            res.status(500).json({ status: "0", error: error.message });
        }
    },

    deleteNsdlesign: async (req, res) => {
        try {
            const id = req.params.id;
            const deletedNsdlesignDetails = await NsdlesignDetails.deleteNsdlesign(id);
            res.status(200).json({ status: "1", data: deletedNsdlesignDetails });
        } catch (error) {
            console.error(error);
            res.status(500).json({ status: "0", error: error.message });
        }
    }
        
    }


module.exports = nsdlesignDetailsController;
