import { useContext } from 'react';
import passwordCreater from '../passwordCreater';
import { PasswordContext } from '../PasswordProvider';
import CharectarDetail from './char detail/CharectorDetail';
import PasswordValueOption from './password value option/PasswordValueOption';
import Strength from './strength/Strength';
import Title from './title/Title'



const PasswordGenrator = () => {
    const {password , error , setPassword, passwordOption ,setError,Length  } = useContext(PasswordContext);
    return (
        <>
        <div className="passwordGenBody text-[10px] md:text-md md:w-[30rem] h-[25rem]">
            {/* Title  heading*/}
            <Title />
            {/* Charectar Length */}
            <CharectarDetail/>
            {/* Password Value Option */}
            <PasswordValueOption/>
            {/* Password Strength */}
            {password && <Strength password={password}/>}
            {/* Error Handling */}
            { error && <span className='align-left text-red-500'>Select atleast one option</span>}
            {/* Genrate Password Button */}
            <button className="bg-teal-700 w-full py-3 my-2 text-l	" onClick={()=> passwordCreater(setPassword, passwordOption ,setError,Length)}>GENRATE PASSWORD</button>
        </div>

        </>
    )
}

export default PasswordGenrator;