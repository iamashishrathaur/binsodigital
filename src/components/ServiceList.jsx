import React from 'react';
import { Link } from 'react-router-dom';

const services = [
  {
    id: 1,
    icon: 'fa-shield-alt',
    title: 'Cyber Security',
    description: 'Amet justo dolor lorem kasd amet magna sea stet eos vero lorem ipsum dolore sed',
    delay: '0.3s'
  },
  {
    id: 2,
    icon: 'fa-chart-pie',
    title: 'Data Analytics',
    description: 'Amet justo dolor lorem kasd amet magna sea stet eos vero lorem ipsum dolore sed',
    delay: '0.6s'
  },
  {
    id: 3,
    icon: 'fa-code',
    title: 'Web Development',
    description: 'Amet justo dolor lorem kasd amet magna sea stet eos vero lorem ipsum dolore sed',
    delay: '0.9s'
  },
  {
    id: 4,
    icon: 'fab fa-android',
    title: 'Apps Development',
    description: 'Amet justo dolor lorem kasd amet magna sea stet eos vero lorem ipsum dolore sed',
    delay: '0.3s'
  },
  {
    id: 5,
    icon: 'fa-search',
    title: 'SEO Optimization',
    description: 'Amet justo dolor lorem kasd amet magna sea stet eos vero lorem ipsum dolore sed',
    delay: '0.6s'
  }
];

const ServiceList = () => {
  return (
    <section
      id='service-list'
      className="container-fluid py-5 wow fadeInUp service-block-two solutions"
      data-wow-delay="0.1s"
    >
      <div className="container py-5">
        <br />
        <div className="sec-title text-center">
          <span className="sub-title">WHAT WE’RE OFFERING</span>
          <h2>
            Get the best IT technology <br />
            services <span>&amp;</span> solutions
          </h2>
        </div>
        <div className="row gy-5">
          {services.map((service) => (
            <div key={service.id} className="col-lg-4 col-md-6 wow zoomIn"
              data-wow-delay={service.delay}
            >
              <div className="inner-box service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                <div className="service-icon">
                  <i className={`fa ${service.icon} text-white`} />
                </div>
                <h4 className="mb-3">{service.title}</h4>
                <p className="m-0">
                  {service.description}
                </p>
                <div className="button-box">
                  <Link to={'/service-details'} className="read-more">
                    Read More <i className="fa fa-angle-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          ))}
          <div className="col-lg-4 col-md-6 wow zoomIn"
            data-wow-delay="0.9s"
          >
            <div className="position-relative bg-con-background rounded h-100 d-flex flex-column align-items-center justify-content-center text-center p-5">
              <h3 className="text-white mb-3">Call Us For Quote</h3>
              <p className="text-white mb-3">
                Clita ipsum magna kasd rebum at ipsum amet dolor justo dolor est
                magna stet eirmod
              </p>
              <h2 className="text-white mb-0">+012 345 6789</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServiceList;
