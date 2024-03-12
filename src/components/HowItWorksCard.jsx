
const HowItWorksCard = ({ header,content,image }) => {
  return (
    <div className="flex flex-col md:flex-row gap-10">
      <div className="flex flex-col gap-3">
        <header className="font-poppins text-[20px] md:text-[29.3px] font-semibold text-based" >{header}</header>
        <p className="text-17 text-based font-montserrat max-w-[65ch]">{content}</p>
      </div>
      <div className="rounded-[20px] overflow-hidden">
        <img src={image} alt="repeat-image" loading="lazy" />
      </div>
    </div>
  )
}

export default HowItWorksCard
