const mongoose = require('mongoose');
const bcrypt = require('bcrypt');


const db = require('../config/db');

const { Schema } = mongoose;

// const mongoose = require('mongoose');


const studentSchema = new mongoose.Schema({
  studentID: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  studentName: {
    type: String,
    required: true,
    trim: true,
  },
  rollNumber: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  class: {
    type: String,
    required: true,
    trim: true,
  },
  section: {
    type: String,
    required: true,
    trim: true,
  },
  address: {
    type: String,
    trim: true,
  },
  dateOfBirth: {
    type: Date,
  },
  parentsDetails: {
    fatherName: String,
    fatherPhone: String,
    fatherOccupation: String,
    fatherSalary: Number,
    motherName: String,
    motherPhone: String,
    motherOccupation: String,
    motherSalary: Number,
  },
  emailID: {
    type: String,
    trim: true,
  },
  aadharNo: {
    type: String,
    trim: true,
  },
  emisNo: {
    type: String,
    trim: true,
  },
  photo: {
    type: String,
    trim: true,
  },
});

const StudentModel = mongoose.model('Student', studentSchema);

module.exports = StudentModel;


// CODE FOR HASHING THE PASSWORD
// studentSchema.pre('save', async function(){
//   try{
//     var student = this;
//     const salt = await (bcrypt.genSalt(10));

//     const hashPass = await bcrypt.hash(student.password,salt);

//     student.password = hashpass;


//   }catch(error){
//     throw error;
//   }
// });



const teacherSchema = new mongoose.Schema({
  teacherID: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  teacherName: {
    type: String,
    required: true,
    trim: true,
  },
  teacherAadharNo: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  dateOfBirth: {
    type: Date,
  },
  dateOfJoining: {
    type: Date,
  },
  baseSalary: {
    type: Number,
  },
});

const TeacherModel = mongoose.model('Teacher', teacherSchema);

module.exports = TeacherModel;


const attendanceSchema = new mongoose.Schema({
  studentID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Student',
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  present: {
    type: Boolean,
    default: false,
  },
});

const AttendanceModel = mongoose.model('Attendance', attendanceSchema);

module.exports = AttendanceModel;


const standardSchema = new mongoose.Schema({
  classID: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  sectionID: {
    type: String,
    required: true,
    trim: true,
  },
  teacherID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Teacher',
    required: true,
  },
});

const StandardModel = mongoose.model('Standard', standardSchema);

module.exports = StandardModel;


const subjectSchema = new mongoose.Schema({
  subjectID: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  subjectName: {
    type: String,
    required: true,
    trim: true,
  },
  standardID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Standard',
    required: true,
  },
});

const SubjectModel = mongoose.model('Subject', subjectSchema);

module.exports = SubjectModel;



const marksSchema = new mongoose.Schema({
  subjectID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Subject',
    required: true,
  },
  sectionID: {
    type: String,
    required: true,
    trim: true,
  },
  studentID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Student',
    required: true,
  },
  examID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Exam',
    required: true,
  },
  mark: {
    type: Number,
    required: true,
  },
});

const MarksModel = mongoose.model('Marks', marksSchema);

module.exports = MarksModel;


const examSchema = new mongoose.Schema({
  subjectID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Subject',
    required: true,
  },
  examID: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  examName: {
    type: String,
    required: true,
    trim: true,
  },
  examDate: {
    type: Date,
    required: true,
  },
});

const ExamModel = mongoose.model('Exam', examSchema);

module.exports = ExamModel;


const messageGroupSchema = new mongoose.Schema({
  sectionID: {
    type: String,
    required: true,
    trim: true,
  },
  messageID: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  messageText: {
    type: String,
    trim: true,
  },
});

const MessageGroupModel = mongoose.model('MessageGroup', messageGroupSchema);

module.exports = MessageGroupModel;



const announcementSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  content: {
    type: String,
    required: true,
    trim: true,
  },
  postedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Admin', // Reference to the Admin model
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Announcement = mongoose.model('Announcement', announcementSchema);

module.exports = Announcement;