const router = require('express').Router();
const {displayWorkshop,createWorkshop, updateWorkshop, getSingleWorkshop} = require('../controllers/workshop')

router.route("/").get(displayWorkshop).post(createWorkshop)
router.route("/:id").get(getSingleWorkshop).patch(updateWorkshop)

module.exports = router;