import React from 'react'
import Navebar from './Navebar'
import Footer from './Footer'

function About() {
  return (
    <section className="w-full pt-[4rem] text-black">
    <div>
    <div className='m-[3rem] h-fit'>
      <div className='top-0  h-[33rem] max-sm:h-[20rem] w-[88rem] max-sm:w-[30rem] flex items-center  bg-blue-950 text-white'>
      <div className='ml-[4rem] max-sm:ml-0 max-sm:p-[1.2rem] w-[30rem] max-sm:w-full'>
        <h2 className='text-[2rem] font-bold capitalize'>about us</h2>
        <p>Welcome to कRM where we bridge the gap between wage workers and clients. Our platform is your go-to destination for quick and convenient cash work opportunities. Whether you're a skilled worker looking for gigs or a client in need of reliable help, we've got you covered.</p>
        </div>
      </div>
      <div className='home_img absolute top-[12rem] max-sm:top-[30rem] right-[3rem] z-10  h-[33rem] w-[55rem] max-sm:h-[20rem] max-sm:w-[30rem]'>
    <img src="./img1.1.jpg" alt="" srcset="" className='h-full w-full '/>
      </div>
     </div>
    </div>

{/* ------------ */}
<div className='m-[3rem] mt-[12rem]'>
<p className='mx-[20rem] my-[4rem] max-sm:mx-[2rem] max-sm:mt-[28rem] text-center'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis molestiae incidunt earum delectus, minus debitis atque? Quibusdam rerum eligendi ducimus.</p>
  <div className='px-[2rem] w-full flex flex-col items-center gap-[4rem]'>
    <div className='w-full flex max-sm:flex-col justify-between items-center gap-[4rem]'>
         <div className='h-[30rem] w-[40rem] bg-slate-400'>
          <img src="./img3.jpg" alt="" className='h-full w-full '/>
         </div>
         <div className=' w-[40rem]'>
          <h2 className='text-[2rem]'>Mission
</h2>
          <p>

"At कRM , our mission is to empower wage workers by providing them with easy access to cash work opportunities. We aim to simplify the process of finding short-term jobs while connecting clients with skilled workers swiftly and securely. Our platform is dedicated to enhancing flexibility and convenience in the job market, making employment accessible to all."</p>
         </div>
    </div>

    <div className='w-full flex justify-between max-sm:flex-col-reverse items-center gap-[4rem]'>
         <div className=' w-[40rem]'>
          <h2 className='text-[2rem]'>Vission</h2>
          <p>

"Our vision at कRM is to revolutionize the way wage workers and clients connect, fostering a vibrant community of professionals and employers. We aspire to become the go-to platform for cash work, known for our innovative solutions and unwavering commitment to user satisfaction. We envision a future where individuals can easily access the work they desire and where employers can swiftly find the talent they need, all through our trusted and efficient platform."</p>
         </div>
         <div className='h-[30rem] w-[40rem] bg-slate-400'>
         <img src="./img2.jpg" alt="" className='h-full w-full '/>

         </div>
    </div>
</div>
</div>


<Footer/>


    </section>
  )
}

export default About