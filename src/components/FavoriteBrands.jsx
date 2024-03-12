import FavBrandCard from "./FavBrandCard"
import increasedLogo from "../assets/brand-increase.png"
import revenueLogo from "../assets/brand-revenue.png"
import improvedLogo from "../assets/brand-improved.png"
import olipopLogo from "../assets/olipop.png";
import auraLogo from "../assets/aura.png";
import hydrantLogo from "../assets/hydrant.png";
import oseaLogo from "../assets/osea.png"

const FavoriteBrands = () => {
  return (
    <section className="min-h-[942.94px]">
      <div className="flex flex-col gap-6 w-full max-w-[908px] mx-auto py-[80px]">
        <header className=" text-[24px] md:text-[43.98px] font-poppins text-based font-semibold text-center sm:text-start max-w-[25ch]">YOUR FAVORITE BRANDS ARE HAVING A MOMENT</header>
        <div className="flex flex-col items-center gap-6">
            <div className="  flex flex-col md:flex-row gap-10">
             <FavBrandCard image={increasedLogo} header='Increased 90-day repeat orders by 10%'
             content='"Personalized timing powering 
             direct mail helped us reach our 
             customers at the right moment to 
             really amplify second purchases”'
             name='Dejan Rankovic, Sr. Director of 
             Growth'
             brand='Dr. Squatch' />
             <FavBrandCard image={revenueLogo} 
             header='2x revenue per session from replen flows'
             content='“Truly, it&apos;s helped the repeat 
             purchase rate because we now 
             know when someone might need 
             to replenish.”'
             name='Amber Reyes, Sr Mgr, Acquisition & 
             Media'
             brand='Kopari Beauty'
             />
             <FavBrandCard image={improvedLogo}
              header='Improved margins for 
              returning customers' 
              content='"The product works. It does what it&apos;s 
              supposed to do with minimal effort 
              from our team.”'
              name='Nnamdi Ugwu, Co-Founder'
              brand='Black Girl Vitamins'
              />
            </div>
            <div className="flex flex-col justify-center md:flex-row gap-10">
              <div className="flex gap-10">
              <div className=" rounded-3xl overflow-hidden" ><img src={olipopLogo}  alt="logo" loading="lazy"/></div>
              <div className="rounded-3xl overflow-hidden" > <img src={auraLogo}  alt="logo" loading="lazy" /></div>
              </div>
              <div  className="flex gap-10">
              <div className="rounded-3xl overflow-hidden"> <img src={hydrantLogo}  alt="logo" loading="lazy" /></div>
              <div className="rounded-3xl overflow-hidden"><img src={oseaLogo} alt="logo"  loading="lazy" /></div>
              </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default FavoriteBrands
