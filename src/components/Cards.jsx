import React from 'react'



function Cards({ img, user, price, storage, granted, send })  {
  return (
    <div className='w-full pt-24 pb-12 px-4 bg-white '>

      <div className=" w-full shadow-xl flex flex-col p-4  rounded-lg hover:scale-105 duration-300">
          <img src={img} alt="/" className='w-20 mx-auto mt-[-3rem] bg-white'/>
          <h2 className='text-2xl font-bold text-center py-8'>{user}</h2>
          <p className='text-center text-4xl font-bold'>{price}</p>
          <div className='text-center font-medium'>
              <p className='py-2 border-b mx-8 mt-8'>{storage}</p>
              <p className='py-2 border-b mx-8'>{granted}</p>
              <p className='py-2 border-b mx-8'>{send}</p>
          </div>
          <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 text-black '>Start Trial</button>
      </div>
      
    </div>
  )
}

export default Cards
