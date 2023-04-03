import "./styles.css";
import "./component/Navbar";
import Navbar from "./component/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./route/home";
import Contact from "./route/contact";
import About from "./route/about";
import Service from "./route/serivce";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/service" element={<Service />}/>
        <Route path="/contact" element={<Contact />}/>
      </Routes>

      <Navbar />
    </div>
  );
}
