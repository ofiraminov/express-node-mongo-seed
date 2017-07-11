var mongoose = require('mongoose');  
var userSchema = new mongoose.Schema({  
  name: String,
  age: Number,
  dob: { type: Date, default: Date.now },
  isloved: {type: Boolean, default: false}
});


module.exports = mongoose.model('User', userSchema);
