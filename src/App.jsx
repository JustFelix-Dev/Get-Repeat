import ActivateMoment from "./components/ActivateMoment"
import Customer from "./components/Customer"
import DriveMore from "./components/DriveMore"
import FavoriteBrands from "./components/FavoriteBrands"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import HowItWorks from "./components/HowItWorks"
import Navbar from "./components/Navbar"
import ReadMore from "./components/ReadMore"


function App() {
 
  return (
    <div className="px-4 sm:px-0">
    <Navbar/>
    <Hero/>
    <FavoriteBrands/>
    <DriveMore/>
    <ActivateMoment/>
    <HowItWorks/>
    <ReadMore/>
    <Customer/>
    <Footer/>
    </div>
  )
}

export default App
