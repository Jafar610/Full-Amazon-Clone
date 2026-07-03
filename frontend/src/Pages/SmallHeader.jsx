import React from 'react'
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
function SmallHeader() {
  return (
    <>
    <section >
      <ul className='md:flex sm:hidden max-sm:hidden items-center gap-4 bg-[#232F3E] text-white p-2'>
        <li className='flex items-center gap-2 hover:border-1 border-white rounded-sm'>
          <MenuOutlinedIcon />
          All
        </li>
        <li className='hover:border-1 border-white rounded-sm'>Todays Deals</li>
        <li className='hover:border-1 border-white rounded-sm'>Customer Service</li>
        <li className='hover:border-1 border-white rounded-sm'>Registry</li>
        <li className='hover:border-1 border-white rounded-sm'>Gift Cards</li>
        <li className='hover:border-1 border-white rounded-sm'>Registry</li>
      </ul>
    </section>
    </>
  )
}

export default SmallHeader