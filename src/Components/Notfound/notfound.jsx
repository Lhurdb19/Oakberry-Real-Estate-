import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome } from "react-icons/fa";

function Notfound() {
  return (
    <div className='notfound-container'>
      <img src="https://the-guild.dev/blog-assets/graphql-error-handling-with-fp/graphql-error-1024x512.png" alt="" />
      <Link to={'/'}>
      <span>
      <h3>BACK</h3> <FaHome className='home-icon' style={{color: 'red'}}/>
      </span>
      </Link>
    </div>
  )
}

export default Notfound;
