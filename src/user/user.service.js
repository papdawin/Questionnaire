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

module.exports = (User) => {
    return {
        addUser: addUser(User),
        getUsers: getUsers(User),
        getUserByEmail: getUserByEmail(User),
    };
};
