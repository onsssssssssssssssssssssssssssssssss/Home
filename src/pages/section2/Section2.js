import React from "react";
import './Featur.css';
import {Icon} from '@iconify/react';
const Section2 = ()=>
 {
 return (
    <section id="featured-services">
      <div class="container">
        <div class="row">

          <div class="col-lg-4 box">
          <Icon icon="ion:book-outline" color="#18d26e" width="50" height="50" />
            <h4 class="title"><a href="" style={{textDecoration:'none'}}>Read more </a></h4>
            <p class="description">It’s up to you to make your life. Take what you have and stack it up like a tower of teetering blocks. Build your dream around that</p>
          </div>

          <div class="col-lg-4 box box-bg">
          <Icon icon="ion:happy-outline" color="#18d26e" width="50" height="50" />

            <h4 class="title"><a href="" style={{textDecoration:'none'}}>Website training </a></h4>
            <p class="description">Our deepest fear is not that we are inadequate, it is that we are powerful beyond measure</p>
          </div>

          <div class="col-lg-4 box">
          <Icon icon="ion:trophy-outline" color="#18d26e" width="50" height="50" />
            <h4 class="title"><a href="" style={{textDecoration:'none'}}> Excellent  challenge </a></h4>
            <p class="description">I hate every minute of training , but i said don't quit suffer now and live the rest of your life as a champignon </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default  Section2 ;
