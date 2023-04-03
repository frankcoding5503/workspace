import ContactForm from "../component/ConatctForm"
import Hero from "../component/Hero";
import Navbar from "../component/Navbar"
import Footer from "../component/Footer"

function Contact() {
    return(
        <>
        <Navbar/>
        <Hero 
					cName="hero-mid" 
					heroImg="https://picsum.photos/1600/900?random=11"
					title="Contact Us"
					text=""
					url="https://www.google.com.tw/?hl=zh_TW"
					btnClass="hide"
					btntext="Learn more"
        />
        <ContactForm/>
        <Footer/>
        </>
    );
}

export default Contact;