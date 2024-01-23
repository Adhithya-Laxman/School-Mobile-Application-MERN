const StudentModel = require('../models/student.model')

class StudentService{

    static async register(studentData){
        try{
            const createStudent = new StudentModel({
                studentID: studentData.studentID,
                studentName: studentData.studentName,
                rollNumber: studentData.rollNumber,
                class: studentData.class,
                section: studentData.section,
                address: studentData.address,
                parentsDetails: {
                  fatherName: studentData.fatherName,
                  fatherPhone: studentData.fatherPhone,
                  fatherOccupation: studentData.fatherOccupation,
                  fatherSalary: studentData.fatherSalary,
                  motherName: studentData.motherName,
                  motherPhone: studentData.motherPhone,
                  motherOccupation: studentData.motherOccupation,
                  motherSalary: studentData.motherSalary,
                },
                emailID: studentData.emailID,
                aadharNo: studentData.aadharNo,
                emisNo: studentData.emisNo,
                photo: studentData.photo,
              });
            return await createStudent.save();
            
        }catch(err){
            throw err;
        }

    }
}

module.exports = StudentService;