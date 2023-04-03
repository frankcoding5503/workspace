import Hero from "../component/Hero";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import TripleCard from "../component/TripleCard";

function Service() {
    return(
        <>
        <Navbar/>
        <Hero 
					cName="hero-mid" 
					heroImg="https://picsum.photos/1600/900?random=3"
					title="Service Provided"
					url="https://www.google.com.tw/?hl=zh_TW"
					btnClass="hide"
        />
        <TripleCard/>

        <Footer/>
        </>
    );
}

export default Service;