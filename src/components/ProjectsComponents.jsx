import React from 'react'

import Project1 from '../assets/images/project-6.jpg'

const ProjectsComponents = () => {
  return (
    <div className="col-lg-4 col-md-6 col-sm-12 pricing-card p-3 ">
   <div className="project-block-three">
    <div className="inner-box">
      <div className="image-box">
        <figure className="image">
          <a className="lightbox-image">
            <img src={Project1} width={100} alt="" />
          </a>
        </figure>
        <div className="overlay-box">
          <a href="page-project-details.html" className="icon">
            <i className="fa fa-long-arrow-alt-right" />
          </a>
          <h4 className="title">
            <a href="page-project-details.html">Web designing</a>
          </h4>
          <span className="cat">DESIGN / IDEAS</span>
        </div>
      </div>
      <div className="card-body">
        <div className="bg-light p-4">
    <p className="pricing-sub-title fw-medium mb-2">UI / UX Design</p>
    <h5 className="lh-base mb-0">
        Digital Agency Website Design And Development
    </h5>
</div>

  </div>
    </div>
  </div>
  {/* <div className="pricing-card">
  <img className="card-img-top" src={Project1} alt="Card image cap"/>
  <div className="card-body">
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div> */}
</div>



  )
}

export default ProjectsComponents
