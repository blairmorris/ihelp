'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var QuestionSchema = new Schema({
  text: String,
  email: String,
  answer: String,
  visible: {
      type: Boolean,
      default:false
  },
  submitter: {
      type: Schema.ObjectId,
      default: null
  },
  submitted: {
      type: Date,
      default: Date.now
  }
});

module.exports = mongoose.model('Question', QuestionSchema);