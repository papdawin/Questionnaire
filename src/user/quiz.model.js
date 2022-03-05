let mongoose = require("mongoose");
let Schema = mongoose.Schema;

const quizSchema = new Schema({
	id: String,
	questions: [
		{
			number: Number,
			question: String,
			correctAnswer: String,
			incorrectAnswer: [],
		},
	],
	categories: [],
	difficulty: String,
	creator: String,
	createdOn: { type: Date, default: new Date() },
});

module.exports = mongoose.model("quiz", quizSchema, "quiz");
