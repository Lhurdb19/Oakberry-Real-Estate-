import { useState, useEffect } from "react";
import { MdRealEstateAgent } from "react-icons/md";
import { SiCodesignal } from "react-icons/si";
import { LiaRProject } from "react-icons/lia";
import { IoConstructOutline } from "react-icons/io5";
import { PiBuildingsFill } from "react-icons/pi";
import { FaTrailer } from "react-icons/fa6";
import { SiInstructure } from "react-icons/si";
import { SiConsul } from "react-icons/si";
import { SiLimesurvey } from "react-icons/si";
import { MdArchitecture } from "react-icons/md";
import { AiFillPropertySafety } from "react-icons/ai";
import { SiRenovate } from "react-icons/si";

export const useServices = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const serviceData = [
      {
        icon: <MdRealEstateAgent />,
        title: "Real Estate Management",
        description: "Our real estate management services help investors, homeowners, and businesses manage properties efficiently. We handle everything from leasing to maintenance, ensuring your property is always in top condition and generating the best returns.",
        image: "https://res.cloudinary.com/damamkuye/image/upload/v1742642845/structural_nk1k2w.jpg",
      },
      {
        icon: <SiCodesignal />,
        title: "Interior Design",
        description: "Transform your space with our expert interior design services. Whether it's a modern, classic, or contemporary look, our team ensures that your home or office reflects your style with elegance and functionality.",
        image: "https://res.cloudinary.com/damamkuye/image/upload/v1742571036/interiro_sd0kx4.jpg",
      },
      {
        icon: <LiaRProject />,
        title: "Project Supervision",
        description: "We provide top-notch project supervision services to ensure that your construction projects run smoothly, on time, and within budget. Our experienced supervisors oversee every detail, ensuring quality and compliance with industry standards.",
        image: "https://res.cloudinary.com/damamkuye/image/upload/v1742571041/supervision_ers2bf.jpg",
      },
      {
        icon: <IoConstructOutline />,
        title: "Building Construction",
        description: "From foundation to finishing, we specialize in constructing durable and aesthetically pleasing buildings. Our team of experts ensures that every project meets structural integrity, safety, and architectural excellence.",
        image: "https://res.cloudinary.com/damamkuye/image/upload/v1742572017/Building-construction_vkwhey.jpg",
      },
      {
        icon: <PiBuildingsFill />,
        title: "Estate Management",
        description: "Our estate management services ensure that properties remain valuable and well-maintained. We handle tenant relations, maintenance, and legal compliance, providing stress-free property ownership for our clients.",
        image: "https://res.cloudinary.com/damamkuye/image/upload/v1742572019/estate_management_mv11fk.jpg",
      },
      {
        icon: <FaTrailer />,
        title: "General Building Suppliers",
        description: "We supply high-quality construction materials and equipment for all types of building projects. From cement and roofing sheets to plumbing and electrical supplies, we offer durable and cost-effective solutions.",
        image: "https://res.cloudinary.com/damamkuye/image/upload/v1742572014/supplies_tcvz1d.jpg",
      },
      {
        icon: <SiInstructure />,
        title: "Structural Design",
        description: "Our structural design services ensure that buildings are strong, safe, and capable of withstanding various forces. We incorporate innovative designs and engineering principles to create efficient and sustainable structures.",
        image: "https://res.cloudinary.com/damamkuye/image/upload/v1742572018/structural-design-services_h4gnfp.jpg",
      },
      {
        icon: <SiConsul />,
        title: "Consultancy",
        description: "We offer expert consultancy services in real estate, construction, and project management. Our team provides insights and solutions tailored to help clients make informed decisions that align with their goals.",
        image: "https://res.cloudinary.com/damamkuye/image/upload/v1742572013/consultancy_services3_ww8bod.jpg",
      },
      {
        icon: <SiLimesurvey />,
        title: "Land Surveying",
        description: "Our land surveying services ensure accurate boundary measurements, site planning, and topographical analysis. We use advanced technology to provide precise and legally compliant land data.",
        image: "https://res.cloudinary.com/damamkuye/image/upload/v1742572009/land_surveying_htu7iu.webp",
      },
      {
        icon: <MdArchitecture />,
        title: "Architectural Planning",
        description: "We provide professional architectural planning services, ensuring that every design meets functional, aesthetic, and regulatory requirements. Our innovative solutions bring concepts to life with precision.",
        image: "https://res.cloudinary.com/damamkuye/image/upload/v1742571034/Sample_Floorplan_lvytjn.jpg",
      },
      {
        icon: <AiFillPropertySafety />,
        title: "Property Development",
        description: "From site acquisition to construction, we handle all aspects of property development. Our expertise ensures successful project execution, whether it's residential, commercial, or industrial development.",
        image: "https://res.cloudinary.com/damamkuye/image/upload/v1742572008/Property-Development_kufhm7.jpg",
      },
      {
        icon: <SiRenovate />,
        title: "Home Renovation",
        description: "We provide expert home renovation services, upgrading homes with modern aesthetics, energy efficiency, and functional improvements. Our team turns outdated spaces into stylish, comfortable environments.",
        image: "https://res.cloudinary.com/damamkuye/image/upload/v1742572015/home_renovation_m58k2s.jpg",
      },
    ];

    setServices(serviceData);
  }, []);

  return { services };
};
