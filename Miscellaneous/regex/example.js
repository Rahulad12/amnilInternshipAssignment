const validatePassword = (password) =>{
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
    return passwordRegex.test(password);

}

console.log(validatePassword("Abc@123"));
console.log(validatePassword("Abc123"));
console.log(validatePassword("Abc"));