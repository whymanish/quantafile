import React from "react";

const WhiteOneDiv = () => {
  return (
    <div>
      <div class="bg-white transform scale-100 transition-transform duration-300 hover:scale-90  overflow-hidden rounded-3xl h-auto p-2">
        <div className=" ">
          <div className="px-8 pt-4">
            <h1 className="text-2xl cardhead lg:text-4xl font-bold  text-black">
              Create and Share, Effortless Visuals
            </h1>
            <p className="text-lg pt-6 carddesc lg:text-xl text-black font-bold">
              Send money to friends and family, or get paid by customers.{" "}
            </p> 
          </div>
          <div>
            <img src="ui2.jpg" alt="img" className="mt-2  w-full " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhiteOneDiv;
