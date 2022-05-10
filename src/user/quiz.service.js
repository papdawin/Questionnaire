const addQuiz = (Quiz) => (inp) => {
    const quiz = new Quiz(inp);
    quiz.questions.map((item, index) => {
        item.number = ++index;
    });
    return quiz.save();
};

const deleteQuiz = (Quiz) => async (id) => {
    return await Quiz.deleteOne({ id });
};

const getQuizzes = (Quiz) => async () => {
    return await Quiz.find();
};

const getQuizByID = (Quiz) => async (id) => {
    return (await Quiz.find({ id }))[0];
};

module.exports = (Quiz) => {
    return {
        addQuiz: addQuiz(Quiz),
        getQuizzes: getQuizzes(Quiz),
        deleteQuiz: deleteQuiz(Quiz),
        getQuizByID: getQuizByID(Quiz),
    };
};
