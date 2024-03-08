import repeatIcon from "../assets/repeat-icon.svg";
import { FaArrowRight } from "react-icons/fa";

const RepeatCard = ({ header,subText,content}) => {
  return (
    <div className='border border-based rounded-[25px] w-full max-w-[276px] p-3 hover:bg-[#f7f5f5] transition-all cursor-pointer'>
       <header className="flex items-center gap-2"> <img src={repeatIcon} alt="repeat-icon"/> <span className="font-poppins text-17 text-based font-medium">{header}</span></header>
       <p className="font-poppins text-17 text-based font-medium" >{subText}</p>
       <p className="mt-1 font-montserrat text-[12.8px] max-w-[25ch]" >{content}</p>
       <a href="#" className="moment-link gap-1 inline-block font-montserrat text-based text-[12.8px]"><span className='flex items-center gap-1'> Explore plays <FaArrowRight size={7} /></span></a>
    </div>
  )
}

export default RepeatCard
