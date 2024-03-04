import React from "react";
import Button from "../layouts/Button";
import BlogCard from "../layouts/BlogCard";
import p28 from "../assets/img/products/p28.jpeg"
import p19 from "../assets/img/products/p19.jpg"
import p20 from "../assets/img/products/p20.jpg"
import p18 from "../assets/img/products/p18.jpg"
import p17 from "../assets/img/products/p17.jpg"
import p22 from "../assets/img/products/p22.png"
import p5 from "../assets/img/products/p5.jpg"
import p4 from "../assets/img/products/p4.jpg"
import p3 from "../assets/img/products/p3.jpg"
import p2 from "../assets/img/products/p2.jpg"
import p25 from "../assets/img/products/p25.jpg"
import p26 from "../assets/img/products/p26.jpg"
import p27 from "../assets/img/products/p27.jpg"
import p29 from "../assets/img/products/p29.jfif"
import cp1 from "../assets/img/products/cp1.jpg"
import cp3 from "../assets/img/products/cp3.jpg"

import cp2 from "../assets/img/products/cp2.jpg"

import p11 from "../assets/img/products/p11.jpg"
import p12 from "../assets/img/products/p12.jpg"
import p15 from "../assets/img/products/p15.jpg"

import p1 from "../assets/img/products/p1.jpg"
import p24 from "../assets/img/products/p24.jpg"
import p13 from "../assets/img/products/p13.jpg"









