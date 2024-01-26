const router = require('express').Router()

const StudentController = require('../controllers/studentController')


router.post('/api/StudentRegistration', StudentController.register);


module.exports = router;







