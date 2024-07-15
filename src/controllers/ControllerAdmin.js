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

exports.postEmployee = async (req, res, next) => {

  try {
    const user = await db.Employee.create({
      name: req.body.name,
      email: req.body.email,
      gender: req.body.gender,
      mobile: req.body.mobile
    });
    res.status(201).json(user);
  } catch (error) {
    if (error.name) {
      const messages = error.errors.map(err => err.message);
      return res.status(400).json({ errors: messages });
    }
    res.status(500).json({ error: error.message });
  }
};

