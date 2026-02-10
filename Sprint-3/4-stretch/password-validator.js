function passwordValidator(password) {
    return password.length < 5 ? false : true
}


module.exports = passwordValidator;