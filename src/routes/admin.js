const { Router } = require('express')
const admin = require('../controllers/ControllerAdmin')
const router = Router();

router.get("/", admin.getAll)
router.get("/:id", admin.getEmployee)
router.post("/add-employee", admin.postEmployee)
router.put('/update-employee/:id', admin.updateEmployee)
router.delete('/delete-employee/:id', admin.deleteEmployee)

module.exports = router;