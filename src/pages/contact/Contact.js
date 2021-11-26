import React from "react";
import './cantact.css'
import {Icon} from '@iconify/react';
const Contact=()=>{
    return(
        <section id="contact" >
        <div class="container">
  
          <div class="section-header">
            <h3>Contact Us</h3>
            <p></p>
          </div>
  
          <div class="row contact-info">
  
            <div class="col-md-4">
              <div class="contact-address">
                <i class="ion-ios-location-outline"><Icon icon="bx:bxs-map" color="#18d26e" width="60" height="60" />
</i>
                <h3>Address</h3>
                <address>BP 2, Avenue 9 Avril Marsa Safsaf - 2078 Tunisia
  </address>
              </div>
            </div>
  
            <div class="col-md-4">
              <div class="contact-phone">
                <i class="ion-ios-telephone-outline">
                <Icon icon="cil:phone" color="#18d26e" width="60" height="60" />
</i>
                <h3>Phone Number</h3>
                <p><a href="tel:+155895548855" style={{textDecoration:'none'}}>(+216) 98 218 074</a></p>
              </div>
            </div>
  
            <div class="col-md-4">
              <div class="contact-email">
                <i class="ion-ios-email-outline">
                    <Icon icon="fontisto:email" color="#18d26e" width="60" height="60" />
</i>
                <h3>Email</h3>
                <p><a href="mailto:info@example.com" style={{textDecoration:'none'}}>contact@anoha.com.tn</a></p>
              </div>
            </div>
  
          </div>
  
          <div className="form">
            <div id="sendmessage">Your message has been sent. Thank you!</div>
            <div id="errormessage"></div>
            <form action="" method="post" role="form" class="contactForm">
              <div class="form-row">
                <div class="form-group col-md-6">
                  <input type="text" name="name" style={{width:'600px',marginBottom:'15px'}} className="form-control"  placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                  
                  <div className="validation"></div>
                </div>
                <div className="form-group col-md-6">
                  <input type="email" className="form-control" style={{width:'600px',marginBottom:'15px'}} name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                  <div className="validation"></div>
                </div>
              </div>
              <div className="form-group">
                <input type="text" className="form-control" style={{marginBottom:'15px'}}  name="subject" id="subject" placeholder="Subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                <div class="validation"></div>
              </div>
              <div className="form-group">
                <textarea className="form-control" style={{marginBottom:'15px'}} name="message" rows="5" data-rule="required" data-msg="Please write something for us" placeholder="Message"></textarea>
                <div className="validation"></div>
              </div>
              <div className="text-center"><button type="submit">Send Message</button></div>
            </form>
          </div>
  
        </div>
      </section>

    )
}
export default Contact;