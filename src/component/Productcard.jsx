import { Star } from 'lucide-react'
import React from 'react'

const Productcard = () => {
  return (
    <div className='w-[250px] h-[400px] bg-white inline-block'>
        <div className='flex justify-center items-center w-[248px] h-[248px] p-0'><img src="src/assets/sports-shoe3.jpg" className='w-full h-full'/></div>
        <div>
        <h1 className='mt-2'>  {/*  Name : */} DNK Brown shoe</h1> 
        <p className='text-gray-400'>  {/*  Catogery : */}Men</p> 
        <p className='text-black'>  {/*  Price : */} <span className='text-gray-500 line-through'>$150.00</span> $120.00</p> 
        <div className='flex gap-1 mt-1'>
        <Star size={17} className=''/><Star size={17} className=''/><Star size={17} className=''/><Star size={17} className=''/><Star size={17} className=''/>
        </div>
        </div>
    </div>
  )
}

export default Productcard