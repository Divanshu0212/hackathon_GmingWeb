import React from 'react'

function Navbar() {
  return (
    <div className='bg-[#24252B] w-full flex'>
      <div>
        <img src="../../../public/assets/LogoMakerCa-1724567992878.png" className='w-20' alt="" />
      </div>
      <div>
        <input type="text" placeholder='Search Here...' />
      </div>
      
    </div>
  )
}

export default Navbar
