const CheckStrength = (password, setStrength) => {


    // Define character sets
    const upperCaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const specialCharacters = '!@#$%^&*()';

    // Define regular expressions for different strength levels
    const weakRegex = new RegExp(`[${lowerCaseLetters}${upperCaseLetters}${numbers}]{6,}`);
    const mediumRegex = new RegExp(`(?=.*[${upperCaseLetters}])(?=.*[${lowerCaseLetters}])(?=.*[${numbers}])[${lowerCaseLetters}${upperCaseLetters}${numbers}]{8,}`);
    const strongRegex = new RegExp(`(?=.*[${upperCaseLetters}])(?=.*[${lowerCaseLetters}])(?=.*[${numbers}])(?=.*[${specialCharacters}])[${lowerCaseLetters}${upperCaseLetters}${numbers}${specialCharacters}]{10,}`);
    const veryStrongRegex = new RegExp(`(?=.*[${upperCaseLetters}])(?=.*[${lowerCaseLetters}])(?=.*[${numbers}])(?=.*[${specialCharacters}])[${lowerCaseLetters}${upperCaseLetters}${numbers}${specialCharacters}]{12,}`);

    // Test passwords against the regular expressions
    function testPasswordStrength(password) {
        if (veryStrongRegex.test(password)) {
            setStrength('Very Strong')
        } else if (strongRegex.test(password)) {
            setStrength('Strong')
        } else if (mediumRegex.test(password)) {
            setStrength('Medium')
        } else if (weakRegex.test(password)) {
            setStrength('Week')
        } else {
            setStrength('Very week')
        }
    }
    // Call the testPasswordStrength function
    testPasswordStrength(password);

}

export default CheckStrength;