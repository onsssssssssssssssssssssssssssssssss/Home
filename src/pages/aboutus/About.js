import React from "react";
import './about.css'
const About=()=>{
    return(
        <section id="about">
        <div class="container">
  
          <header class="section-header">
            <h3>About Us</h3>
            <p>we're aware of your needs unlike other companies that's why we have implemented a personalized approach for the formulation of your needs and implementation of programs adapted to the availability , skills level,and   your objective.we're offering you the adapted solutions and involve all of the actors so you can be able to  finish your project .tailor-made action to be as close as possible to your professional reality</p>
          </header>
  
          <div class="row about-cols">
  
            <div class="col-md-4 wow fadeInUp">
              <div class="about-col">
                <div class="img">
                  <img src="../../img//about-mission.jpg" alt="" class="img-fluid"/>
                  <div class="icon"><i class="ion-ios-speedometer-outline"></i></div>
                </div>
                <h2 class="title"><a href="#">Our Mission</a></h2>
                <p>
                    ANOHA designs tailor-made services, both for SMEs and for public companies. Based on this experience, ANOHA offers you a wide range of tailor-made actions: intra-company training or complete support systems, these solutions are as close as possible to your professional reality.
                </p>
              </div>
            </div>
  
            <div class="col-md-4 wow fadeInUp" data-wow-delay="0.1s">
              <div class="about-col">
                <div class="img">
                  <img src="../../img//about-plan.jpg" alt="" class="img-fluid"/>
                  <div class="icon"><i class="ion-ios-list-outline"></i></div>
                </div>
                <h2 class="title"><a href="#">Our Plan</a></h2>
                <p>
              we have implemented a personalized approach for the formulation of needs and implementation of programs adapted to the size, availability, skill level, and objective of the actions. It allows us to offer you adapted solutions and to involve all the actors of the project as well as possible.
  Tailor-made actions to be as close as possible to your professional reality.
                </p>
              </div>
            </div>
  
            <div class="col-md-4 wow fadeInUp" data-wow-delay="0.2s">
              <div class="about-col">
                <div class="img">
                  <img src="../../img//about-vision.jpg" alt="" class="img-fluid"/>
                  <div class="icon"><i class="ion-ios-eye-outline"></i></div>
                </div>
                <h2 class="title"><a href="#">Our Vision</a></h2>
                <p>
              Make your vision so clear that your fears become irrelevant.
  We are not stuck in the ruts of destiny, we have the power to break free, clear our vision and see a new life for ourselves. 
  If you can dream it, you can do it. 
                </p>
              </div>
            </div>
  
          </div>
  
        </div>
      </section>

    )
}
export default About;