const MinorPanDetails = require('../model/MinorPanmodels');

const minorPanController = {
    createMinorPanDetails: async (req, res) => {
        try {
            const data = req.body;
            const newMinorPanDetails = await MinorPanDetails.createMinorPanDetails(data);
            res.status(201).send({status:"1" , data: newMinorPanDetails});
        } catch (error) {
             console.error(error);
             res.status(500).send({status:"0", error: error.message});
        }
    },

    getAllMinorPanDetails: async (req, res) => {
        try {
          const allMinorPanDetails = await MinorPanDetails.getAllMinorPanDetails();
          res.status(200).json({ status: "1", data: allMinorPanDetails });
        } catch (error) {
          console.error(error);
          res.status(500).json({ status: "0", error: error.message });
        }
      },
    
      updateMinorPanDetails: async (req, res) => {
        try {
          const id = req.params.id;
          const data = req.body;
          const updatedMinorPanDetails = await MinorPanDetails.updateMinorPanDetails(id, data);
          res.status(200).json({ status: "1", data: updatedMinorPanDetails });
        } catch (error) {
          console.error(error);
          res.status(500).json({ status: "0", error: error.message });
        }
      },
}


module.exports = minorPanController;