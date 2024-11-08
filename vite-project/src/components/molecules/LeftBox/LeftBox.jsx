import React from 'react'
import CheckBox from '../../atoms/CheckBox/CheckBox'
import ButtonBox from '../../atoms/ButtonBox/ButtonBox'


const LeftBox = (props) => {
  return (
    <div style={{paddingLeft:'50px',display:'flex',flexDirection:'column',gap:'50px'}}> 
        <div style={{color: 'var(--Dark-Navy, #242742)', fontFamily: 'Roboto', fontSize: '56px', fontWeight: '700'}}>{props.header}</div>
        <div style={{color: 'var(--Dark-Navy, #242742)',width:'90%', fontFamily: 'Roboto', fontSize: '16px', fontWeight: '400'}}>{props.header1}</div>
        <CheckBox check1="Product discovery and building what matters" check2="Measuring to ensure updates are a success" check3="And much more!"/>
        <ButtonBox email="Email address"/>
    </div>
  )
}

export default LeftBox