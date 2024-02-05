import React from 'react'
import img1 from "../assets/offers/one.jpg"
import img2 from "../assets/offers/two.jpg"
import img3 from "../assets/offers/three.jpg"

const Offers = () => {
  return (
    <>
    <div className="flex flex-col items-center sm:grid grid-rows-2 lg:grid-rows-2 mx-5 my-10 grid-flow-col gap-1">
    
    <div>
        <img src={img1} />
    </div>
    <div>
        <img src={img2} />
    </div>
    <div>
        <img src={img3} />
    </div>
    <div>
        <img src={img2} />
    </div>
    <div>
        <img src={img1} />
    </div>
    <div>
        <img src={img2} />
    </div>
    <div>
        <img src={img3} />
    </div>
    <div>
        <img src={img2} />
    </div>
    
    </div>
    </>
  )
}

export default Offers