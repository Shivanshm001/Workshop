const WorkshopModle = require('../db/WorkshopModel');
const displayWorkshop = async (req, res, next) => {
    try {
        const workshops = await WorkshopModle.find({});
        res.status(200).json({ workshops });
    } catch (error) {
        res.status(404).json({ msg: "No workshops found" })
    }
}

const createWorkshop = async (req, res, next) => {
    try {
        const workshop = await WorkshopModle.create(req.body)
        res.status(201).json({ workshop })
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Internal server error." })
    }
}

const updateWorkshop = async (req, res, next) => {
    const { id: workshopID } = req.params
    try {
        const workshop = await WorkshopModle.updateOne({ _id: workshopID }, req.body, {
            new: true,
            runValidators: true,
        })
        if(!workshop){
            res.status(404).json({msg: "No workshop found."})
            return;
        }
        res.status(200).json({ msg: "Updated" })
    } catch (error) {
        console.log(error);
        res.status(500).json({msg: "Internal server error"})
    }
}

const getSingleWorkshop =async (req,res,next)=>{
    const {id} = req.params;
    try {
        const workshop = await WorkshopModle.findOne({_id : id});
        if(!workshop){
            res.status(404).json({msg: "No workshop found."})
            return;
        }
        res.status(200).json({ workshop });
    } catch (error) {
        res.status(500).json({ msg: "Internal server error" })
    }
}
module.exports = {
    displayWorkshop,
    createWorkshop,
    updateWorkshop,
    getSingleWorkshop
}
