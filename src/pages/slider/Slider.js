import React from 'react';
import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image';
import './slide.css';
import { Link } from 'react-router-dom';
const slideImages = [
 ' ../../img//intro-carousel/one.jpg',
  '../../img//intro-carousel/2.jpg',
  '../../img//intro-carousel/3.jpg',
  '../../img//intro-carousel/4.jpg',
 '../../img//intro-carousel/5.jpg'
];

const Slider = () => {
    return ( 
      <section id="intro">
      <div class="intro-container">
        <div id="introCarousel" class="carousel  slide carousel-fade" data-ride="carousel">
  
          <ol class="carousel-indicators"></ol>
  
          <div class="carousel-inner" role="listbox">
  
      <Slide easing="ease">
      <div class="carousel-item active">

        <div className="each-slide">    
          <div className="slideone">
          <div class="carousel-container">
              <div class="carousel-content">
                <h2>Anoha Academy </h2>
                <p>  develop your skills , guide your journey in order  to attend your  potential and reach the aims you want</p>
          <Link to="/" class="btn-get-started scrollto" style={{textDecoration:'none'}}>  Get Started </Link>
              </div> </div>
            </div>
        </div></div>
        <div class="carousel-item active">
        <div className="each-slide">
          <div s className="slidetho">
            <div class="carousel-container">
              <div class="carousel-content">
                <h2>We are professionals</h2>
              <p>we are professionals we're the best solution for developing the best skills and practices you need</p>
                <a href="navbar/index.html" className="btn-get-started scrollto" style={{textDecoration:'none'}}>Get Started</a>
              </div>
            </div>
            </div>
          </div>
        </div>
        <div class="carousel-item active">
        <div className="each-slide">
          <div  className="slidethree">
          <div class="carousel-container">
              <div class="carousel-content">
                <h2>Learn Without Limits  </h2>
                          <p>Your perspective is always limited by how much you know. Expand your knowledge and you will transform your mind</p>

                <a href="navbar/index.html" class="btn-get-started scrollto" style={{textDecoration:'none'}}>Get Started</a>
              </div>
            </div>
  </div>
          </div>  
        </div>
        <div class="carousel-item active">
        <div className="each-slide">
          <div  className="slidefore">
          <div class="carousel-container">
              <div class="carousel-content">
                <h2>Achieve your goals</h2>
                <p>One part at a time, one day at a time, we can accomplish any goal we set for ourselves.</p>
                <a href="navbar/index.html" className="btn-get-started scrollto" style={{textDecoration:'none'}}>Get Started</a>
              </div>
            </div>
          </div>
        </div>        </div>
        <div class="carousel-item active">

        <div className="each-slide">
          <div  className="slidefive">
          <div class="carousel-container">
              <div class="carousel-content">
                <h2>discover our training</h2>
                <p>intra - inter - mission - certifications.</p>
                <a href="navbar/index.html" className="btn-get-started scrollto" style={{textDecoration:'none'}}>Get Started</a>
              </div>
            </div></div>
          </div>
        </div>
      </Slide>
    </div>
    </div>
    </div>
    </section>);
};
export default Slider;