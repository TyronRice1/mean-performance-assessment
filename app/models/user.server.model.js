const mongoose = require('mongoose'); 

const Schema = mongoose.Schema; 

  

const UserSchema = new Schema({ 

  firstName: { 

    type: String, 

    trim: true, // removes leading and trailing spaces 

    required: true // required field 

  }, 

  lastName: { 

    type: String, 

    trim: true, // removes leading and trailing spaces 

    required: true // required field 

  }, 

  email: { 

    type: String, 

    lowercase: true, // convert email to lowercase 

    required: true, // required field 

    match: [/.+\@.+\..+/, 'Please fill a valid email address'] // email validation 

  }, 

  username: { 

    type: String, 

    required: true, // required field 

    trim: true, // removes leading and trailing spaces 

    default: 'anonymous' // default value 

  }, 

  password: { 

    type: String, 

    required: true, // required field 

    minlength: 6 // minimum password length 

  }, 

  created: { 

    type: Date, 

    default: Date.now // sets current date as the default value 

  } 

}); 

  

mongoose.model('User', UserSchema); 

 