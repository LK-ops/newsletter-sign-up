import React, {useState} from 'react'

const ButtonBox = (props) => {
  const [isHowered,setIsHovered]= useState(false);
  return (
    <div>
        <div style={{display:'flex',flexDirection:'column'}}>
          <p>{props.email}</p>
          <input style={{cursor:'pointer',width: '376px', height: '56px' ,borderRadius: '8px', border: '1px solid var(--grey-25, rgba(25, 24, 43, 0.25))',textAlign:'center'}} type="email" name="email" id="" placeholder='email@company.com' title='hello'/>
          <button style={{cursor:'pointer',marginTop:'24px',width: '376px', height: '56px', borderRadius: '8px', background: isHowered ? 'var(--Gradient-1, linear-gradient(204deg, #FF6A3A 0%, #FF527B 100%))':'#242742',color: 'white', textAlign: 'center', fontFamily: 'Roboto', fontSize: '16px',fontWeight: '700' }} onMouseEnter={()=>setIsHovered(true)} onMouseLeave={()=>setIsHovered(false)}>Subscribe to monthly newsletter</button>
        </div>
    </div>
  )
}

export default ButtonBox