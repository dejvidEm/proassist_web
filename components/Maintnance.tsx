import React from 'react'
import { MdMiscellaneousServices } from "react-icons/md";


const Maintnance = () => {
  return (
    <div className='h-screen w-screen flex flex-col gap-2 items-center justify-center align-middle bg-gray-300 text-center pt-40'>
        <p>Stránka je momentálne vo vývoji</p>
        <p>Budeme radi ak sa zastavíte neskôr</p>
        <MdMiscellaneousServices size={45} className='mt-4'/>
    </div>
  )
}

export default Maintnance