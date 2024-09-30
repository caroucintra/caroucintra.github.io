import React from 'react'
import StarA from "../../assets/stars-a.svg"
import StarB from "../../assets/stars-b.svg"
import StarC from "../../assets/stars-c.svg"

const Stars = () => {
  return (
    <div className='stars'>
        <img src={StarA} alt="" className="star s1" />
        <img src={StarB} alt="" className="star s2" />
        <img src={StarC} alt="" className="star s3" />
        <img src={StarA} alt="" className="star s4" />
        <img src={StarB} alt="" className="star s5" />
        <img src={StarC} alt="" className="star s6" />
        <img src={StarA} alt="" className="star s7" />
        <img src={StarB} alt="" className="star s8" />
        <img src={StarC} alt="" className="star s9" />
    </div>
  )
}

export default Stars
