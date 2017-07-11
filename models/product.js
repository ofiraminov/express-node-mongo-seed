var mongoose = require('mongoose');  
var productSchema = new mongoose.Schema({  
  name: String,
  price: Number,
  dob: { type: Date, default: Date.now },
  isloved: Boolean
});
mongoose.model('Product', productSchema);
