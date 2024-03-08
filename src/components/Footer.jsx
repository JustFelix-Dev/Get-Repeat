import linkedIn from '../assets/LinkedIn.svg'
import X from "../assets/X.svg"
import instagram from "../assets/Instagram.svg"
import tikTok from '../assets/Tiktok.svg'
import cartIcon from '../assets/cart-icon.svg'

const Footer = () => {
  return (
    <footer className="min-h-[340px] bg-based flex items-center">
      <div className="w-[90%] mx-auto flex justify-between">
          <div className='flex flex-col gap-8'>
            <div><img src={cartIcon} alt="cart-icon" loading='lazy' /></div>
            <ul className='flex gap-5 items-center font-montserrat text-white text-[18px]'>
            <li>Blog</li>
            <li>Podcast</li>
            <li>Newsletter</li>
            <li>Jobs</li>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
            </ul>
            <p className='font-montserrat text-[15px] text-white'>&copy; 2023 REPEAT INC. Moments is a trademark of Repeat, Inc.</p>
          </div>
          <div className='flex  gap-4'>
            <a href="#"><img src={linkedIn} alt="linkedIn" loading='lazy' /></a>
            <a href="#"><img src={X} alt="x" loading='lazy' /></a>
            <a href="#"><img src={instagram} alt="instagram" loading='lazy' /></a>
            <a href="#"><img src={tikTok} alt="tikTok" loading='lazy' /></a>
          </div>
      </div>
    </footer>
  )
}

export default Footer
