import React, { useContext } from 'react'
import { PasswordContext } from '../../PasswordProvider';

const Option = ({ val: { val: { title, status }, i } }) => {
    const { passwordOption, setPasswordOption, setError } = useContext(PasswordContext);

    const updatePassword = () => {
        let updatedPassword = [...passwordOption];
        updatedPassword[i] = { ...updatedPassword[i], status: !updatedPassword[i].status };
        setPasswordOption(updatedPassword);
        setError(false);

    }


    return (
        <>
            <div className="flex py-3">
                <input className='mx-2 cursor-pointer ' type="checkbox" id="option1" onChange={() => updatePassword()} checked={status} />
                <label htmlFor="option1" className='cursor-pointer'>{title}</label>
            </div>
        </>
    )
}

export default Option