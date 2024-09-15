import React from 'react'
import { testimonials } from '../constants'

const Testimonials = () => {
  return (
    <div className='mt-20 tracking-wide'>
        <h2 className='text-3xl sm:text-5xl lg:text-6xl text-center my-10 lg:my-20'>
            What people are saying
        </h2>
        <div className='flex flex-wrap justify-center'>
            {testimonials.map((item, index)=>(
              <div key={index} className='w-full sm:w-1/2 lg:w-1/3 px-4 py-2'>
                <div className='bg-neutral-900 rounded-md border border-neutral-800 font-thin'>
                    <p>{item.text}</p>
                </div>
                <div className='flex mt-8 items-start'>
                    
                    <img className='w-12 h-12 rounded-full border border-orange-400'
                    src={item.image} alt="" 
                    />
                    <div className='p-2'>
                        <h6>{item.user}</h6>
                        <span className='tex-sm font-normal italic text-neutral-400 '>{item.company}</span>

                    </div>

                </div>

              </div>  
            ))}

        </div>
        
    </div>
  )
}

export default Testimonials