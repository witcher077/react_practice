const validateEmail = (val) => {
    let regex =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/;
    return regex.test(val) ? true : false;
};

const validatePassword = (val) => {
    let regex = /(?!^[0-9]*$)(?!^[a-zA-Z]*$)^([a-zA-Z0-9!@#$%^&]{6,15})$/;
    return regex.test(val) ? true : false;
};

const alphaNumericOnly = (e) => {
    var k = e.keyCode ? e.keyCode : e.which;
    if (
        (k > 64 && k < 91) ||
        (k > 96 && k < 123) ||
        k === 8 ||
        k === 32 ||
        (k >= 48 && k <= 57)
    ) {
        return true;
    } else {
        e.preventDefault();
    }
};

const alphabeticOnly = (e) => {
    var k = e.keyCode ? e.keyCode : e.which;
    if ((k > 64 && k < 91) || (k > 96 && k < 123) || k === 8 || k === 32) {
        return true;
    } else {
        e.preventDefault();
    }
};

export { validateEmail, validatePassword, alphaNumericOnly, alphabeticOnly };
