

const passwordCreater = (setPassword, passwordOption, setError, Length) => {

    //this function update the password

    if (passwordOption.every(el => el.status == false)) {
        setError(true);
        setPassword('');
        return;
    }

    //this Password is for testing

    let Password = '';

    passwordOption.forEach(el => {
        if (el.status) {
            switch (el.title) {
                case 'Upper Case Letter':
                    Password += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
                    break;

                case 'Lower Case Letter':
                    Password += 'abcdefghijklmnopqrstuvwxyz';
                    break;

                case 'Number':
                    Password += '0123456789';
                    break;

                case 'Special Character':
                    Password += '!@#$%^&*()';
                    break;

                default:
                    break;
            }
        }
    })

    //this is also for testing contain real password 
    let password = '';
    for (let i = 0; i < Length; i++) {
        password += Password[Math.floor(Math.random() * Password.length)]
    }
    //this function update the password
    setPassword(password)

}

export default passwordCreater;