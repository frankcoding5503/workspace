import Article from "../component/Article";
import Footer from "../component/Footer";
import Hero from "../component/Hero";
import Navbar from "../component/Navbar";
import TripleCard from "../component/TripleCard";


function Home() {
    return(
        <>
        <Navbar/>
        <Hero 
					cName="hero" 
					heroImg="https://picsum.photos/1600/900?random=1"
					title="Web Design"
					text="Setup your first website"
					url="https://www.google.com.tw/?hl=zh_TW"
					btnClass="show"
					btntext="Learn more"
        />
        <Article/>
        <TripleCard/>
        <Footer/>
        </>
    );
}

export default Home;