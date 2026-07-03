import React from 'react'
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
function SmallHeader() {
  return (
    <>
    <section >
      <ul className='md:flex sm:hidden max-sm:hidden items-center gap-4 bg-[#232F3E] text-white p-2'>
        <li className='flex items-center gap-2'>
          <MenuOutlinedIcon />
          All
        </li>
        <li>Todays Deals</li>
        <li>Customer Service</li>
        <li>Registry</li>
        <li>Gift Cards</li>
        <li>Registry</li>
      </ul>
    </section>
    </>
  )
}

export default SmallHeader