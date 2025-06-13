import React from 'react'

const Banner = () => {
  return (
    <div>
      <div className='h-[50vh] flex flex-col justify-center bg-cover bg-no-repeat bg-center px-24 bg-[linear-gradient(to_bottom,rgba(0,0,0,0),rgba(0,0,0,0.6)),url("/assets/Client/Home/Banner1.png")]'>
        <div className="flex flex-col gap-4">
          <h1 className="text-white font-poppins text-5xl  uppercase font-semibold w-[60%]">
            Built for the Pitch. Ready for You.
          </h1>
          <p className="text-white font-poppins w-[50%]">
            Whether you're a striker, midfielder, or defender — these boots are
            made to level up your play.
          </p>
          <button className="text-black bg-white p-3 px-7 font-semibold font-poppins w-fit rounded-full">
            SHOP NOW
          </button>
        </div>
      </div>
    </div>
  )
}

export default Banner