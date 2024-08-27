import React from 'react'
import './Footer.css'
const Footer = () => {
  const number = "+919651764530";
  const email = "chaman7890gautam@gmail.com";
  return (
    <div className="footer">
    <div className='Footer-main'>
      <div className="sec1">
        <h3>Chaman Gautam</h3>
        <p>Fresher web developer who enjoys building fast
        and accessible digital products.</p>
      </div>
      <div className="con">
        <h3>Contact Us</h3>
        <div className="ic-con">
        <a href={`mailto:${email}`}><i className="bi bi-envelope-at-fill"></i> chaman7890gautam@gmail.com</a>
        <a href={`tel:${number}`}><i className="bi bi-telephone-fill"></i> +919651764530</a>
        <a href={`https://wa.me/${number}`}><i className="bi bi-whatsapp"></i> +919651764530</a>
        </div>
      </div>
      <div className="sec1 ">
        <h3>Follow Us</h3>
        <div className="links">
        <a href="https://www.facebook.com/ChamanRoyChoudhary1" target="_"><i className="bi bi-facebook"></i></a>
        <a href="https://www.instagram.com/chamanroychoudhary_96/" target="_"><i className="bi bi-instagram"></i></a>
        <a href="https://www.Linkedin.com/in/chaman-gautam-07146827b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_"><i className="bi bi-linkedin"></i></a>
        <a href="https://github.com/ChamanGautam" target="_"><i className="bi bi-github"></i></a>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Footer
