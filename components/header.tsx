import Link from 'next/link'


const Header = () => {
  return (
    <>
    <div className='flex flex-col md:flex-row gap-3 md:gap-0 w-screen justify-between h-[80px] bg-[#222831] px-9 py-5 md:py-0 items-center '>
    <a href="/"className=' hover:text-cyan-500 text-white text-4xl font-serif font-black'>Ayesha.</a>

      <nav className=" ">
        <ul className=" hidden md:flex gap-10 text-white mr-10 " >
    <li className='hover:text-cyan-500 hover:underline'><Link href="/home">Home</Link></li>
    <li className='hover:text-cyan-500 hover:underline'><Link href="/about">About</Link></li>
    <li className='hover:text-cyan-500 hover:underline'><Link href="/projects">Projects</Link></li>
    <li className='hover:text-cyan-500 hover:underline'><Link href="/contact">contact</Link></li>
    </ul>
      </nav> 
      <nav className=" w-screen md:hidden">
        <ul className=" flex items-center justify-center md:hidden gap-10 text-white " >
    <li className='hover:text-cyan-500 hover:underline'><Link href="/home">Home</Link></li>
    <li className='hover:text-cyan-500 hover:underline'><Link href="/about">About</Link></li>
    <li className='hover:text-cyan-500 hover:underline'><Link href="/projects">Projects</Link></li>
    <li className='hover:text-cyan-500 hover:underline'><Link href="/contact">contact</Link></li>
    </ul>
      </nav> 
     
    
     </div>
    
 
    
    </>
  )
}

export default Header;
