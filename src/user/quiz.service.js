const addQuiz =
    (Quiz) =>
    ({ id, questions, categories, difficulty, creator }) => {
        //implement
        return quiz.save();
    };

const getQuizzes = (Quiz) => async () => {
    return await Quiz.find();
};

module.exports = (Quiz) => {
    return {
        addQuiz: addQuiz(Quiz),
        getQuizzes: getQuizzes(Quiz),
    };
};
