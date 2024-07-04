import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import ProjectImage from '../assets/images/project-6.jpg'; // Update this import according to your project structure
import { useState } from 'react';

const items = [
  {
    id: 1,
    image: ProjectImage,
    alt: 'Project 5',
    href: 'images/resource/project-5.jpg',
    title: 'Web designing',
  },
  {
    id: 2,
    image: ProjectImage,
    alt: 'Project 6',
    href: 'images/resource/project-6.jpg',
    title: 'Web development',
  },
  {
    id: 3,
    image: ProjectImage,
    alt: 'Project 7',
    href: 'images/resource/project-7.jpg',
    title: 'Web application',
  },
  {
    id: 4,
    image: ProjectImage,
    alt: 'Project 8',
    href: 'images/resource/project-8.jpg',
    title: 'Web marketing',
  },
];

const renderItems = () => {
  return items.map((item) => (
    <div className="project-block-three p-3" key={item.id}>
      <div className="inner-box">
        <div className="image-box">
          <figure className="image">
            <a href={item.href} className="lightbox-image">
              <img src={item.image} alt={item.alt} />
            </a>
          </figure>
          <div className="overlay-box">
            <a href="page-project-details.html" className="icon">
              <i className="fa fa-long-arrow-alt-right" />
            </a>
            <h4 className="title">
              <a href="page-project-details.html">{item.title}</a>
            </h4>
            <span className="cat">DESIGN / IDEAS</span>
          </div>
        </div>
      </div>
    </div>
  ));
};

const renderDots = ({ isActive }) => {
  return (
    <div className={`owl-dot ${isActive ? 'active' : ''}`}>
      <span></span>
    </div>
  );
};

const ProjectSection3 = () => {
  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
  };


  return (
    <section className="project-section-three style-two pt-0">
      <div className="auto-container">
        <div className="sec-title">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <span className="sub-title">Recently Completed Work</span>
              <h2>
                Improve &amp; Enhance the <br />
                Tech Projects
              </h2>
            </div>
            <div className="col-lg-5 text-lg-end btn-box">
              <a
                href="page-projects.html"
                className="theme-btn btn-style-one hover-light"
              >
                <span className="btn-title">View all work</span>
              </a>
            </div>
          </div>
        </div>
        <div className="project-three-carousel carousel-outer overflow-hidden">
          <AliceCarousel
            mouseTracking
            items={renderItems()}
            infinite
            responsive={responsive}
            disableButtonsControls
            controlsStrategy="alternate"
            renderDotsItem={renderDots}
          />
        </div>
      </div>
    </section>
  );
};

export default ProjectSection3;
