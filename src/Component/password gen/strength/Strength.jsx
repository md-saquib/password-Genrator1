import React, { useContext, useEffect } from 'react'
import { PasswordContext } from '../../PasswordProvider';
import CheckStrength from './CheckStrength';

const Strength = ({ password }) => {

  const { strength, setStrength } = useContext(PasswordContext);



  useEffect(() => {
    CheckStrength(password, setStrength)
  }, [password])

  return (
    <>
      <div className="flex justify-between my-3">
        <span>Strength: </span>
        <span>{strength}</span>
      </div>
    </>
  )
}

export default Strength