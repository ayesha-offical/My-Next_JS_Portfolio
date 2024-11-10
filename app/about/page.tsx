
import Image from 'next/image' 
import Link from 'next/link'
const Aboutpag = () => {
  return (
    <>
    <main className='flex flex-col py-5 gap-5 md:gap-0 md:flex-row text-white bg-[#222831]  h-screen w-screen justify-center items-center'>
      
         {/* <div className='w-1/2 p-10 flex justify-center flex-col gap-10 '>
         <h1 className='text-6xl flex font-black gap-3 '>About <span className='text-cyan-500'> me</span></h1>
         <p className='' >As a passionate Frontend Developer, I specialize in crafting visually stunning and highly interactive websites and web applications. I pride myself on turning complex requirements into user-friendly interfaces that provide a seamless user experience.</p>
         </div> */}

         <div className=' w-screen h-screen md:w-1/2 flex justify-center items-center'>
      <div className= ' flex items-center justify-end md:h-[450px] h-[300px] sm:h-[300px] md:w-[450px] w-[300px] pt-20 sm:pt:0 animate-pulse'>
      <Image src="/picc.png" alt='image' width={400} height={200}/>
      </div>
      </div>
      <div className=' w-screen h-screen md:w-1/2 px-16  md:p-10 flex justify-center items-start flex-col gap-5 '>
         <h1 className=' text-4xl sm:text-6xl flex font-black gap-3 '>About <span className='text-cyan-500'> me</span></h1>
         <p className='' >As a passionate Frontend Developer, I specialize in crafting visually stunning and highly interactive websites and web applications. I pride myself on turning complex requirements into user-friendly interfaces that provide a seamless user experience.</p>
         <button className='text-black'> <Link href="https://github.com/ayesha-offical" className="px-10 py-2  bg-cyan-500  hover:bg-cyan-100 rounded-md">
        For more
      </Link></button>
         </div>
       
    </main>

    </>
    
  )
}

export default Aboutpag