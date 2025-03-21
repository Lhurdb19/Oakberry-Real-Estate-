import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navigation/navbar";
import Home from "./Components/Home/home";
import Footer from "./Components/Footer/footer";
import Notfound from "./Components/Notfound/notfound";
import AboutUs from "./Components/About/aboutus";
import Ouragent from "./Components/About/ouragent";
import Rentproperty from "./Components/Properties/rentproperty";
import Saleproperty from "./Components/Properties/saleproperty";
import Contact from "./Components/Contacts/contact";
import Services from "./Components/Pages/services";

function App() {
    return (
        <Router>
            <Navbar />
            
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/aboutus" element={<AboutUs />} />
                <Route path="/ouragent" element={<Ouragent />} />
                
                <Route path="/contact" element={<Contact />} />
                <Route path="/rentproperty" element={<Rentproperty />} />
                <Route path="/saleproperty" element={<Saleproperty />} />

                <Route path="/services" element={<Services />} />
                <Route path="*" element={<Notfound/>}/>
            </Routes>
            <Footer/>
        </Router>
    );
}

export default App;
