import React from "react";
import { data } from "../products/slider-product";

const Slider = () => {
  return (
    <div className="flex space-x-6 overflow-x-scroll m-7">
      {data.map((item,i) => {
        return (
            <div key={item.id * i} className="card card-compact min-w-52 bg-base-100 shadow-xl">
            <figure><img src={item.img} alt="Shoes" /></figure>
            <div className="card-body">
              <h2 className="card-title">{item.name}</h2>
              <p className="text-sm">If a dog chews shoes whose shoes does he choose?</p>
              
            <button className="btn bg-blue-500 text-white">{item.price}</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Slider;
