import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import Feature1 from '../assets/images/feature3-1.jpg'
import Feature2 from '../assets/images/feature3-2.jpg'
import Feature3 from '../assets/images/feature3-3.jpg'

const FeaturesSection = () => {

    const items =[
        <div key="feature1" className="feature-block-four" style={{marginRight:'30px'}}>
        <div className="inner-box">
          <div className="image-box">
            <figure className="image">
              <img src={Feature1} alt="Image" />
            </figure>
            <h4 className="word">G</h4>
          </div>
          <div className="content-box">
            <h4 className="title">
              <a href="page-about.html">Gaming and Entertainment</a>
            </h4>
            <div className="text">
              There are many variations of passages available.
            </div>
            <a href="page-about.html" className="theme-btn btn-style-two dark-bg">
              <span className="btn-title">Read More</span>
            </a>
            <div className="icon-quotes" />
          </div>
        </div>
      </div>,
  
      // Second item
      <div key="feature2" className="feature-block-four" style={{marginRight:'30px'}}>
        <div className="inner-box">
          <div className="image-box">
            <figure className="image">
              <img src={Feature2} alt="Image" />
            </figure>
            <h4 className="word">B</h4>
          </div>
          <div className="content-box">
            <h4 className="title">
              <a href="page-about.html">Businesses and Finance</a>
            </h4>
            <div className="text">
              There are many variation of passage of available.
            </div>
            <a href="page-about.html" className="theme-btn btn-style-two dark-bg">
              <span className="btn-title">Read More</span>
            </a>
            <div className="icon-quotes" />
          </div>
        </div>
      </div>,
  
      // Third item
      <div key="feature3" className="feature-block-four" style={{marginRight:'30px'}}>
        <div className="inner-box">
          <div className="image-box">
            <figure className="image">
              <img src={Feature3} alt="Image" />
            </figure>
            <h4 className="word">T</h4>
          </div>
          <div className="content-box">
            <h4 className="title">
              <a href="page-about.html">Technology and Management</a>
            </h4>
            <div className="text">
              There are many variation of passage of available.
            </div>
            <a href="page-about.html" className="theme-btn btn-style-two dark-bg">
              <span className="btn-title">Read More</span>
            </a>
            <div className="icon-quotes" />
          </div>
        </div>
      </div>,
    ]
  return (
    <section className="features-section-three">
    <div
      className="bg bg-image"
      style={{ backgroundImage: "url(images/icons/pattern-5.jpg)" }}
    />
    <div className="outer-box">
      <div className="sec-title text-center">
        <span className="sub-title">What we do</span>
        <h2>
          Ready to give a new <br /> business look
        </h2>
      </div>
      <div className="features-carousel">
      <AliceCarousel 
       items={items}
       autoPlay
       infinite
       touchTracking
       mouseTracking
       responsive={{0:{items:1},1200:{items:2}}}
       disableButtonsControls
       disableDotsControls
       autoPlayInterval={6000}
      />
      </div>
    </div>
  </section>
  )
}

export default FeaturesSection
