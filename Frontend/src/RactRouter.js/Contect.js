import React from 'react'
import Navebar from './Navebar'
import Footer from './Footer'

function Contect() {
  return (
    <section className="pt-[4rem] h-full w-full text-black">
      <h2 className='mt-[1rem] ml-[1.6rem] text-[2.2rem] font-bold text-primaryColor'>Contect us</h2>
       <div className='h-full flex max-sm:flex-col mx-[3rem] my-[1rem] gap-[6rem] mb-[4rem]'>
        <div className='h-full w-[45rem] max-sm:w-full '>
          <p className='text-[1.2rem] font-medium text-TextColor2'>Connect with us to share your thought, express your opinions and ideas to defeat poverty.</p>
          <div className='mt-[2rem] h-[36rem] w-full bg-slate-200'>
          <img src="./Forms-rafiki.png" className='h-full w-full' alt="" />
          </div>
        </div>


        <div className='h-[41.5rem] w-[45rem] max-sm:w-full bg-slate-100 px-[3rem] py-[2rem] rounded-[1rem]'>
          <form action="" className='flex flex-col gap-[1.4rem] h-full w-full text-primaryColor'>
          <div className='flex flex-col gap-[.4rem] '>
            <h1 className='text-[1.5rem] capitalize font-semibold'>name</h1>
            <input type="text" className='px-[.4rem] py-[.2rem] text-[1.4rem] border-[1px] rounded-[.4rem] placeholder:text-red-300 outline-none border-red-500 bg-transparent ' placeholder='name'/>
          </div>
          <div className='flex flex-col gap-[.4rem]'>
            <h1 className='text-[1.5rem] capitalize font-semibold'>contact number</h1>
            <input type="text" className='px-[.4rem] py-[.2rem] text-[1.4rem] border-[1px] rounded-[.4rem] placeholder:text-red-300 outline-none border-red-500 bg-transparent ' placeholder='name'/>
          </div>
          <div className='flex flex-col gap-[.4rem]'>
            <h1 className='text-[1.5rem] capitalize font-semibold'>purpose to connect</h1>
            <input type="text" className='px-[.4rem] py-[.2rem] text-[1.4rem] border-[1px] rounded-[.4rem] placeholder:text-red-300 outline-none border-red-500 bg-transparent ' placeholder='name'/>
          </div>
          <div className='flex flex-col gap-[.4rem]'>
            <h1 className='text-[1.5rem] capitalize font-semibold'>details</h1>
            <textarea type="text" className='px-[.4rem] py-[.2rem] text-[1.4rem] border-[1px] rounded-[.4rem] placeholder:text-red-300 outline-none border-red-500 bg-transparent ' placeholder='name'/>
          </div>
          <button type='submit' className='py-[.3rem] mx-auto mt-[6rem] w-[80%] rounded-[.5rem] bg-gradient-to-r from-primaryColor/70  to-primaryColor text-[1.5rem] text-white'>Submit</button>
          </form>
        </div>
       </div>
<Footer />
    </section>
  )
}

export default Contect