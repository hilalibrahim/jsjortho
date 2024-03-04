import React from "react";
import Button from "../layouts/Button";

const Home = () => {
  return (
    <div className=" min-h-screen flex flex-col justify-center lg:px-32 px-5 text-white bg-[url('assets/img/home.png')] bg-no-repeat bg-cover opacity-90">
      <div className="w-full mt-10 space-y-5 lg:w-4/5">
        <h1 className="pt-8 text-5xl font-bold leading-tight">
          Welcome to JSJ Ortho Aid
        </h1>
        <p className="text-lg">
        Discover the freedom of movement and the joy of independence with JSJ Ortho Aid. With over 37 years of dedicated service, we are pioneers in manufacturing high-quality orthopedic aids. Our commitment to excellence is evident in every product we offer.
        </p>
        <h1 className="text-3xl font-bold leading-tight">
        Why Choose JSJ Ortho Aid?
        </h1>
        <p className="gap-2 text-lg text-justify">
        <b>Expertise:</b> Benefit from our extensive 37-year experience in crafting precision orthopedic solutions.<br/>
<b>Comprehensive Range: </b>Explore a diverse array of products, including artificial limbs, wheelchairs, walking aids, calipers, and more.<br/>
<b>Customization:</b> Our products are tailored to meet the unique needs of individuals, ensuring comfort and functionality.<br/>
<b>Quality Assurance:</b> Rest easy knowing that our products adhere to the highest standards of quality and durability.<br/>
<b>Innovation:</b> We continually strive to innovate and introduce new solutions to meet evolving needs.<br/>
<b>Customer-Centric Approach:</b> Your satisfaction and well-being are at the heart of what we do.<br/>
JSJ Ortho Aid is not just a brand; it's a commitment to transforming lives through orthopedic excellence.

        </p>

        {/* <Button title="See Services" /> */}
      </div>
    </div>
  );
};

export default Home;
