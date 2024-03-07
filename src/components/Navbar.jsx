import navLogo from '../assets/logo.avif' 
const Navbar = () => {
  return (
    <nav className="bg-custom-yellow flex items-center justify-between h-[60px] px-6">
    <div className="logo cursor-pointer">
      <img src={navLogo} alt="nav-logo" width={'90px'} height={'44px'} />
    </div>  
      <ul className='flex items-center'>
        <li className='py-[14px] px-[20px]'><a href="#" className='flex items-center text-based font-montserrat font-medium opacity-[0.7] text-17'><span>Product</span><svg height={'100px'}  viewBox="0 0 24 24" fill="#171717" className=' w-[20px]'>
        <path d="M17 11l-5 5-5-5z"/>
        </svg>
        </a></li>
        <li className='py-[14px] px-[20px]' ><a href="#" className='text-based font-montserrat font-medium opacity-[0.7] text-17'>Blog</a></li>
        <li className='py-[14px] px-[20px]' ><a href="#" className='text-based font-montserrat font-medium opacity-[0.7] text-17'>Stop Focusing on LTV</a></li>
      </ul>
      <button className='bg-[#37352F] text-white py-[6px] px-[16px] text-17 font-montserrat rounded-full'>GET STARTED</button>
    </nav>
  )
}

export default Navbar
