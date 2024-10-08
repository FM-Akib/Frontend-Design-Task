import GrowSkills from "../Components/Landing/GrowSkills";
import HeroSection from "../Components/Landing/Hero";
import Stat from "../Components/Landing/Stat";
import TopCategories from "../Components/Landing/TopCategories";
import Navbar from "../Shared/Navbar"


const Landing = () => {
    return (
        <>
           <Navbar/>
           <HeroSection/>
           <Stat/>
           <GrowSkills/>
           <TopCategories/>
        </>
    );
};

export default Landing;