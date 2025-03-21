import { useState, useEffect } from "react";

export const useRentProperties = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    // Simulating fetching data from an API
    const fetchedProperties = [
      {
        title: "Luxury Penthouse",
        location: "Beverly Hills, CA",
        price: "$4,500/month",
        description: "A breathtaking penthouse with panoramic city views, modern furnishings, and a rooftop terrace.",
        image: "https://res.cloudinary.com/damamkuye/image/upload/v1742520536/house2_cot55t.jpg",
      },
      {
        title: "Modern Loft",
        location: "New York, NY",
        price: "$3,200/month",
        description: "A stylish loft with high ceilings, industrial decor, and smart home features.",
        image: "https://res.cloudinary.com/damamkuye/image/upload/v1742212464/3D-real-estate-projects1_ifmnvp.jpg",
      },
      {
        title: "Beachfront Condo",
        location: "Miami, FL",
        price: "$5,000/month",
        description: "Experience the ocean breeze in this stunning beachfront condo with private access to the beach.",
        image: "https://res.cloudinary.com/damamkuye/image/upload/v1742520532/house4_ni8pwn.jpg",
      },
      {
        title: "Urban Studio",
        location: "San Francisco, CA",
        price: "$2,800/month",
        description: "Compact yet elegant, this studio offers city views and modern interiors.",
        image: "https://res.cloudinary.com/damamkuye/image/upload/v1742520557/3-bed-terrace_yvem3b.jpg",
      },
      {
        title: "Spacious Townhouse",
        location: "Chicago, IL",
        price: "$3,900/month",
        description: "A spacious three-bedroom townhouse with a private garden and premium furnishing.",
        image: "https://res.cloudinary.com/damamkuye/image/upload/v1742212847/home-model-2_f62whp.png",
      },
      {
        title: "Contemporary Apartment",
        location: "Austin, TX",
        price: "$2,500/month",
        description: "A fully furnished two-bedroom apartment with smart home integration.",
        image: "https://res.cloudinary.com/damamkuye/image/upload/v1742212847/home-model-2_f62whp.png",
      },
      {
        title: "Skyline View Flat",
        location: "Seattle, WA",
        price: "$3,100/month",
        description: "Enjoy breathtaking skyline views from this high-rise apartment.",
        image: "https://res.cloudinary.com/damamkuye/image/upload/v1742212847/home-model-2_f62whp.png",
      },
      {
        title: "Elegant Duplex",
        location: "Atlanta, GA",
        price: "$3,700/month",
        description: "A two-story duplex with premium interiors and spacious rooms.",
        image: "https://res.cloudinary.com/damamkuye/image/upload/v1742212464/3D-real-estate-projects1_ifmnvp.jpg",
      },
      {
        title: "Furnished Villa",
        location: "Los Angeles, CA",
        price: "$6,200/month",
        description: "A luxurious villa with modern design, pool, and home theater.",
        image: "https://res.cloudinary.com/damamkuye/image/upload/v1742520536/house2_cot55t.jpg",
      },
      {
        title: "Minimalist Bungalow",
        location: "Orlando, FL",
        price: "$2,300/month",
        description: "A cozy bungalow with minimalist decor and natural lighting.",
        image: "https://res.cloudinary.com/damamkuye/image/upload/v1742520532/house4_ni8pwn.jpg",
      },
      {
        title: "Luxury High-Rise",
        location: "Houston, TX",
        price: "$4,000/month",
        description: "A high-rise apartment with state-of-the-art amenities and premium furnishing.",
        image: "https://res.cloudinary.com/damamkuye/image/upload/v1742520557/3-bed-terrace_yvem3b.jpg",
      },
      {
        title: "Scenic Retreat",
        location: "Denver, CO",
        price: "$3,600/month",
        description: "A scenic retreat surrounded by nature, offering peace and modern comfort.",
        image: "https://res.cloudinary.com/damamkuye/image/upload/v1742212847/home-model-2_f62whp.png",
      },
    ];

    setProperties(fetchedProperties);
  }, []);

  return { properties };
};
