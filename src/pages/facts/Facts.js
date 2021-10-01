import React from "react";
import './facts.css'
const Facts = ()=>
 {
 return (

  <section id="facts"  class="wow fadeIn">
    <div class="container">

      <header class="section-header">
        <h3>Facts</h3>
        <p class="para2">Knowledge is a process of piling up facts, wisdom lies in their simplification.</p>
      </header>

      <div class="row counters">

                <div class="col-lg-3 col-6 text-center">
          <span data-toggle="counter-up">274</span>
          <p>Clients</p>
                </div>

        <div class="col-lg-3 col-6 text-center">
          <span data-toggle="counter-up">421</span>
          <p>Projects</p>
                </div>

        <div class="col-lg-3 col-6 text-center">
          <span data-toggle="counter-up">1,364</span>
          <p>Hours Of Support</p>
                </div>

        <div class="col-lg-3 col-6 text-center">
          <span data-toggle="counter-up">18</span>
          <p>Hard Workers</p>
                </div>

            </div>


    </div>
  </section>
  
  );
}

export default Facts  ;
