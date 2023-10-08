import React from 'react'
import "./Footer.module.css"
import Amazone from "../../Assets/images/5968140.png"
import MasterCard from "../../Assets/images/Mastercard-logo.svg (1).png"
import Paypal from "../../Assets/images/cb08d387c67643fdc61b6bea0b7d776e"
import Express from "../../Assets/images/png-transparent-amex-card-credit-logo-logos-logos-and-brands-icon-thumbnail.png"
import Google from "../../Assets/images/png-transparent-google-play-computer-icons-android-google-text-label-logo.png"
import Mac from "../../Assets/images/mac_app_store_icon.png"

export default function Footer() {
  return <>
  <section className='bg-main-light p-5 ps-5'>
    <div className='footer-title border-bottom pb-4'>
        <h3>Get the FreshCart app</h3>
        <p>We will send you a link, open it on your phone to download the app.</p>
        <div className='d-flex '>
          <input type="email" className='form-control w-75 ms-3 me-5' name='email' placeholder='E-mail' />
          <button type='submit' className='btn bg-main text-white ms-3'>Share App Link</button>
        </div>
    </div>
    <div className="partners py-1 d-flex align-items-center justify-content-between border-bottom ">
      <div className='d-flex '>
      <span className='h5 me-4'>Payment Partners</span>
        <img  style={{height:"25px" , width:"30px" , marginRight:"5px"}} src={Amazone} alt="Payment Way" />
        <img style={{height:"25px", width:"30px"  , marginRight:"3px"}} src={MasterCard} alt="Payment Way" />
        <img  style={{height:"25px" , width:"30px"  , marginRight:"3px"}} src={Express} alt="Payment Way" />
        <img  style={{height:"25px" , width:"30px"  , marginRight:"3px"}} src={Paypal} alt="Payment Way" />
      </div>
      <div className=''>
        <span className='h5'>Get deliveries with FreshCart</span>
        <img  style={{height:"120px" , width:"120px" , marginRight:"5px"}} src={Google} alt="download Way" />
        <img style={{height:"35px", width:"130px"  , marginRight:"3px"}} src={Mac} alt="download Way" />
      </div>

    </div>
  </section>
  </>
}
