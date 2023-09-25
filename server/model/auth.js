import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true, 
    match: /^[A-Za-z]+$/, 
  },
  lastName: {
    type: String,
    required: true,
    match: /^[A-Za-z]+$/, 
  },
  email: {
    type: String,
    required: true,
    unique: true, 
    match: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ 
  },
  country: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    enum: ['Male', 'Female', 'Other'],
    required: true,
  },
  dateOfBirth: {
    type: String,
    required: true,
    validate: {
      validator: function (dateOfBirth) {
        const today = new Date();
        const dobYear = dateOfBirth.split("-")[0]
        const age = today.getFullYear() - dobYear;
        if (age < 14) {
          return false;
        } 
        return true;
      },
      message: 'User must be older than 14 years.',
    },
  },
  age: {
    type: Number
  },
},{timestamps:true});

export default mongoose.model('User', UserSchema);

