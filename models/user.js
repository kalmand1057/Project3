// const mongoose = require('mongoose')
// const bcrypt = require('bcrypt')

// const userSchema = new mongoose.Schema({
//   username: { type: String, required: true, unique: true },
//   email: { type: String, required: true, unique: true },
//   password: { type: String, required: true },
//   places: [ {type: mongoose.Schema.ObjectId, ref: 'Place', required: true} ],
//   admin: { type: Boolean, default: false }
// })

// userSchema.virtual('passwordConfirmation')
//   .set(function passwordConfirmation(passwordConfirmation) {
//     this._passwordConfirmation = passwordConfirmation
//   })

// userSchema.pre('validate', function checkPasswordMatch(next) {
//   if(
//       // if password not modifed it will go straight to error at bottom of func
//     this.isModified('password') && 
//     this._passwordConfirmation !== this.password
//   ) {
//     this.invalidate('passwordConfirmation', 'Passwords do not match')
//   }
//   next()
// })
// //Hash the password 
// userSchema.pre('save', function hashPassword(next) {
//   if(this.isModified('password')) {
//     this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync(8)) 
//   }
//   next()
// })
// //checks if hashed password is same as one given.
// userSchema.methods.validatePassword = function(password) {
//   return bcrypt.compareSync(password, this.password) 
// }

// module.exports = mongoose.model('User', userSchema)
const mongoose = require("mongoose");
const user = new mongoose.Schema({
  username: String,
  password: String,
  budget: {
    maxBudget: {type: Number, default: 0},
    airFare: {type: Number, default: 0},
    dining: {type: Number, default: 0},
    lodging: {type: Number, default: 0},
    misc: {type: Number, default: 0}
  },
  comment: Array,
  city: {type: String, default: "none"},
  date: {
    month: {type: Number, default: 0},
    day: {type: Number, default: 0},
    year: {type: Number, default: 0}
  }
});

module.exports = mongoose.model("User", user);
