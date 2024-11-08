import React from 'react'
import LeftBox from '../../molecules/LeftBox/LeftBox'
import { RightBox } from '../../molecules/RightBox/RightBox'



const BoxModel = () => {
  return (
    <div style={{width: '928px', height: '641px',backgroundColor:'white', display:'flex',justifyContent:'space-around',alignItems:'center',borderRadius: '36px', boxShadow: '0px 15px 60px 0px rgba(0, 0, 0, 0.25)'}}>
        <LeftBox header="Stay updated!" header1="Join 60,000+ product managers receiving monthly updates on:"/>
        <RightBox/>
    </div>
  )
}

export default BoxModel