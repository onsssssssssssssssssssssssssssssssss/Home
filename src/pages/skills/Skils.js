import React from "react";
import './skils.css';
import { Icon } from '@iconify/react';
const Skils = ()=>
 {
 return (
    <section id="skills">
      <div className="container">

        <header  className="section-header">
          <h3>Discover Our Training</h3>
          <p  > ANOHA  creates content and educational materials for you that meet the specificities of your company, its culture, its environment and the public to be trained.Each project has its challenges and a personalized response.

Listening to your expectations, A NOH A  puts all its resources into play to understand your problem. Its expertise is at your disposal to take charge of your training project while respecting your specificities: size, resources, level of competence. The implementation of this personalized training plan helps to strengthen the cohesion of your teams. They acquire a common vocabulary and develop collective skills</p>
        </header>
<div  className="container">
    <div  className="row">
        
        <div  className="col-lg-3 col-sm-6 mb-4">
            <div  className="card border-0 shadow rounded-xs pt-5">
                <div  className="card-body"> <i  className="fa fa-object-ungroup icon-lg icon-primary icon-bg-primary icon-bg-circle mb-3"></i>       
<Icon icon="ei:chart" color="#062caf" width="60" height="60" />

                    <h4  className="mt-4 mb-3" style={{marginleft:'60px', overflow:' hidden'}}>Advice</h4>
                   
                </div>
            </div>
        </div>
        <div class="col-lg-3 col-sm-6 mb-4">
            <div class="card border-0 shadow rounded-xs pt-5">
                <div class="card-body"> <i class="fa fa-users icon-lg icon-yellow icon-bg-yellow icon-bg-circle mb-3"></i>           
                     <Icon icon="ei:sc-odnoklassniki" color="#f6a622" width="60" height="60" />
                    <h4 class="mt-4 mb-3" style={{marginleft: '60px', overflow: 'hidden'}}>Studies</h4>
                    
                </div>
            </div>
        </div>
        <div class="col-lg-3 col-sm-6 mb-4">
            <div class="card border-0 shadow rounded-xs pt-5">
                <div class="card-body"> <i class="fa fa-desktop icon-lg icon-purple icon-bg-purple icon-bg-circle mb-3"></i>
                <Icon icon="healthicons:i-training-class" color="#7952f5" width="60" height="60" />
                    <h4 class="mt-4 mb-3" style={{marginleft:' 55px', overflow: 'hidden'}}>Training</h4>
                    
                </div>
            </div>
        </div>
        <div class="col-lg-3 col-sm-6 mb-4">
            <div class="card border-0 shadow rounded-xs pt-5">
                <div class="card-body"> <i class="fa fa-cloud icon-lg icon-cyan icon-bg-cyan icon-bg-circle mb-3"></i>
                <Icon icon="medical-icon:hearing-assistance" color="#02d0a1" width="60" height="60" />
                    <h4 class="mt-4 mb-3" style={{marginleft: '38px', overflow:' hidden'}}>Assistance </h4>
                  
                </div>
            </div>
        </div>
        <div class="col-lg-3 col-sm-6 mb-4">
            <div class="card border-0 shadow rounded-xs pt-5">
                <div class="card-body"> <i class="fa fa-comments icon-lg icon-red icon-bg-red icon-bg-circle mb-3"></i>
                <Icon icon="bx:bx-message" color="#ff4949" width="60" height="60" />

                    <h4 class="mt-4 mb-3" style={{marginleft: '55px', overflow: 'hidden'}}>Logistics</h4>
                   
                </div>
            </div>
        </div>
        <div class="col-lg-3 col-sm-6 mb-4">
            <div class="card border-0 shadow rounded-xs pt-5">
                <div class="card-body"> <i class="fa fa-search-plus icon-lg icon-green icon-bg-green icon-bg-circle mb-3"></i>
                <Icon icon="fa-solid:search-plus" color="#6c3" width="60" height="60" />
                    <h4 class="mt-4 mb-3" style={{marginleft: '20px', overflow: 'hidden'}}>Installation and management </h4>
                </div>
            </div>
        </div>
        <div class="col-lg-3 col-sm-6 mb-4">
            <div class="card border-0 shadow rounded-xs pt-5">
                <div class="card-body"> <i class="fa fa-user icon-lg icon-orange icon-bg-orange icon-bg-circle mb-3"></i>
                <Icon icon="bi:person-check-fill" color="#ff7c17" width="60" height="60" />

                    <h4 class="mt-4 mb-3" style={{marginleft: '55px', overflow: 'hidden'}}>Coaching</h4>
                </div>
            </div>
        </div>
        <div class="col-lg-3 col-sm-6 mb-4">
            <div class="card border-0 shadow rounded-xs pt-5">
                <div class="card-body"> <i class="fa fa-envelope icon-lg icon-blue icon-bg-blue icon-bg-circle mb-3"></i>
                <Icon icon="bx:bxs-message-alt" color="#3682ff" width="60" height="60" />
                    <h4 class="mt-4 mb-3" style={{marginleft:'15px'}}> feasibility study </h4>
                </div>
            </div>
        </div>
    </div>
</div>
      </div>
    </section>

  );
}

export default  Skils ;
