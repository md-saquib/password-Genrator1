import React ,{useContext} from 'react'
import { PasswordContext } from '../../PasswordProvider'
import Option from './Option'

const PasswordValueOption = () => {
     const {passwordOption } = useContext(PasswordContext);
   
    return (
        <>
            <div className="grid grid-cols-2">
                {passwordOption.map((val,i) => <Option key={i} val={{val,i}} />)}
            </div>
        </>
    )
}

export default PasswordValueOption