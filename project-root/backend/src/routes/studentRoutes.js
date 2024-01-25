const router = require('express').Router()

const StudentController = require('../controllers/studentController')


router.post('/api/registration', StudentController.register);


module.exports = router;







