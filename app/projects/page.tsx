import Link from "next/dist/client/link"


const Projectspag = () => {
  return (
    <>
    <main className='flex flex-col  bg-[url("/project.png")] h-full md:h-screen w-screen justify-center items-center gap-5 sm:gap-10 py-8 '>
    {/* <div className='bg-[url("/project.png")]'></div> */}
    <h1 className=' text-4xl  sm:text-3xl  font-black gap-3 text-white'>My <span className='text-cyan-500'>Projects</span></h1>

    <div className="flex gap-5 flex-col md:flex-row justify-center ">
    <div className="flex items-center justify-center gap-3 flex-col text-2xl h-52 md:h-60 w-60 bg-gradient-to-r from-teal-400 to-blue-500 hover:from-cyan-500 hover:to-emerald-500 rounded-lg text-white text-center p-8">
      <h2 className="text-lg">UI/UX Scholarship Linkable Page Project</h2>
      <button type="button" >
 <a href="https://github.com/ayesha-offical/Project02.git" className="text-black font-extrabold">Visit Project</a>
</button>
    </div>
    <div className="flex  items-center justify-center gap-3 flex-col text-2xl h-52 md:h-60 w-60 bg-gradient-to-r from-teal-400 to-blue-500 hover:from-cyan-500 hover:to-emerald-500 rounded-lg text-white text-center p-8">
      <h2 className=" text-lg">UI/UX based website for code editors information</h2>
      <button type="button" >
 <a href="https://github.com/ayesha-offical/project03.git" className="text-black font-extrabold">Visit Project</a>
</button>
    </div>
    <div className="flex items-center justify-center gap-3 flex-col text-2xl h-52 md:h-60 w-60 bg-gradient-to-r from-teal-400 to-blue-500 hover:from-cyan-500 hover:to-emerald-500 rounded-lg text-white text-center p-8">
      <h2 className=" text-lg">UI/UX based portfolio website with Html & CSS</h2>
      <button type="button" >
 <a href="https://soft-jelly-a9fb33.netlify.app/#home " className="text-black font-extrabold">Visit Project</a>
</button>
    </div>
    </div>
    </main>
  
      </>
  )
}

export default Projectspag