const passwordValidator = (password) => {
    // if (password.match(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*_)(?!.*\W)(?!.* ).{8,16}$/g)) {
    //     return true;
    // }
    // return false;

    return /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*_)(?!.*\W)(?!.* ).{8,16}$/g.test(password)
}

console.log(passwordValidator("wiohniewudfh")) // false
console.log(passwordValidator("wiohniewudfh1A")) // false (no underscore)
console.log(passwordValidator("wiohniewudfh_1A"))  // true
console.log(passwordValidator("wiohniewudfh243BDG")) // false (no underscore)
