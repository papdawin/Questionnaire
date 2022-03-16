exports.isLoggedIn = (req, res, next) => {
    req.user
        ? next()
        : res
              .status(401)
              .render("auth/unauthenticated.ejs", { user: req.user });
};

exports.isAdmin = (req, res, next) => {
    req.user.admin
        ? next()
        : res
              .status(401)
              .render("auth/unauthenticated.ejs", { user: req.user });
};
