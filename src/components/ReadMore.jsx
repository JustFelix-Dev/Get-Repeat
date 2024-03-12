import ReadMoreCard from "./ReadMoreCard"
import messageIcon from "../assets/readmore-message.png";
import phoneIcon from "../assets/readmore-phone.png";
import chatIcon from "../assets/readmore-chat.png";

const ReadMore = () => {
  return (
    <section className="min-h-[653px] flex justify-center items-center py-8 sm:py-0 ">
        <div className="w-full max-w-[908px] mx-auto flex flex-col gap-4">
            <header className="font-poppins text-[24px] md:text-[44px] font-semibold text-based text-center sm:text-start ">READ MORE </header>
           <div className="flex flex-wrap justify-center  gap-10">
            <ReadMoreCard image={messageIcon} header='How to Quickly Build a 
            Replenishment Flow' content="The cost of a personalized replenishment flow is almost always a mess of branching logic and a ton of someone's time. But not 
            anymore." />

            <ReadMoreCard image={phoneIcon} header='How Do You Measure and 
            Improve Your Retention Strategy With Data?' content='With acquisition becoming increasingly difficult and expensive, using your data to inform a solid  retention strategy is more important than ever.' />

            <ReadMoreCard image={chatIcon} header='Improved margins for 
            returning customers' content='These are the three types of 
            moments you have to activate your existing customer base: cultural, 
            manufactured, and customer moments.' />
           </div>
        </div>
    </section>
  )
}

export default ReadMore
