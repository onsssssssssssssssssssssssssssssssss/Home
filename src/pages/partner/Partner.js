import React from "react";
import './partner.css'
import img1 from '../../img//clients/client-1.png'
import img2 from '../../img//clients/client-2.png'
import img3 from '../../img//clients/client-3.png'
import img4 from '../../img//clients/client-4.png'
import img5 from '../../img//clients/client-5.png'
import img6 from '../../img//clients/client-6.png'
import img7 from '../../img//clients/client-7.png'
import img8 from '../../img//clients/client-8.png'
import { Slide} from 'react-slideshow-image';
import Carousel from 'react-bootstrap/Carousel' 
import 'react-slideshow-image/dist/styles.css'


const Partner = ()=>
 {
 return (
<section id="clients" class="wow fadeInUp">
      <div className="container">

        <header class="section-header">
          <h3>Our partner</h3>
        </header>
        <Carousel className="carousel1" >
  <Carousel.Item  style={{'height':"100px"}}>
  <div className="photoone">
  </div>
  
    </Carousel.Item>
  <Carousel.Item  style={{'height':"100px"}}>
  <div className="phototwo">
  </div>
    </Carousel.Item>
  <Carousel.Item  style={{'height':"100px"}}>
  <div className="photothree">
  </div>
    </Carousel.Item>
  <Carousel.Item  style={{'height':"100px"}}>
  <div className="photofore">
  </div>
    </Carousel.Item>
  <Carousel.Item  style={{'height':"100px"}}>
  <div className="photofive">
  </div>  
  </Carousel.Item>
  <Carousel.Item  style={{'height':"100px"}}>
  <div className="photosix">
  </div>  
  </Carousel.Item>
  <Carousel.Item  style={{'height':"100px"}}>
  <div className="photoseven">
  </div>  
  </Carousel.Item>
  <Carousel.Item  style={{'height':"100px"}}>
  <div className="photoeight">
  </div>  
  </Carousel.Item>
  </Carousel>

        </div>
    </section>
  );
}
export default Partner ;
