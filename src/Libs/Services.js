import { useState, useEffect } from "react";

export const useServices = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const serviceData = [
      {
        title: "Real Estate Management",
        description: "Our real estate management services help investors, homeowners, and businesses manage properties efficiently. We handle everything from leasing to maintenance, ensuring your property is always in top condition and generating the best returns.",
        image: "https://res.cloudinary.com/damamkuye/image/upload/v1742259809/3d_image_jukddi.webp",
      },
      {
        title: "Interior Design",
        description: "Transform your space with our expert interior design services. Whether it's a modern, classic, or contemporary look, our team ensures that your home or office reflects your style with elegance and functionality.",
        image: "https://res.cloudinary.com/damamkuye/image/upload/v1742259809/3d_image_jukddi.webp",
      },
      {
        title: "Project Supervision",
        description: "We provide top-notch project supervision services to ensure that your construction projects run smoothly, on time, and within budget. Our experienced supervisors oversee every detail, ensuring quality and compliance with industry standards.",
        image: "https://res.cloudinary.com/damamkuye/image/upload/v1742259809/3d_image_jukddi.webp",
      },
      {
        title: "Building Construction",
        description: "From foundation to finishing, we specialize in constructing durable and aesthetically pleasing buildings. Our team of experts ensures that every project meets structural integrity, safety, and architectural excellence.",
        image: "https://res.cloudinary.com/damamkuye/image/upload/v1742259809/3d_image_jukddi.webp",
      },
      {
        title: "Estate Management",
        description: "Our estate management services ensure that properties remain valuable and well-maintained. We handle tenant relations, maintenance, and legal compliance, providing stress-free property ownership for our clients.",
        image: "https://res.cloudinary.com/damamkuye/image/upload/v1742259809/3d_image_jukddi.webp",
      },
      {
        title: "General Building Suppliers",
        description: "We supply high-quality construction materials and equipment for all types of building projects. From cement and roofing sheets to plumbing and electrical supplies, we offer durable and cost-effective solutions.",
        image: "https://res.cloudinary.com/damamkuye/image/upload/v1742259809/3d_image_jukddi.webp",
      },
      {
        title: "Structural Design",
        description: "Our structural design services ensure that buildings are strong, safe, and capable of withstanding various forces. We incorporate innovative designs and engineering principles to create efficient and sustainable structures.",
        image: "https://res.cloudinary.com/damamkuye/image/upload/v1742259809/3d_image_jukddi.webp",
      },
      {
        title: "Consultancy",
        description: "We offer expert consultancy services in real estate, construction, and project management. Our team provides insights and solutions tailored to help clients make informed decisions that align with their goals.",
        image: "https://res.cloudinary.com/damamkuye/image/upload/v1742259809/3d_image_jukddi.webp",
      },
      {
        title: "Land Surveying",
        description: "Our land surveying services ensure accurate boundary measurements, site planning, and topographical analysis. We use advanced technology to provide precise and legally compliant land data.",
        image: "https://res.cloudinary.com/damamkuye/image/upload/v1742259809/3d_image_jukddi.webp",
      },
      {
        title: "Architectural Planning",
        description: "We provide professional architectural planning services, ensuring that every design meets functional, aesthetic, and regulatory requirements. Our innovative solutions bring concepts to life with precision.",
        image: "https://res.cloudinary.com/damamkuye/image/upload/v1742259809/3d_image_jukddi.webp",
      },
      {
        title: "Property Development",
        description: "From site acquisition to construction, we handle all aspects of property development. Our expertise ensures successful project execution, whether it's residential, commercial, or industrial development.",
        image: "https://res.cloudinary.com/damamkuye/image/upload/v1742259809/3d_image_jukddi.webp",
      },
      {
        title: "Home Renovation",
        description: "We provide expert home renovation services, upgrading homes with modern aesthetics, energy efficiency, and functional improvements. Our team turns outdated spaces into stylish, comfortable environments.",
        image: "https://res.cloudinary.com/damamkuye/image/upload/v1742259809/3d_image_jukddi.webp",
      },
    ];

    setServices(serviceData);
  }, []);

  return { services };
};
