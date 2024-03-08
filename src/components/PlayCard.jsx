import playIcon from '../assets/play-icon.svg';
import { FaArrowRight } from "react-icons/fa";


const PlayCard = ({header,subText,content}) => {

    const isReminder = header.includes('Reminder')
  return (

    <div className="w-full hover:bg-[#f7f5f5] transition-all cursor-pointer max-w-[276px] border border-based rounded-[25px] p-4">
     <header className="flex gap-1"><span><img src={playIcon} alt="play-icon"/></span><span className='font-poppins text-17 font-medium text-based' >{header}
     </span></header>
     <p className='font-poppins text-17 font-medium text-based'>{subText}</p>
     <div className='font-montserrat flex flex-col gap-2 text-[14.9px] pt-6 pb-1'>
        <div className='flex gap-2 items-center'><span className='px-2 rounded-full bg-[#E2D8FF] text-based'>Email</span>
       { !isReminder && <span className='px-2 rounded-full bg-[#E2D8FF] text-based'>SMS</span>}</div>
       { !isReminder && <span className='bg-[#C3D5FC] self-start text-based rounded-full px-2'>Flow</span>}
       { isReminder && <span className='bg-[#C3D5FC] self-start text-based rounded-full px-2'>Reusable Block</span>}
     </div>
      <p className=' text-left max-w-[27.5ch] font-montserrat text-[12.8px] text-based'>{content}</p>
      <a href="#" className="moment-link gap-1 inline-block font-montserrat text-based text-[12.8px]"><span className='flex items-center gap-1 ' > Explore plays <FaArrowRight size={7} /></span></a>
    </div>
  )
}

export default PlayCard
