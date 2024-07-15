const { Router } = require('express')
const admin = require('../controllers/ControllerAdmin')
const router = Router();

router.get("/", admin.getAll)
router.post("/add-employee", admin.postEmployee)

module.exports = router;