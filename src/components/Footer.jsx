import React from "react";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <div className="mt-8 text-white bg-backgroundColor rounded-t-3xl md:mt-0">
      <div className="flex flex-col justify-between p-8 px-5 md:flex-row md:px-32">
        <div className="w-full md:w-1/4">
          <h1 className="pb-4 text-xl font-semibold ">JSJ Ortho Aid</h1>
          <p className="text-sm ">
          Ready to improve your mobility and regain your independence? Contact JSJ Ortho Aid today for personalized orthopedic solutions.
          </p>
        </div>
        <div>
          <h1 className="pt-5 pb-4 text-xl font-medium md:pt-0">Links</h1>
          <nav className="flex flex-col gap-2 ">
            <Link
              to="home"
              spy={true}
              smooth={true}
              duration={500}
              className="transition-all cursor-pointer hover:text-hoverColor"
            >
              Home
            </Link>
            <Link
              to="about"
              spy={true}
              smooth={true}
              duration={500}
              className="transition-all cursor-pointer hover:text-hoverColor"
            >
              About
            </Link>
            <Link
              to="products"
              spy={true}
              smooth={true}
              duration={500}
              className="transition-all cursor-pointer hover:text-hoverColor"
            >
              Products
            </Link>
          </nav>
        </div>
        <div>
          <h1 className="pt-5 pb-4 text-xl font-medium md:pt-0">Contact Us</h1>
          <nav className="flex flex-col gap-2 ">
            <Link
              to="/"
              spy={true}
              smooth={true}
              duration={500}
              className="transition-all cursor-pointer hover:text-hoverColor"
            >
             <b>Phone:</b> 9366720130,9487458538


            </Link>
            <Link
              to="/"
              spy={true}
              smooth={true}
              duration={500}
              className="transition-all cursor-pointer hover:text-hoverColor"
            >
             <b>Landline:</b> 0462-4802211


            </Link>
            <Link
              to="/"
              spy={true}
              smooth={true}
              duration={500}
              className="transition-all cursor-pointer hover:text-hoverColor"
            >
             <b>Email:</b> jsjorthoaid@gmail.com
            </Link>
          
          </nav>
        </div>
        <div className="w-full md:w-1/4">
          <h1 className="pt-5 pb-4 text-xl font-medium md:pt-0">Visit Us</h1>
          <nav className="flex flex-col gap-2 ">
            <Link to="/" spy={true} smooth={true} duration={500}>
           <b>Address1:</b>  No.61, Iyappan Nagar, NGO- A Colony, Tirunelveli – 627007 <br />
<b>Address2:</b>Hotel SakunthalaInt, Nearest to Reliance Market Vannarapettai,Tiruneveli-627003 
            </Link>
          
          </nav>
        </div>
      </div>
      <div>
        <p className="py-4 text-center ">
          @copyright 
          <span className=" text-hoverColor"> JSJ Ortho Aid -2024</span> | All
          rights reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
