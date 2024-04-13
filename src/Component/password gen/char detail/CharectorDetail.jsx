import React , {useContext}from 'react'
import { PasswordContext } from '../../PasswordProvider';

 const CharectarDetail = () => {
    const useLength = useContext(PasswordContext);
    const {Length,setLength} = useLength;
  return (
    <>
    <div className="flex justify-between py-3">
        <span>Character Length</span>
        <span>{Length}</span>
    </div>
    <input className='w-full  outline-none py-2 cursor-pointer' onChange={(e)=> setLength(e.target.value) } min={4} max={20}  type="range"  />
    </> 
     )
}
export default CharectarDetail;
