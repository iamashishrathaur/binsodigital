import Footer from "../components/Footer"
import Header from "../components/Header"
import PageTittle from "../components/PageTittle"
import serviceDetails from '../assets/images/service-details.jpg'
import serviceD1 from '../assets/images/service-d1.jpg'
import serviceD2 from '../assets/images/service-d2.jpg'
import FaqsSection2 from "../components/FaqsSection2"
import HelpShape from "../components/HelpShape"
import SidebarServiceList from "../components/SidebarServiceList"
import FileBtn from "../components/FileBtn"
const ServiceDetails = () => {
  return (
   <div className='page-wrapper'>
    <Header/>
    <PageTittle name={'Service Details'}/>
    <section className="services-details">
    <div className="container">
      <div className="row">
        <div className="col-xl-4 col-lg-4">
          <div className="service-sidebar">
            <div className="sidebar-widget service-sidebar-single">

            <SidebarServiceList/>
            <HelpShape/>
            <FileBtn/>

          </div>
        </div>
      </div>
      <div className="col-xl-8 col-lg-8">
        <div className="services-details__content">
          <img src={serviceDetails} alt="" />
          <h3 className="mt-4">Service Overview</h3>
          <p>
          In today's digital age, having a dynamic and visually appealing website is crucial for businesses looking to attract and retain customers.
           A well-designed website can make all the difference in creating a strong online presence and driving traffic to your site. At our website designing services,
            we offer expertise in creating dynamic and user-friendly websites that are tailored to meet the specific needs of your business.
             From responsive design to customized features, we are dedicated to providing excellent services that will help your website stand out in the competitive online landscape.
              Read on to learn more about our dynamic website design services and how we can help elevate your online presence.
              {" "}
          </p>
          <p>
          The success of your online platform depends on selecting the top dynamic website design service provider.
           Look for a provider with a history of producing creative and visually appealing websites. Ensure they offer a comprehensive range of services that align with your business goals and target audience.
            Evaluate their portfolio, client testimonials, and customer support options to evaluate their reliability and expertise. To keep your website competitive and user-friendly,
             give preference to providers who keep up with industry standards and the newest technological advancements. For the long term benefit of your online presence, make an informed decision by doing extensive research and comparing various service providers.
          {" "}
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
   </div>
  )
}

export default ServiceDetails