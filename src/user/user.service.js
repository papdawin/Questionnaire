const addUser =
    (User) =>
    ({ id, email, firstName, lastName, password }) => {
        const user = new User({
            id,
            email,
            firstName,
            lastName,
            password,
        });
        return user.save();
    };

const getUsers = (User) => async () => {
    return await User.find();
};

const getUserByEmail =
    (User) =>
    async ({ email }) => {
        return await User.findOne({ email });
    };

const deleteUserByEmail = (User) => async (email) => {
    return await User.deleteOne({ email });
};

const toggleAdminByEmail = (User) => async (email) => {
    if ((await User.findOne({ email })).admin)
        return await User.updateOne({ email }, { $set: { admin: false } });
    else return await User.updateOne({ email }, { $set: { admin: true } });
};
const addScoreToUser = (User) => async (uid, qid, score, max) => {
    let scr = (await User.findOne({ id: uid })).quizScores;
    console.log(scr);
    scr.push({ id: quid, score, max });
    console.log("ASD");
    console.log(scr);
    //User.updateOne({ email }, { $set: { admin: false } });
    //return await usr.save();
};

module.exports = (User) => {
    return {
        addUser: addUser(User),
        getUsers: getUsers(User),
        getUserByEmail: getUserByEmail(User),
        deleteUserByEmail: deleteUserByEmail(User),
        toggleAdminByEmail: toggleAdminByEmail(User),
        addScoreToUser: addScoreToUser(User),
    };
};
