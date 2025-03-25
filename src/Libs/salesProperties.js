import { useState, useEffect } from "react";

export const useSalesProperties = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    // Simulating fetching data from an API
    const fetchedProperties = [
      {
        title: "Luxury Villa",
        location: "Beverly Hills, CA",
        price: "$1,200,000",
        description: "A stunning luxury villa with a private pool, spacious garden, and modern architecture.",
        image: "https://res.cloudinary.com/damamkuye/image/upload/v1742520533/house3_ubhix8.jpg",
      },
      {
        title: "Modern Penthouse",
        location: "New York, NY",
        price: "$3,500,000",
        description: "A high-rise penthouse with skyline views, smart home features, and luxury finishes.",
        image: "https://res.cloudinary.com/damamkuye/image/upload/v1742212464/3D-real-estate-projects1_ifmnvp.jpg",
      },
      {
        title: "Seaside Mansion",
        location: "Malibu, CA",
        price: "$8,900,000",
        description: "An exclusive beachfront mansion with direct access to a private beach and an infinity pool.",
        image: "https://res.cloudinary.com/damamkuye/image/upload/v1742212336/inner_estate_balnii.jpg",
      },
      {
        title: "Elegant Townhouse",
        location: "Chicago, IL",
        price: "$850,000",
        description: "A spacious three-bedroom townhouse with premium furnishing and a rooftop terrace.",
        image: "https://res.cloudinary.com/damamkuye/image/upload/v1742212364/Real-Estate-M_xjeydj.jpg",
      },
      {
        title: "Smart Apartment",
        location: "Austin, TX",
        price: "$620,000",
        description: "A fully furnished two-bedroom apartment with smart home automation and security features.",
        image: "https://res.cloudinary.com/damamkuye/image/upload/v1742212293/inner2_dlxwmp.jpg",
      },
      {
        title: "Skyline View Condo",
        location: "Seattle, WA",
        price: "$1,100,000",
        description: "Enjoy breathtaking skyline views from this modern high-rise condo in the city center.",
        image: "https://res.cloudinary.com/damamkuye/image/upload/v1742212358/3d-visualization_boyv4f.webp",
      },
      {
        title: "Ultra-Modern Duplex",
        location: "Atlanta, GA",
        price: "$1,750,000",
        description: "A state-of-the-art duplex with top-tier appliances, home office, and open floor plan.",
        image: "https://res.cloudinary.com/damamkuye/image/upload/v1742212464/3D-real-estate-projects1_ifmnvp.jpg",
      },
      {
        title: "Minimalist Bungalow",
        location: "Orlando, FL",
        price: "$490,000",
        description: "A cozy bungalow with a minimalist aesthetic, natural lighting, and modern finishes.",
        image: "https://res.cloudinary.com/damamkuye/image/upload/v1742520532/house4_ni8pwn.jpg",
      },
      {
        title: "Prestige High-Rise",
        location: "Houston, TX",
        price: "$2,000,000",
        description: "A luxurious high-rise apartment featuring premium amenities, gym, and a rooftop bar.",
        image: "https://res.cloudinary.com/damamkuye/image/upload/v1742520557/3-bed-terrace_yvem3b.jpg",
      },
      {
        title: "Scenic Mountain Retreat",
        location: "Denver, CO",
        price: "$1,500,000",
        description: "A beautiful retreat home in the mountains with breathtaking views and modern comfort.",
        image: "https://res.cloudinary.com/damamkuye/image/upload/v1742212847/home-model-2_f62whp.png",
      },
      {
        title: "Classic Victorian Home",
        location: "Boston, MA",
        price: "$1,300,000",
        description: "A timeless Victorian-style home with elegant interiors, a spacious porch, and a large backyard.",
        image: "https://res.cloudinary.com/damamkuye/image/upload/v1742520536/house2_cot55t.jpg",
      },
      {
        title: "Lakeside Mansion",
        location: "Lake Tahoe, NV",
        price: "$4,700,000",
        description: "A stunning lakeside property with a private dock, glass walls, and luxury living spaces.",
        image: "https://res.cloudinary.com/damamkuye/image/upload/v1742212382/Real-Estate-Marketing_rzlyze.jpg",
      },
    ];

    setProperties(fetchedProperties);
  }, []);

  return { properties };
};
