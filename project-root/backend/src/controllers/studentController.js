const StudentService = require('../services/studentServices');


exports.register = async(req,res, next)=>{
    try{
        const {
            studentID,
            studentName,
            rollNumber,
            class: studentClass,
            section,
            address,
            fatherName,
            fatherPhone,
            fatherOccupation,
            fatherSalary,
            motherName,
            motherPhone,
            motherOccupation,
            motherSalary,
            emailID,
            aadharNo,
            emisNo,
            photo,
          } = req.body;
      
          const studentData = {
            studentID,
            studentName,
            rollNumber,
            class: studentClass,
            section,
            address,
            fatherName,
            fatherPhone,
            fatherOccupation,
            fatherSalary,
            motherName,
            motherPhone,
            motherOccupation,
            motherSalary,
            emailID,
            aadharNo,
            emisNo,
            photo,
          };
      
          const successRes = await StudentService.register(studentData);

          res.status(200).json({ success: true, message: 'Student registered successfully', data: successRes });


    }catch(err){
        throw err;
    }
}