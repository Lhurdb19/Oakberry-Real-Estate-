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
import ArchitecturalPlanning from "./Components/Pages/architecturalplanning";
import Homerenovation from "./Components/Pages/homerenovation";
import RealEstateManagement from "./Components/Pages/realestatemanagement";
import InteriorDesign from "./Components/Pages/interiordesign";
import Landsurveying from "./Components/Pages/landsurveying";
import Consultancy from "./Components/Pages/consultancy"
import EstateManagement from "./Components/Pages/estatemanagement";
import Propertydevelopment from "./Components/Pages/propertydevelopment";
import Structuraldesign from "./Components/Pages/structuraldesign";
import BuildingConstruction from "./Components/Pages/buildingcontruction";
import ProjectSupervision from "./Components/Pages/projectsupervision";
import Generalbuildingsuppliers from "./Components/Pages/generalbuildingsuppliers";
import RealEstateBlog from "./Components/Blogs/realestateblogs";

function App() {
    return (
        <Router>
            <Navbar />
            
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/aboutus" element={<AboutUs />} />
                <Route path="/ouragent" element={<Ouragent />} />
                <Route path="realestateblogs" element={<RealEstateBlog/>}/>
                <Route path="/contact" element={<Contact />} />
                <Route path="/rentproperty" element={<Rentproperty />} />
                <Route path="/saleproperty" element={<Saleproperty />} />
                <Route path="/architecturalplanning" element={<ArchitecturalPlanning />} />
                <Route path="/homerenovation" element={<Homerenovation />} />
                <Route path="/realestatemanagement" element={<RealEstateManagement />} />
                <Route path="/consultancy" element={<Consultancy />} />
                <Route path="/interiordesign" element={<InteriorDesign />} />
                <Route path="/landsurveying" element={<Landsurveying />} />
                <Route path="/estatemanagement" element={<EstateManagement />} />
                <Route path="/propertydevelopment" element={<Propertydevelopment />} />
                <Route path="/structuraldesign" element={<Structuraldesign />} />
                <Route path="/buildingconstruction" element={<BuildingConstruction />} />
                <Route path="/projectsupervision" element={<ProjectSupervision />} />
                <Route path="/generalbuildingsuppliers" element={<Generalbuildingsuppliers />} />

                <Route path="/services" element={<Services />} />
                <Route path="*" element={<Notfound/>}/>
            </Routes>
            <Footer/>
        </Router>
    );
}

export default App;
