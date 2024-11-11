import Navbar from "@/app/components/Navbar";
import Hero from "@/app/components/Hero";
import Project from "@/app/components/Project";
import Use from "@/app/components/Use";
import Need from "@/app/components/Need";
import Index from "@/app/components/Index";
import Sponsor from "@/app/components/Sponsor";
import Footer from "@/app/components/Footer";
export default function Home(){
    return <div>
        <Navbar/>
        <Hero/>
        <Project/>
        <Use/>
        <Need/>
        <Index/>
        <Sponsor/>
        <Footer/>
    </div>
};