import React from "react";
import { Link } from "react-router-dom";
import Test from "../testmonnai/Testmonnais";
import './call.css';
const Call=()=>{
    return(
      
    <section id="call-to-action" class="wow fadeIn">
      <div class="container text-center">
        <h3>Call To Action</h3>
        <p> we're here to lead you for the best journey in your life</p>
    
         <a class="cta-btn" href="/testmonnai" target="_blank" style={{textDecoration:'none',body:'100%'}}>Call to action</a>
      </div>
    </section>

    )
}
export default Call;