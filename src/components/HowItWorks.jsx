import HowItWorksCard from "./HowItWorksCard"
import ingestImage from "../assets/howitworks-inject.avif";
import transformImage from "../assets/howitworks-transform.avif";
import automateImage from "../assets/howitworks-automate.avif";

const HowItWorks = () => {
  return (
    <section className="py-8 sm:py-0 -mx-4 sm:mx-0 px-4 flex items-center bg-[#EDE7E2] min-h-[1200px]">
        <div className="w-full max-w-[908px] mx-auto">
           <header className="font-poppins text-[23px] md:text-[44px] text-based font-semibold">HOW REPEAT WORKS</header>
           <div className="mt-6 flex flex-col gap-10">
             <HowItWorksCard header='INGEST AND ANALYZE' content='Repeat connects to your Shopify store to ingest all of your historical orders and each new order that 
            your customers place. We analyze those orders at 
            the store level to identify trends and at the 
            customer level to understand individual behavior.' 
            image={ingestImage}/>

            <HowItWorksCard header='TRANSFORM AND REPORT' content="Repeat feels like magic, but we're not a black box. We utilize your store's data to produce valuable 
            insights and reports that help you level up your 
            retention strategy with the same intelligence that 
            fuels Repeat's tools."
            image={transformImage} />

            <HowItWorksCard header='AUTOMATE AND ACT' 
            content='Repeat generates events that you can use to 
            automate flows and enriches customer profiles 
            with data for personalization and segmentation. It 
            all flows seamlessly into Klaviyo, Postscript, and 
            Attentive to give you new ways to optimize your 
            retention workflow.'
            image={automateImage} />
           </div>
        </div>
    </section>
  )
}

export default HowItWorks
