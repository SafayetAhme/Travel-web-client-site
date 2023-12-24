import ContactUs from "./ContactUs";
import EmailSection from "./EmailSection";
import Hero from "./Hero";
import Howitwork from "./Howitwork";
import InstagramPhoto from "./InstagramPhoto";
import MenuCart from "./MenuCart";
import MenuTitle from "./MenuTitle";
import Review from "./Review";
import Seetmemories from "./Seetmemories";
import ServiceProvide from "./ServiceProvide";
import VideoSection from "./VideoSection";
import { Helmet } from 'react-helmet-async';



const Home = () => {

    return (
        <div>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <div className="px-10 container mx-auto">
                <Hero></Hero>
                <Howitwork></Howitwork>
                <Seetmemories></Seetmemories>
                <MenuTitle></MenuTitle>
                <MenuCart></MenuCart>
                <ServiceProvide></ServiceProvide>
                <ContactUs></ContactUs>
                <VideoSection></VideoSection>
                <Review></Review>
                <EmailSection></EmailSection>
                <InstagramPhoto></InstagramPhoto>
            </div>
        </div>
    );
};

export default Home;