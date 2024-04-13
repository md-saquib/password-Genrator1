
import { createContext, useState } from 'react';

export const PasswordContext = createContext();


const PasswordProvider = ({ children }) => {
    //Handling Copy and Copied Button
    const [copied, setCopied] = useState(false);

    //Handling Strength 
    const [strength, setStrength] = useState('')
    //Error Handling
    const [error, setError] = useState(false);

    //Password
    let [password, setPassword] = useState('');
    //length of Passwrod
    const [Length, setLength] = useState(4);

    const [passwordOption, setPasswordOption] = useState([
        { title: 'Upper Case Letter', status: false }
        , { title: 'Lower Case Letter', status: false }
        , { title: 'Number', status: false }
        , { title: 'Special Character', status: false }])


    
    return (
        <PasswordContext.Provider value={{
            copied, setCopied, strength, setStrength,
            password, setPassword, Length, setLength, passwordOption, setPasswordOption,
            error, setError
        }}>
            {children}
        </PasswordContext.Provider>
    )
}
export default PasswordProvider;