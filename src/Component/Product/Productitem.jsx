import React, { useState } from "react";

function Productitem(props) {
  const [ishover, setHover] = useState(false);

  return (
    <div className="border-2 border-gray-600 mt-5 flex flex-col rounded-lg ">
      <div className=" relative">
        <span className="absolute top-3 left-3 z-10 rounded-full text-white bg-sky-400">
          -{props.product.discount}%
        </span>
      </div>
      <div className="flex flex-col  ">
        <div
          className=" w-full h-56 overflow-hidden "
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          <img
            src={ishover ? props.product.hover : props.product.main}
            alt={props.product.title}
            className="w-full h-full object-contain hover:scale-150 rounded-t-lg transition-transform duration-300 bg-gray-500"
          />
        </div>

        {/*-------------------Product details------------*/}

        <div
          title={props.product.title}
          className="bg-[whitesmoke] flex-1 mt-4 rounded-lg pl-3"
        >
          <h3 className=" truncate max-w-50 hover:text-red-400 font-semibold py-1">
            {props.product.title}
          </h3>
          <p className="text-green-700 max-w-45 py-1">
            {props.product.instock ? "In Stock " : "Out of Stock"}
          </p>

          <div>
            <div className="text-yellow-500 text-2xl py-1">
              {"★".repeat(props.product.rating)}
            </div>
          </div>
          <div className="flex flex-col">
            <span className="line-through">RS {props.product.mrp}</span>
            <span className="text-red-500">RS {props.product.Price}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Productitem;
