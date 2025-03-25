import React from "react";
import { blogs } from "../../Libs/realEstateBlogs";
import "./Realestateblogs.css"; // Import styles

const RealEstateBlog = () => {
  return (
    <>
    <div className="creativity-blog">
        <h2>Our Blogs</h2>
    </div>
    <div className="blog-container">
      <h2 className="blog-title">Latest in Real Estate Management</h2>
      <div className="blog-grid">
        {blogs.map((blog, index) => (
          <div key={index} className="blog-card">
            <a href="https://www.libraryjournal.com/story/design/designing-libraries-for-diversity-equity-and-inclusion-lj231016" target="_blank">
            <div className="blog-image" style={{ backgroundImage: `url(${blog.image})` }}></div>
            </a>
            <div className="blog-content">
              <h3>{blog.title}</h3>
              <p className="blog-date">{blog.date}</p>
              <p>{blog.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default RealEstateBlog;
