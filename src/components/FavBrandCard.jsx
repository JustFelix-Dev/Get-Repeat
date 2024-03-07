
const FavBrandCard = ({image,header,content,name,brand}) => {
  return (
    <div className="min-h-[474px] w-[276px] border border-based rounded-[25px] overflow-hidden">
      <img src={image} alt="brand-image" />
      <div className="p-4" >
       <p className="text-17 font-poppins font-medium text-based" >{header}</p>
       <p className=" text-left pr-2 font-montserrat text-[12.8px] text-based">{content}</p>
       <p className=" text-left font-montserrat text-[12.8px] text-based italic" >{name}</p>
       <p className=" text-left py-1 font-montserrat text-[12.8px] text-based font-semibold">{brand}</p>
       <a href="#" className="text-left font-montserrat text-[12.8px] text-based underline opacity-[0.7]" >Read more →</a>
      </div>
    </div>
  )
}

export default FavBrandCard