const Products = () => {
  return (
    <div className="flex flex-col justify-center min-h-screen px-5 pt-24 lg:px-32">
      <div className="flex flex-col items-center justify-between lg:flex-row">
        <div className="py-4">
          <h1 className="py-4 text-4xl font-semibold text-center lg:text-start">
            Our Products
          </h1>
        
        </div>
     
      </div>
      <div>
      <p className="px-4 py-4 text-xl text-center text-white lg:text-start bg-backgroundColor">
           <b >Artificial Limbs:</b> 
          </p>
      </div>
      <div className="my-8 ">
        <div className="flex flex-wrap justify-center gap-5 ">
          <BlogCard img={p4} headlines="Artificial Leg – " description="Precision-crafted prosthetics tailored to individual needs.
we offers unparalleled comfort and support, crafted with cutting-edge materials for a natural walking experience.
"/>
          <BlogCard img={p5} headlines="Artificial Hand-"  description="Precision in Every Movement 
The PrecisionGrasp Elite restores dexterity with advanced technology, providing intuitive control and a natural feel for grasping and interacting confidently.
"/>
          
        </div>
        <br />
        <div >
          
        <p className="px-4 py-4 text-xl text-center text-white lg:text-start bg-backgroundColor">
           <b >Mobility Aids:</b> 
          </p>
        
        </div>
        {/* <div className="mt-4 lg:mt-0">
          <Button title="Our Articles" />
        </div> */}
      </div>
      <div className="my-2 ">
        <div className="flex flex-wrap justify-center gap-5 ">
          <BlogCard img={p20} headlines="Wheel Chairs – Foldable " description="Smooth Maneuverability, Unmatched Comfort 
we offer a smooth ride indoors or outdoors, combining easy navigation with durability for freedom of movement.

"/>
<BlogCard img={p19} headlines="Wheel Chairs – nonfoldable" description="Smooth Maneuverability, Unmatched Comfort 
we offer a smooth ride indoors or outdoors, combining easy navigation with durability for freedom of movement.

"/>
          <BlogCard img={p18} headlines="Walking Aids- Walkers"  description="Step into Independence 
our  walking aid provides stability and ease of use, supporting your journey to independence with confidence and freedom of movement.

"/>
<BlogCard img={p17} headlines="Walking Aids- Assistive Cane"  description="Step into Independence 
our  walking aid provides stability and ease of use, supporting your journey to independence with confidence and freedom of movement.

"/>
          
        </div>
        <div >
          
        <p className="px-4 py-4 text-xl text-center text-white lg:text-start bg-backgroundColor">
           <b >Orthopedic Support:</b> 
          </p>
        </div>
        {/* <div className="mt-4 lg:mt-0">
          <Button title="Our Articles" />
        </div> */}
      </div>
      <div className="my-2 ">
        <div className="flex flex-wrap justify-center gap-5 ">
          <BlogCard img={p3} headlines="Calipers-KAFO(Knee Ankle Foot Orthosis) " description="Support Redefined for Polio-Affected Individuals 
calipers are crafted for those affected by polio, providing comprehensive support for optimal stability and mobility.
We offering targeted support for hips, knees, and ankles. Our splints are designed to aid in rehabilitation and promote increased mobility."/>
          <BlogCard img={p1} headlines="Calipers-AFO(Ankle Foot Orthosis)"  description="Support Redefined for Polio-Affected Individuals 
calipers are crafted for those affected by polio, providing comprehensive support for optimal stability and mobility.We offering targeted support for hips, knees, and ankles. Our splints are designed to aid in rehabilitation and promote increased mobility."/>
<BlogCard img={p2} headlines="Calipers-HKAFO(Knee Ankle Foot Orthosis)"  description="Support Redefined for Polio-Affected Individuals 
calipers are crafted for those affected by polio, providing comprehensive support for optimal stability and mobility.
We offering targeted support for hips, knees, and ankles. Our splints are designed to aid in rehabilitation and promote increased mobility."/>
<BlogCard img={p24} headlines="Hand Splints"  description="Support and Comfort for Your Hands Hand Splint offers targeted support and comfort, aiding in the rehabilitation of hand-related conditions with a personalized fit"/>
<BlogCard img={p25} headlines="Lumbo Sacral Belt"  description="Targeted Support for the Lumbar Region 
Lumbo Sacral Belt provides effective support to the lower back, ensuring a customized fit for optimal comfort during recovery or ongoing use.
"/>
<BlogCard img={p26} headlines="Cervical Collar"  description="Comfortable Support for Your Neck 
Cervical Collar offers comfortable and effective neck support, tailored to provide relief and stability for various neck conditions.
"/>
<BlogCard img={p27} headlines="Abdomen Belt –"  description="Secure Support for the Abdominal Region 
Abdomen Belt offers secure support to the abdominal region, aiding in recovery and providing stability during various activities.
"/>
<BlogCard img={p29} headlines="Knee Brace –"  description="Proactive Support for Knee Stability 
ProStabilize FlexFit Knee Brace offers proactive support for knee stability, allowing you to move confidently and comfortably during various activities.
    "/>
<BlogCard img={p28} headlines="Knee Cap – "  description="Stabilize Your Knees with Confidence 
FlexiKnee Support Knee Cap provides reliable stabilization for your knees, ensuring comfort and support during daily activities and physical rehabilitation.
"/>
          
        </div>
        <div >
          
          <p className="px-4 py-4 text-xl text-center text-white lg:text-start bg-backgroundColor">
           <b >Pediatric Care:</b> 
          </p>
        </div>
        {/* <div className="mt-4 lg:mt-0">
          <Button title="Our Articles" />
        </div> */}
      </div>
      <div className="my-2 ">
        <div className="flex flex-wrap justify-center gap-5 ">
          <BlogCard img={p22} headlines="CP Standing Frame " description="Innovative Solutions for Pediatric Care 
The PediComfort Series includes products like CP stands, standing boards, and corner chairs designed to provide innovative solutions for pediatric care, fostering comfort and development.
"/>
         <BlogCard img={cp1} headlines="CP Walker " description="Innovative Solutions for Pediatric Care 
The PediComfort Series includes products like CP stands, standing boards, and corner chairs designed to provide innovative solutions for pediatric care, fostering comfort and development.
"/>
 <BlogCard img={cp2} headlines="CP Corner Chair " description="Innovative Solutions for Pediatric Care 
The PediComfort Series includes products like CP stands, standing boards, and corner chairs designed to provide innovative solutions for pediatric care, fostering comfort and development.
"/>
 <BlogCard img={cp3} headlines="CP Chair " description="Innovative Solutions for Pediatric Care 
The PediComfort Series includes products like CP stands, standing boards, and corner chairs designed to provide innovative solutions for pediatric care, fostering comfort and development.
"/>
          
        </div>
        <div >
          
        <p className="px-4 py-4 text-xl text-center text-white lg:text-start bg-backgroundColor">
           <b >Specialized Footwear:</b> 
          </p>
        </div>
        {/* <div className="mt-4 lg:mt-0">
          <Button title="Our Articles" />
        </div> */}
      </div>
      <div className="my-2 ">
        <div className="flex flex-wrap justify-center gap-5 ">
        
          <BlogCard 
  img={p12} 
  headlines={<div>Correction Footwear <br/> Arch Support MCR slipper</div>}  
  description={
    <div>
      <b>Comfort and Relief for Foot Conditions:</b><br />
      EaseStride ComfortLite Special Slippers provide comfort and relief for conditions like corn foot, foot pain, and heel pain, ensuring your feet are well-supported.
      <br /> <br/>
      <b>Align Your Stride for Diabetic Footcare:</b><br />
      Correction Footwear is designed to align your stride and provide optimal support for diabetic patients, promoting foot health and preventing complications.
    </div>
  }
/>
<BlogCard img={p11} 
  headlines={<div>Correction Footwear <br/> Back Off loading slipper</div>}  
  description={
    <div>
      <b>Comfort and Relief for Foot Conditions:</b><br />
      EaseStride ComfortLite Special Slippers provide comfort and relief for conditions like corn foot, foot pain, and heel pain, ensuring your feet are well-supported.
      <br /> <br/>
      <b>Align Your Stride for Diabetic Footcare:</b><br />
      Correction Footwear is designed to align your stride and provide optimal support for diabetic patients, promoting foot health and preventing complications.
    </div>
  }/>
<BlogCard img={p13} 
  headlines={<div>Correction Footwear <br/> Front Off loading slipper</div>}  

description={
    <div>
      <b>Comfort and Relief for Foot Conditions:</b><br />
      EaseStride ComfortLite Special Slippers provide comfort and relief for conditions like corn foot, foot pain, and heel pain, ensuring your feet are well-supported.
      <br /> <br/>
      <b>Align Your Stride for Diabetic Footcare:</b><br />
      Correction Footwear is designed to align your stride and provide optimal support for diabetic patients, promoting foot health and preventing complications.
    </div>
  }/>
  <BlogCard 
  img={p15} 
  headlines={<div>Diabetic Footwear <br/> (MCR Material)</div>}  
  
  description={
    <div>
      <b>Comfortable and Corrective Footwear<br/> for Diabetics :</b><br />
      We  offers comfortable and corrective footwear designed specifically<br/> for diabetic patients, promoting foot health and overall well-being.
    
    </div>
  }
/>
          
        </div>
      </div>
    </div>
  );
};

export default Products;
