const { Op } = require('sequelize');
const db = require('../models')
//GET all employees
exports.getAll = async (req, res, next) => {
  try {
    const employees = await db.Employee.findAll();
    res.status(200).json(employees)
  } catch (error) {
    res.status(500).json({ error: error.message });
  }

}


exports.getEmployee = async (req, res, next) => {
  const { id } = req.params;
  try {
    const employee = await db.Employee.findByPk(id);
    if (!employee) {
      return res.status(400).json({ message: 'User not found!' })
    }
    res.status(200).json(employee)
  } catch (error) {
    res.status(500).json({ error: error.message });
  }

}

exports.deletedEmployee = async (req, res, next) => {

  try {
    console.log('data');

    const employeesDeleted = await db.Employee.findAll({
      where: {
        deletedAt: {
          [Op.not]: null
        }
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



exports.postEmployee = async (req, res, next) => {
  const { name, email, gender, mobile } = req.body;
  try {
    // const user = await db.Employee.create({

    //   // name: req.body.name,
    //   // email: req.body.email,
    //   // gender: req.body.gender,
    //   // mobile: req.body.mobile
    // });
    const dataEmployee = await db.Employee.findOrCreate({
      where: { email },
      defaults: { name, email, gender, mobile },
    });

    if (dataEmployee[1] === true) {
      return res.status(201).json({ message: 'Created Successfully', data: dataEmployee[0] })
    } else {
      return res.status(201).json({ message: 'This email already exist.' })
    }


  } catch (error) {
    if (error.name) {
      const messages = error.errors.map(err => err.message);
      return res.status(400).json({ errors: messages });
    }
    res.status(500).json({ error: error.message });
  }
};



exports.updateEmployee = async (req, res, next) => {
  const { id } = req.params;
  const newData = req.body;
  try {
    //const employee = await db.Employee.findByPk(id);

    const data = await db.Employee.update(
      { ...newData }, // Campos e novos valores
      {
        where: { id }, // Condição de onde atualizar
      }
    );

    const newUser = await db.Employee.findByPk(id)
    if (!data[0]) {
      return res.status(400).json({ message: 'Data not found!' })
    }

    return res.status(200).json(newUser)

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


exports.deleteEmployee = async (req, res, next) => {
  const { id } = req.params;
  const employee = await db.Employee.findByPk(id);
  try {
    const deleteEmployee = await db.Employee.destroy({
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



