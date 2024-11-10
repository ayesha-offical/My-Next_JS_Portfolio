

const Contactpage = () => {
  return (
    <main className="flex flex-col gap-3 bg-[#222831]   h-screen w-screen items-center justify-center">
            <h1 className=' text-4xl sm:text-6xl font-black sm:pt-7 text-white'>Contact <span className='text-cyan-500'>Me</span></h1>
            <form className='flex flex-col  gap-5 w-80'>
                <label className="text-white font-semibold"htmlFor='name'>Name:</label>
                <input className="p-4 bg-gradient-to-r from-cyan-300 to-blue-200 rounded-md" type='text' id='name' name='name' required />
                <label className="text-white font-semibold" htmlFor='email'>Email:</label>
                <input className="p-4 bg-gradient-to-r from-cyan-300 to-blue-200 rounded-md"type='email' id='email' name='email' required />
                <label className="text-white font-semibold"htmlFor='message'>Message:</label>
                <textarea className="p-7 bg-gradient-to-r from-cyan-300 to-blue-200 rounded-md"id='message' name='message' required></textarea>
                </form>
                <button className=" mt-8 w-24 h-9 rounded-md bg-gradient-to-r from-cyan-300 from-10% via-sky-500 via-30% to-emerald-500 to-90%"type='submit'>Submit</button>
              <div>
                <p className='text-white text-sm'>
                    
                </p>
              </div>
       
    </main>
  )
}

export default Contactpage