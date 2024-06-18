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
   <>
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