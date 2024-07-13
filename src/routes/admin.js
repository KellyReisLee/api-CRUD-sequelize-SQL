const { Router } = require('express')
const admin = require('../controllers/ControllerAdmin')
const router = Router();

router.get("/", admin.getAll)

module.exports = router;