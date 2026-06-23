import React from 'react'

function Header() {
  return (
    <>
      <section>
        <div className='flex bg-[#131921] text-white items-center justify-between p-2'>
          {/* logo */}
          <div className=''>
            <a href="/">
              <img src="https://pngimg.com/uploads/amazon/small/amazon_PNG25.png" alt=""  className='w-40'/>
            </a>
          </div>

          {/* Location */}
          <div className='flex items-center gap-2'>

            <div>

            </div>

            <div>
              <p>Location</p>
              <p>Ethiopia</p>
            </div>

          </div>

          {/* search bar */}

          <div className='flex items-center gap-2'>
            <select name="" id="">
              <option value="">All</option>
            </select>
            <input type="text" />
            <button>Search</button>
          </div>

        </div>
      </section>

    </>
  )
}

export default Header