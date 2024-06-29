import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import Project from '../assets/images/project-6.jpg'

const items = [
  <div className="project-block-three p-3" key={1}>
    <div className="inner-box">
      <div className="image-box">
        <figure className="image">
          <a href="images/resource/project-5.jpg" className="lightbox-image">
            <img src={Project} alt="" />
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
    </div>
  </div>,
  <div className="project-block-three p-3" key={2}>
    <div className="inner-box">
      <div className="image-box">
        <figure className="image">
          <a href="images/resource/project-6.jpg" className="lightbox-image">
            <img src={Project} alt="" />
          </a>
        </figure>
        <div className="overlay-box">
          <a href="page-project-details.html" className="icon">
            <i className="fa fa-long-arrow-alt-right" />
          </a>
          <h4 className="title">
            <a href="page-project-details.html">Web development</a>
          </h4>
          <span className="cat">DESIGN / IDEAS</span>
        </div>
      </div>
    </div>
  </div>,
  <div className="project-block-three p-3" key={3}>
    <div className="inner-box">
      <div className="image-box">
        <figure className="image">
          <a href="images/resource/project-7.jpg" className="lightbox-image">
            <img src={Project} alt="" />
          </a>
        </figure>
        <div className="overlay-box">
          <a href="page-project-details.html" className="icon">
            <i className="fa fa-long-arrow-alt-right" />
          </a>
          <h4 className="title">
            <a href="page-project-details.html">Web application</a>
          </h4>
          <span className="cat">DESIGN / IDEAS</span>
        </div>
      </div>
    </div>
  </div>,
  <div className="project-block-three p-3" key={4}>
    <div className="inner-box">
      <div className="image-box">
        <figure className="image">
          <a href={Project} className="lightbox-image">
            <img src={Project} alt="" />
          </a>
        </figure>
        <div className="overlay-box">
          <a href="page-project-details.html" className="icon">
            <i className="fa fa-long-arrow-alt-right" />
          </a>
          <h4 className="title">
            <a href="page-project-details.html">Web marketing</a>
          </h4>
          <span className="cat">DESIGN / IDEAS</span>
        </div>
      </div>
    </div>
  </div>
];

const ProjectSection3 = () => {
  return (
    <section className="project-section-three style-two pt-0">
      <div className="auto-container">
        <div className="sec-title">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <span className="sub-title">recently Completed work</span>
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
            items={items}
            infinite
            responsive={{
              0: { items: 1 },
              568: { items: 2 },
              1024: { items: 3 },
            }}
            disableButtonsControls
            disableDotsControls
            controlsStrategy="alternate"
          />

       <div className="owl-dots"><div className="owl-dot active"><span></span></div><div className="owl-dot"><span></span></div><div className="owl-dot"><span></span></div><div className="owl-dot"><span></span></div></div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection3;
