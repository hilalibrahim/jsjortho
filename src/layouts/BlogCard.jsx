import React from "react";

const BlogCard = ({ img, headlines,description }) => {
  return (
    <div className=" w-full lg:w-1/4 p-2 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] space-y-2 rounded-lg cursor-pointer hover:scale-105 transition duration-300 ease-in-out">
      <img
        className="w-full h-64 rounded-lg md:h-96 lg:h-40"
        src={img}
        alt="img"
      />
      <h2 className="text-lg font-semibold text-center ">{headlines}</h2>
      <p className="text-sm text-center ">
        {description}
      </p>
    </div>
  );
};

export default BlogCard;
