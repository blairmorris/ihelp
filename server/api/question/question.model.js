'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var QuestionSchema = new Schema({
  text: String
});

module.exports = mongoose.model('Question', QuestionSchema);