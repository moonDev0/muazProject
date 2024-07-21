import React from 'react'
import { resources } from './list'
import Button from '../common/button'

const Resource = () => {
  return (
    <div className=' my-20'>
            {
                resources.map((item, id)=>(
                    <div key={id} className=' grid grid-cols-1 px-5 md:px-0 md:grid-cols-2 gap-8 justify-items-center mb-20 container mx-auto'>
                        <div>
                            <img src={item.img} alt='image' className=''/>
                        </div>
                        <div className=' mt-10 md:mt-0 text-black font-syne'>
                            <h1 className=' font-extrabold text-center md:text-left text-[16px] lg:text-[30px]'>{item.title}</h1>
                            <ul className=' font-medium text-[18px] text-black list-disc ml-8 mt-5 mb-5 md:mb-32'>
                                <li>{item.content}</li>
                            </ul>

                            <div className=' flex w-full justify-end'>
                                <button className=' w-full bg-primary text-white  font-bold py-2 rounded-tl-lg rounded-br-lg md:w-[300px]'>Watch video</button>
                            </div>
                        </div>
                    </div>
                ))
            }
    </div>
  )
}

export default Resource