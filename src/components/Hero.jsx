
const Hero = () => {
  return (
    <section className='min-h-[492px] flex items-end bg-custom-yellow'>
      <div className="hero flex flex-col gap-4 w-full max-w-[990px] mx-auto pb-[45px] ">
        <header  className="font-semibold text-based text-[48.875px] leading-[62.5375px] font-poppins max-w-[20ch]" >SUPERCHARGED LIFECYCLE MARKETING</header>
        <p className="text-based font-montserrat text-17 max-w-[60ch]" ><span className="font-semibold" >Repeat boosts repurchase rate</span> by automatically delivering personalized messaging at high-leverage Moments<sup className="font-semibold">TM</sup>.
        </p>
        <div className="flex flex-col gap-4 w-full max-w-[665px]">
            <button className=" text-left font-montserrat text-based font-semibold text-[34px] py-[17px] px-[34px] bg-white border border-based rounded-full w-full max-w-[665px]"><span>→
                </span> GET STARTED</button>
                <a href="#" className=" font-montserrat underline self-center text-based text-17">Or , book a demo</a>
        </div>
      </div>
    </section>
  )
}

export default Hero
