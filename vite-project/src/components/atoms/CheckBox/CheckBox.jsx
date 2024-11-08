
import React from 'react';

const CheckBox = (props) => {
  return (
    <div style={{width:'80%',height:'100px',display:'flex',flexDirection:'column',justifyContent:'space-between'}}>
       
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',color: 'var(--Dark-Navy, #242742)',  fontFamily: 'Roboto',fontSize: '16px', fontWeight: '400'}}><svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
    <circle cx="10.5" cy="10.5" r="10.5" fill="#FF6155"/>
    <path d="M6 11.3812L8.73464 14L15 8" stroke="white" stroke-width="2"/>
  </svg>
        {props.check1}
        </div>
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',color: 'var(--Dark-Navy, #242742)',  fontFamily: 'Roboto',fontSize: '16px', fontWeight: '400'}}>
        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
  <circle cx="10.5" cy="10.5" r="10.5" fill="#FF6155"/>
  <path d="M6 11.3812L8.73464 14L15 8" stroke="white" stroke-width="2"/>
</svg>
        {props.check2}
        </div>

        <div style={{display:'flex',width:'46%',justifyContent:'space-between',alignItems:'center',color: 'var(--Dark-Navy, #242742)',  fontFamily: 'Roboto',fontSize: '16px', fontWeight: '400'}}><svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
  <circle cx="10.5" cy="10.5" r="10.5" fill="#FF6155"/>
  <path d="M6 11.3812L8.73464 14L15 8" stroke="white" stroke-width="2"/>
</svg>
        {props.check3}
        </div>
        
        
    </div>
    
  )
}

export default CheckBox