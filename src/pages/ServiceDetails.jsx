import Footer from "../components/Footer"
import Header from "../components/Header"
import PageTittle from "../components/PageTittle"
import ServiceList from "../components/ServiceList"
import serviceDetails from '../assets/images/service-details.jpg'
import serviceD1 from '../assets/images/service-d1.jpg'
import serviceD2 from '../assets/images/service-d2.jpg'
import FeqSection2 from "../components/FaqsSection2"
import FaqsSection2 from "../components/FaqsSection2"
const ServiceDetails = () => {
  return (
   <>
    <Header/>
    <PageTittle name={'Service Details'}/>
    <section className="services-details">
  <div className="container">
    <div className="row">
      <div className="col-xl-4 col-lg-4">
        <div className="service-sidebar">
          <div className="sidebar-widget service-sidebar-single">
            <div className="sidebar-service-list">
              <ul>
                <li>
                  <a href="page-service-details.html" className="current">
                    <i className="fas fa-angle-right" />
                    <span>Digital Agency</span>
                  </a>
                </li>
                <li className="current">
                  <a href="page-service-details.html">
                    <i className="fas fa-angle-right" />
                    <span>Web designing</span>
                  </a>
                </li>
                <li>
                  <a href="page-service-details.html">
                    <i className="fas fa-angle-right" />
                    <span>Web development</span>
                  </a>
                </li>
                <li>
                  <a href="page-service-details.html">
                    <i className="fas fa-angle-right" />
                    <span>Web application</span>
                  </a>
                </li>
                <li>
                  <a href="page-service-details.html">
                    <i className="fas fa-angle-right" />
                    <span>Digital Marketing</span>
                  </a>
                </li>
                <li>
                  <a href="page-service-details.html">
                    <i className="fas fa-angle-right" />
                    <span>App Development</span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="service-details-help">
              <div className="help-shape-1" />
              <div className="help-shape-2" />
              <h2 className="help-title">
                Contact with <br /> us for any <br /> advice
              </h2>
              <div className="help-icon">
              <i className="fa-thin fa-phone"></i>
                <span className=" lnr-icon-phone-handset" />
              </div>
              <div className="help-contact">
                <p>Need help? Talk to an expert</p>
                <a href="tel:12463330079">+892 ( 123 ) 112 - 9999</a>
              </div>
            </div>
            <div className="sidebar-widget service-sidebar-single mt-4">
              <div
                className="service-sidebar-single-btn wow fadeInUp animated"
                data-wow-delay="0.5s"
                data-wow-duration="1200m"
                style={{
                  visibility: "visible",
                  animationDelay: "0.5s",
                  animationName: "fadeInUp"
                }}
              >
                <a href="#" className="theme-btn btn-style-one d-grid">
                  <span className="btn-title">
                    <span className="fas fa-file-pdf" /> download pdf file
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-8 col-lg-8">
        <div className="services-details__content">
          <img src={serviceDetails} alt="" />
          <h3 className="mt-4">Service Overview</h3>
          <p>
            Lorem ipsum is simply free text used by copytyping refreshing. Neque
            porro est qui dolorem ipsum quia quaed inventore veritatis et quasi
            architecto beatae vitae dicta sunt explicabo. Aelltes port lacus
            quis enim var sed efficitur turpis gilla sed sit amet finibus eros.
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the ndustry standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make{" "}
          </p>
          <p>
            When an unknown printer took a galley of type and scrambled it to
            make a type specimen book. It has survived not only five centuries,
            but also the leap into electronic typesetting, remaining essentially
            unchanged Lorem ipsum dolor sit amet consec tetur adipis icing elit{" "}
          </p>
          <div className="content mt-40">
            <div className="text">
              <h3>Service Center</h3>
              <p>
                Lorem ipsum is simply free text used by copytyping refreshing.
                Neque porro est qui dolorem ipsum quia quaed inventore veritatis
                et quasi architecto beatae vitae dicta sunt explicabo.
              </p>
              <blockquote className="blockquote-one">
                Lorem ipsum dolor sit amet, consectetur notted adipisicing elit
                sed do eiusmod remaining essentially unchanged Lorem ipsum dolor
                sit amet consec tetur
              </blockquote>
            </div>
            <div className="feature-list mt-4">
              <div className="row clearfix">
                <div className="col-lg-6 col-md-6 col-sm-12 column">
                  <img
                    className="mb-3"
                    src={serviceD1}
                    alt="images"
                  />
                  <p>
                    Lorem ipsum dolor sit amet consec adipis elit Dolor repellat
                    pariatur temporibus doloribus hic conse quatur copy typing
                    refreshing
                  </p>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 column">
                  <img
                    className="mb-3"
                    src={serviceD2}
                    alt="images"
                  />
                  <p>
                    Lorem ipsum dolor sit amet consec adipis elit Dolor repellat
                    pariatur temporibus doloribus hic conse quatur copy typing
                    refreshing
                  </p>
                </div>
              </div>
            </div>
          </div>
          <FaqsSection2/>
        </div>
      </div>
    </div>
  </div>
</section>

    <Footer/>
   </>
  )
}

export default ServiceDetails