import React from 'react';
import MultipleItems from '../Sliders/homesliders';
import { Link } from 'react-router-dom';
import { LuLandPlot } from "react-icons/lu";
import { GiSpookyHouse } from "react-icons/gi";
import { HiHomeModern } from "react-icons/hi2";
import { MdLocationCity } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { LiaBedSolid } from "react-icons/lia";
import { LiaBathSolid } from "react-icons/lia";
import { GiWindow } from "react-icons/gi";
import RealEstateSlider from '../Sliders/realestateslider';
import ContactSection from '../Contacts/contactsection';
import './Home.css';

function Home() {
  return (
    <>
    <MultipleItems/>
    <div className='home-container'>
    <div className="image-container">
      <ContactSection/>
    </div>

    <div className="explore-container">
      <div className="category-con">
        <h4>CREATIVITY CATEGORIES</h4>
        <h2>Explore Our Categories & Places</h2>
      </div>
      <div className="land-link">
        <Link to={'/'}>
        <span>
        <LuLandPlot style={{fontSize: '100px'}}/>
        <h3>Land</h3>
        </span>
        </Link>

        <Link to={'/'}>
        <span>
        <GiSpookyHouse style={{fontSize: '100px'}}/>
        <h3>Residential</h3>
        </span>
        </Link>
        
        <Link to={'/'}>
        <span>
        <HiHomeModern style={{fontSize: '100px'}}/>
        <h3>Commercial</h3>
        </span>
        </Link>

        <Link to={'/'}>
        <span>
        <MdLocationCity style={{fontSize: '100px'}}/>
        <h3>Industrial</h3>
        </span>
        </Link>
      </div>

      <div className="each-pro-states">
        <span>
          
          <Link to={'/losangelesrent'}>
          <h5>New York</h5>
          <button>209 Properties</button>
          </Link>

          <Link to={'/losangelesrent'}>
          <h5>California</h5>
          <button>105 Properties</button>
          </Link>

          <Link to={'/losangelesrent'}>
          <h5>Florida</h5>
          <button>421 Properties</button>
          </Link>

          <Link to={'/losangelesrent'}>
          <h5>London</h5>
          <button>100 Properties</button>
          </Link>

          <Link to={'/losangelesrent'}>
          <h5>Tennessee</h5>
          <button>200 Properties</button>
          </Link>

          <Link to={'/losangelesrent'}>
          <h5>Charlotte</h5>
          <button>229 Properties</button>
          </Link>

          <Link to={'/losangelesrent'}>
          <h5>Chicago</h5>
          <button>324 Properties</button>
          </Link>

          <Link to={'/losangelesrent'}>
          <h5>Texas</h5>
          <button>125 Properties</button>
          </Link>

          <Link to={'/losangelesrent'}>
          <h5>Orlando</h5>
          <button>211 Properties</button>
          </Link>

          <Link to={'/losangelesrent'}>
          <h5>Illinios</h5>
          <button>202 Properties</button>
          </Link>

          <Link to={'/losangelesrent'}>
          <h5>North Carolina</h5>
          <button>97 Properties</button>
          </Link>

          <Link to={'/losangelesrent'}>
          <h5>Atlanta</h5>
          <button>320 Properties</button>
          </Link>

        </span>
      </div>
    </div>

    <div className="featured-container">
      <div className="our-property-con">
        <h4>OUR PROPERTIES</h4>
        <h2>Featured Properties</h2>
      </div>
      <div className="sunny-pro-container">

        <div className="sunny-property">
        <div className="sunny-img">
          <img src="https://res.cloudinary.com/damamkuye/image/upload/v1742212382/Real-Estate-Marketing_rzlyze.jpg" alt="" />
          <h3>$300,000</h3>
        </div>
        <div className="sunny-text">
          <span>
            <h5> 
              <img src="https://res.cloudinary.com/damamkuye/image/upload/v1741338381/samples/smile.jpg" alt="" />
            <p>John Dorf</p>
            </h5>
            <h5>2 weeks ago</h5>
          </span>
          <h3>Sunny Loft Property</h3>
          <h1> <h6><IoLocationSharp /> New York </h6> <p style={{background: 'green', color: '#fff', padding:'2px 5px'}}>Sale</p></h1>
          
          <p>
            <h5><LiaBedSolid /> 3</h5>
            <h5><LiaBathSolid /> 2</h5>
            <h5><GiWindow /> 1,875 sqft</h5>
          </p>
        </div>
      </div>
      <div className="sunny-property">
        <div className="sunny-img">
          <img src="https://res.cloudinary.com/damamkuye/image/upload/v1742212293/inner2_dlxwmp.jpg" alt="" />
          <h3>$5,000/mo</h3>
        </div>
        <div className="sunny-text">
          <span>
          <h5> 
              <img src="https://res.cloudinary.com/damamkuye/image/upload/v1741338381/samples/smile.jpg" alt="" />
            <p>John Dorf</p>
            </h5>
            <h5>2 weeks ago</h5>
          </span>
          <h3>Sunny Loft Property</h3>
          <h1> <h6><IoLocationSharp /> New York </h6> <p style={{background: 'red', color: '#fff', padding:'2px 5px'}}>Rent</p></h1>
          
          <p>
            <h5><LiaBedSolid /> 3</h5>
            <h5><LiaBathSolid /> 2</h5>
            <h5><GiWindow /> 1,875 sqft</h5>
          </p>
        </div>
      </div>
      <div className="sunny-property">
        <div className="sunny-img">
          <img src="https://res.cloudinary.com/damamkuye/image/upload/v1742256654/inside_3d_pqoil3.webp" alt="" />
          <h3>$190,000</h3>
        </div>
        <div className="sunny-text">
          <span>
          <h5> 
              <img src="https://res.cloudinary.com/damamkuye/image/upload/v1741338381/samples/smile.jpg" alt="" />
            <p>John Dorf</p>
            </h5>
            <h5>2 weeks ago</h5>
          </span>
          <h3>Sunny Loft Property</h3>
          <h1> <h6><IoLocationSharp /> New York </h6> <p style={{background: 'green', color: '#fff', padding:'2px 5px'}}>Sale</p></h1>
          <p>
            <h5><LiaBedSolid /> 3</h5>
            <h5><LiaBathSolid /> 2</h5>
            <h5><GiWindow /> 1,875 sqft</h5>
          </p>
        </div>
      </div>
      <div className="sunny-property">
        <div className="sunny-img">
          <img src="https://res.cloudinary.com/damamkuye/image/upload/v1742212336/inner_estate_balnii.jpg" alt="" />
          <h3>$7,000/mo</h3>
        </div>
        <div className="sunny-text">
          <span>
          <h5> 
              <img src="https://res.cloudinary.com/damamkuye/image/upload/v1741338381/samples/smile.jpg" alt="" />
            <p>John Dorf</p>
            </h5>
            <h5>2 weeks ago</h5>
          </span>
          <h3>Sunny Loft Property</h3>
          <h1> <h6><IoLocationSharp /> New York </h6> <p style={{background: 'red', color: '#fff', padding:'2px 5px'}}>Rent</p></h1>
          <p>
            <h5><LiaBedSolid /> 3</h5>
            <h5><LiaBathSolid /> 2</h5>
            <h5><GiWindow /> 1,875 sqft</h5>
          </p>
        </div>
        </div>
      </div>
    </div>
    <RealEstateSlider/>
    <ContactSection/>
    </div>
    </>
  )
}

export default Home
