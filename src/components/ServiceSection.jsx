import { TfiMedall } from 'react-icons/tfi'
import Service1 from '../assets/images/service-1.jpg'
import Service2 from '../assets/images/service-2.jpg'
import Service3 from '../assets/images/service-3.jpg'
const ServiceSection = () => {
  return (
    <section className="service-section">
    <div className="bg bg-pattern-4" />
    <div className="auto-container">
      <div className="row">
        <div className="service-block col-lg-4 col-md-6 mb-5">
          <div className="inner-box">
            <figure className="image">
              <a href="#">
                <img src={Service1} alt="Image" />
              </a>
            </figure>
            <div className="content-box">
              <div className="inner">
                 {/* <Reputation/> */}
                 <i className="icon fa-brands fa-teamspeak"></i>
                {/* <i className="icon flaticon-reputation" /> */}
                <h5 className="title">
                  <a href="page-service-details.html">
                    Perfect solutions <br />
                    that business demands
                  </a>
                </h5>
              </div>
            </div>
          </div>
        </div>
        <div className="service-block col-lg-4 col-md-6 mb-5">
          <div className="inner-box">
            <figure className="image">
              <a href="#">
                <img src={Service2} alt="Image" />
              </a>
            </figure>
            <div className="content-box">
              <div className="inner">
              <i className="icon fa fa-medal"></i>
                {/* <i className="icon flaticon-medal" /> */}
                <h5 className="title">
                  <a href="page-service-details.html">
                    Choose the best <br />
                    IT service company
                  </a>
                </h5>
              </div>
            </div>
          </div>
        </div>
        <div className="service-block col-lg-4 col-md-6">
          <div className="inner-box">
            <figure className="image">
              <a href="#">
                <img src={Service3} alt="Image" />
              </a>
            </figure>
            <div className="content-box">
              <div className="inner">
                {/* <i className="icon flaticon-programmer" /> */}
                <i className="icon fa-solid fa-user-secret"></i>
                <h5 className="title">
                  <a href="page-service-details.html">
                    We know how to <br />
                    make a technology
                  </a>
                </h5>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom-text col-lg-12">
          <div className="text">
            Digital agency services built specifically for your business.
          </div>
          <a
            href="page-services.html"
            className="theme-btn btn-style-one dark-bg"
          >
            <span className="btn-title">Discover More</span>
          </a>
        </div>
      </div>
    </div>
  </section>
  )
}

export default ServiceSection
