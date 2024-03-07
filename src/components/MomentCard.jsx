import momentIcon from '../assets/moment-icon.svg';

const MomentCard = ({header,content,link}) => {
  return (
    <div className="border bg-white border-based rounded-[25px] w-full max-w-[434px] hover:bg-[#f8f9fa] transition-all cursor-pointer p-4">
       <header className='flex gap-1 items-center'><img src={momentIcon} alt="moment-icon"/><span className='font-poppins text-based font-medium text-17' >{header}</span></header>
       <p className='font-montserrat text-based text-[12.8px] max-w-[45ch]'>{content}</p>
       <a href="#" className="underline font-montserrat text-based text-[12.8px]">{link}  →</a>
    </div>
  )
}

export default MomentCard
