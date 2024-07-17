const { Op, where } = require('sequelize');
const db = require('../models');
const profile = require('../models/profile');



//GET all employees
exports.getAllEmployeesProfile = async (req, res, next) => {
  try {
    const employees = await db.Profile.findAll();
    res.status(200).json(employees)
  } catch (error) {
    res.status(500).json({ error: error.message });
  }

}

// GET employee by id:
exports.getEmployeeProfile = async (req, res, next) => {
  const { id } = req.params;
  try {
    const employee = await db.Profile.findByPk(id);
    if (!employee) {
      return res.status(400).json({ message: 'User not found!' })
    }
    res.status(200).json(employee)
  } catch (error) {
    res.status(500).json({ error: error.message });
  }

}
// Employees deleted:
exports.deletedEmployeeProfile = async (req, res, next) => {

  try {
    const employeesDeleted = await db.Employee.findAll({
      where: {
        status: 'Disabled'
      },
      paranoid: false  // Incluir registros soft-deleted
    });
    if (employeesDeleted.length === 0) {
      return res.status(400).json({ message: 'User not found!' })
    }
    return res.status(200).json(employeesDeleted)

  } catch (error) {
    res.status(500).json({ error: error.message });
  }

}


exports.getAllSectors = async (req, res, next) => {


}


// Create new Employee
exports.postEmployeeProfile = async (req, res, next) => {
  const { name, email, gender, mobile, cpf, profession, sector } = req.body;
  const sectorUser = await db.Sector.findOrCreate({
    where: { type: sector },
    defaults: { type: sector }
  });
  const sectorUserId = sectorUser[0].id
  try {

    const dataEmployee = await db.Profile.findOrCreate({
      where: { cpf },
      defaults: { name, email, cpf, gender, mobile, profession, sector_id: sectorUserId }
    });



    if (dataEmployee[1] === true) {
      const profileUser = await db.Profile.findAll({
        where: { cpf }
      })

      const profileUserId = profileUser[0].id

      if (sectorUserId) {
        await db.Employee.create({ profile_id: profileUserId, sector_id: sectorUserId })
      }
      return res.status(201).json({ message: 'Created Successfully', data: dataEmployee[0] })
    } else {
      return res.status(201).json({ message: 'This CPF already exist.' })
    }


  } catch (error) {
    console.log(error);
    if (error.name) {
      const messages = error.errors.map(err => err.message);
      return res.status(400).json({ errors: messages });
    }
    res.status(500).json({ error: error.message });
  }
};


//Update employee
exports.updateEmployeeProfile = async (req, res, next) => {
  const { id } = req.params;
  const newData = req.body;
  try {
    //const employee = await db.Employee.findByPk(id);

    const data = await db.Profile.update(
      { ...newData }, // Campos e novos valores
      {
        where: { id }, // Condição de onde atualizar
      }
    );

    const newUser = await db.Profile.findByPk(id)
    if (!data[0]) {
      return res.status(400).json({ message: 'Data not found!' })
    }

    return res.status(200).json(newUser)

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


// Delete employee
exports.deleteEmployeeProfile = async (req, res, next) => {
  const { id } = req.params;
  const employee = await db.Profile.findByPk(id);
  try {
    await db.Employee.update(
      { status: 'disabled' },
      {
        where: {
          profile_id: id
        }
      }
    )
    const deleteEmployee = await db.Profile.destroy({
      where: { id }
    });
    if (!deleteEmployee) {
      return res.status(400).json({ message: 'Could not delete user!' })
    }
    res.status(200).json({ message: `User with email: ${employee.email}  - was deleted successfully!` })
  } catch (error) {
    res.status(500).json({ error: error.message });
  }

}



