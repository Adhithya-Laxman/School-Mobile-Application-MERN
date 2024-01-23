const mongoose = require('mongoose');

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
  parentsDetails: {
    fatherName: {
      type: String,
      trim: true,
    },
    fatherPhone: {
      type: String,
      trim: true,
    },
    fatherOccupation: {
      type: String,
      trim: true,
    },
    fatherSalary: {
      type: Number,
    },
    motherName: {
      type: String,
      trim: true,
    },
    motherPhone: {
      type: String,
      trim: true,
    },
    motherOccupation: {
      type: String,
      trim: true,
    },
    motherSalary: {
      type: Number,
    },
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
    type: String, // You might store the path or URL to the photo
    trim: true,
  },
});

const Student = db.model('Student', studentSchema);

module.exports = Student;
