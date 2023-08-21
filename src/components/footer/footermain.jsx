import { useState } from "react";
import { Link } from "react-router-dom";

function FooterSocial(props)
{
  const [toggle, setToggle] = useState(false);

  return ( 
    <div className="d-flex justify-content-center align-items-center" style={{}}>
      <a onMouseOver = { () => {setToggle(true)} } onMouseOut = { () => {setToggle(false)} } href="" style={{fontSize: 15, color: toggle ? "black" : '#858585' , padding: '0 15px'}} className=''>
        <i style={{fontSize: 20}} className={props.icon}></i>
      </a>
    </div>
  )
}

function FooterMenu(props)
{
  const [toggle, setToggle] = useState(false);

  return(
      <div className="" style={{textShadow: 'none', fontSize: 14, display: 'block'}}>
          <a onMouseOver = { () => {setToggle(true)} } onMouseOut = { () => {setToggle(false)} } href="" style={{fontSize: 14, color: toggle ? "black" : '#858585' , padding: '0 15px', textDecorationLine: 'none', fontWeight: 'bold'}} className=''>
            {props.text}
          </a>
      </div>
  )
}

function FooterMain()
{ 
  const currentYear = new Date().getFullYear();

  return (
    <div className='' style={{margin : '', padding: '20px 20px 50px 20px', textShadow: 'none', fontSize: 14, backgroundColor: '#f4f4f4'}}>
      <div className="" style={{textShadow: 'none', fontSize: 14, display: 'block'}}>
        <div className='d-flex justify-content-center align-items-center' id='footer-atas'>
            <FooterSocial icon="bi bi-twitter"/>
            <FooterSocial icon="bi bi-facebook"/>
            <FooterMenu text="ABOUT"/>
            <FooterMenu text="FAQ"/>
            <FooterMenu text="BLOG"/>
            <FooterMenu text="CONTACT US"/>
        </div>
        <div className="d-flex justify-content-center align-items-center" id='footer-bawah' style={{marginTop: '10px', lineHeight: '25px'}}>
          <span style={{fontSize: 14, color:'#858585'}}> Copyright &copy; {currentYear} itch corp</span>
          <span style={{fontSize: 14, color:'#858585', margin: '0 10px'}}>·</span>
          <a  style={{fontSize: 14, color:'#858585'}} className=''>Directory</a>
          <span style={{fontSize: 14, color:'#858585', margin: '0 10px'}}>·</span>
          <a href="" style={{fontSize: 14, color:'#858585'}} className=''>Terms</a>
          <span style={{fontSize: 14, color:'#858585', margin: '0 10px'}}>·</span>
          <a href="" style={{fontSize: 14, color:'#858585'}} className=''>Privacy</a>
          <span style={{fontSize: 14, color:'#858585', margin: '0 10px'}}>·</span>
          <a href=""  style={{fontSize: 14, color:'#858585'}} className=''>Cookies</a>
        </div>
      </div>
    </div>
  )
}

export default FooterMain