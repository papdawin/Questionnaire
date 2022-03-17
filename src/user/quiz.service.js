const addQuiz = (Quiz) => (inp) => {
    const quiz = new Quiz(inp);
    return quiz.save();
};

const deleteQuiz = (Quiz) => async (id) => {
    return await Quiz.deleteOne({ id });
};

const getQuizzes = (Quiz) => async () => {
    return await Quiz.find();
};

module.exports = (Quiz) => {
    return {
        addQuiz: addQuiz(Quiz),
        getQuizzes: getQuizzes(Quiz),
        deleteQuiz: deleteQuiz(Quiz),
    };
};
