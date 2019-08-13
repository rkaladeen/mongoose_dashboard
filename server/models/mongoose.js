const mongoose = require('mongoose');

const MongooseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"]
  },
  age: {
    type: Number,
    required: [true, "Age is required"]
  },
  hobbies: [{
    type: String,
  }]
}, {timestamps: true});

mongoose.model("Mongoose", MongooseSchema);