import React from "react";
import img from "../assets/img/about.jpg";

const About = () => {
  return (
    <div className="flex flex-col items-center justify-between min-h-screen gap-5 px-5 pt-24 lg:flex-row lg:px-32 lg:pt-16">
      <div className="w-full space-y-4 lg:w-3/4">
        <h1 className="text-4xl font-semibold text-center lg:text-start">About Us</h1>
        <p className="text-justify lg:text-start">
        <b>About JSJ Ortho Aid: 37 Years of Compassionate Orthopedic Care</b>
        </p>
        <p className="text-justify lg:text-start">
        At JSJ Ortho Aid, we believe in the transformative power of orthopedic solutions. For over 37 years, we have been at the forefront of manufacturing aids that enhance the lives of individuals facing mobility challenges
        </p>
        <p className="text-justify lg:text-start">
        <b>Our Mission: </b><br />
        Empowering Lives: We are dedicated to providing orthopedic solutions that empower individuals to lead fulfilling and active lives.<br/>
Precision Craftsmanship: Our products are crafted with precision and care, ensuring optimal functionality and comfort.<br/>
Compassionate Care: We approach our work with compassion, understanding the unique needs of each individual we serve.

        
        </p>
      </div>
      <div className="w-full lg:w-3/4">
        <img className="rounded-lg " src={img} alt="img" />
      </div>
    </div>
  );
};

export default About;
