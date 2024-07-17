const { Router } = require('express')
const admin = require('../controllers/ControllerAdminEmployees')
const router = Router();

router.get("/", admin.getAllEmployeesProfile)
router.get('/deleted-employee', admin.deletedEmployeeProfile)
router.post("/add-employee", admin.postEmployeeProfile)
router.put('/update-employee/:id', admin.updateEmployeeProfile)
router.delete('/delete-employee/:id', admin.deleteEmployeeProfile)
router.get("/:id", admin.getEmployeeProfile)

module.exports = router;