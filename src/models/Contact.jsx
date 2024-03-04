import React from "react";
import Button from "../layouts/Button";

const Contact = ({ closeForm }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="absolute mt-12 text-black popup-form">
        <form className="p-5 space-y-5 bg-white w-80 md:w-96 rounded-xl">
          <h1 className="text-4xl font-semibold text-center text-backgroundColor">
            Contact Us
          </h1>
          <div className="flex flex-col">
          <p
            
              className="transition-all cursor-pointer hover:text-hoverColor"
            >
             <b>Phone: </b> 9366720130,9487458538



            </p>
          </div>
          <div className="flex flex-col">
          <p
            
              className="transition-all cursor-pointer hover:text-hoverColor"
            >
             <b>Landline: </b> 0462-4802211
             


            </p>
          </div>
          <div className="flex flex-col ">
          <p
            
            className="transition-all cursor-pointer hover:text-hoverColor"
          >
           <b>Email: </b> jsjorthoaid@gmail.com


          </p>
          </div>
         
          <div className="flex flex-col">
            <p>
            <b>Address 1: </b>No.61, Iyappan Nagar, NGO- A Colony, Tirunelveli – 627007 <br /> <br/>
            <b>Address 2: </b> Hotel SakuntalaInt, Nearest to Reliance Market Vannarapettai,Tiruneveli-627003 
            </p>

          </div>
          <div className="flex gap-5 align item">
            {/* <Button title="Book Appointment" /> */}
            <button
              className="px-10 text-white rounded-md bg-backgroundColor active:bg-red-500"
              onClick={closeForm}
            >
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
