import ArticleList from "../component/ArticleList";
import Footer from "../component/Footer";
import Hero from "../component/Hero";
import Navbar from "../component/Navbar";

function About() {
    return(
        <>
        <Navbar/>
        <Hero 
					cName="hero-mid" 
					heroImg="https://picsum.photos/1600/900?random=2"
					title="About Us"
					text=""
					url="https://www.google.com.tw/?hl=zh_TW"
					btnClass="hide"
					btntext="Learn more"
        />
        <ArticleList/>

        <Footer/>
        </>
    );
}

export default About;