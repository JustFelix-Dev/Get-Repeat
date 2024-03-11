import navLogo from '../assets/logo.avif' 
import { BiMenu } from "react-icons/bi";
import { IoMdClose } from "react-icons/io";
import { RxCaretDown } from "react-icons/rx";

const Navbar = () => {

  const handleClick=()=>{
    const navlist = document.querySelector('.navlist');
    navlist.classList.add('active')
  }

  const handleClose=()=>{
    const navlist = document.querySelector('.navlist');
    navlist.classList.remove('active')
  }

  const handleProduct = () => {
    const caretArrow = document.getElementById('caret');
    const dropdown = document.querySelector('.dropdown');
    dropdown.classList.toggle('active-drop');
      if (dropdown.classList.contains('active-drop')) {
      dropdown.style.height = 'auto';
      dropdown.style.opacity = 1;
      dropdown.style.visibility = 'visible';
      dropdown.style.position= 'static';
      caretArrow.style.transform='rotate(180deg)';
       dropdown.style.transition = 'none'

    } else {
      dropdown.style.height = 0;
      dropdown.style.opacity = 0;
      dropdown.style.visibility = 'hidden';
      caretArrow.style.transform='rotate(0deg)';
    }
  }
  

  return (
    <nav className="bg-custom-yellow flex items-center justify-between h-[60px] px-6">
    <div className="logo cursor-pointer">
      <img src={navLogo} alt="nav-logo" width={'90px'} height={'44px'} />
    </div>  
      <ul className='flex items-center navlist justify-center w-full max-w-[644.33px]'>
        <li className='product  relative py-[14px] px-[20px]'><a href="#" className='flex items-center justify-center text-based font-montserrat font-medium opacity-[0.7] hover:opacity-100 transition-all text-17'><span>Product</span><svg viewBox="0 0 24 24" fill="#171717" className=' w-[20px]'>
        <path d="M17 11l-5 5-5-5z"/>
        </svg> <RxCaretDown  className='hidden caret ' id='caret' onClick={handleProduct} size={20} fontWeight={900} />
        </a>
         <ul className='dropdown shadow-md cursor-pointer font-poppins p-2 absolute rounded-md z-50 w-[330px] bg-white top-[65px] -left-[70%]  text-based'>
            <li className='transition-all py-[1rem] px-[0.8rem] hover:bg-custom-yellow rounded-lg'><a href="#">Moments</a></li>
            <li className='transition-all py-[1rem] px-[0.8rem] hover:bg-custom-yellow rounded-lg'><a href="#">Plays</a></li>
            <li className='transition-all py-[1rem] px-[0.8rem] hover:bg-custom-yellow rounded-lg'><a href="#">Goals</a></li>
            <li className='transition-all py-[1rem] px-[0.8rem] hover:bg-custom-yellow rounded-lg'><a href="#">Examples</a></li>
            <li className='transition-all py-[1rem] px-[0.8rem] hover:bg-custom-yellow rounded-lg'><a href="#">Integrations</a></li>
            <li className='transition-all py-[1rem] px-[0.8rem] hover:bg-custom-yellow rounded-lg'><a href="#">Pricing</a></li>
         </ul>
        </li>
        <li className='py-[14px] px-[20px]' ><a href="#" className='text-based font-montserrat font-medium opacity-[0.7]  hover:opacity-100 transition-all text-17'>Blog</a></li>
        <li className='py-[14px] px-[20px]' ><a href="#" className='text-based font-montserrat font-medium opacity-[0.7]  hover:opacity-100 transition-all text-17'>Stop Focusing on LTV</a></li>
        <div  onClick={handleClose}  className='absolute hidden menuClose right-4 top-4 cursor-pointer' ><IoMdClose size={20} /></div>
      </ul>
      <div className='flex items-center gap-4'>
      <button className='bg-[#37352F] hover:bg-[rgb(55,53,47,0.8)] transition-all flex items-center justify-center 
    text-white py-[6px] px-[16px] text-17 font-montserrat rounded-full'>GET STARTED</button>
       <div  onClick={handleClick}  className=' cursor-pointer hidden menuOpen'><BiMenu size={25}/></div>
      </div>
    </nav>
  )
}

export default Navbar
