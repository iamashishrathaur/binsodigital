import bgSlider2 from '../assets/images/bg-slider2.jpg'
const MainSlider = () => {
  return (

    <section className="banner-section banner-style-one">
      {/* <div className='tp-dottedoverlay on'></div> */}
    <div
      className="bg bg-image"
      style={{ backgroundImage: `url(${bgSlider2})` }}
    />
    <ul className="slide-social">
      <li>
        <a href="#">FACEBOOK</a>
      </li>
      <li>
        <a href="#">instagram</a>
      </li>
      <li>
        <a href="#">twitter</a>
      </li>
    </ul>
    <div className="auto-container">
      <div className="row">
        <div className="content-column col-xl-12">
          <div className="inner-column">
            <div
              className="border-box wow zoomIn animated animated"
              style={{ visibility: "visible", animationName: "zoomIn" }}
            />
            <span
              className="sub-title wow fadeInUp animated"
              data-wow-delay="300ms"
              style={{
                visibility: "visible",
                animationDelay: "300ms",
                animationName: "fadeInUp"
              }}
            >
              Welcome Digital Agency
            </span>
            <h1
              className="title wow fadeInUp animated"
              data-wow-delay="300ms"
              style={{
                visibility: "visible",
                animationDelay: "300ms",
                animationName: "fadeInUp"
              }}
            >
              Grow your <br /> Digital <span>Agency</span>
            </h1>
            <div
              className="text wow fadeInUp animated"
              data-wow-delay="600ms"
              style={{
                visibility: "visible",
                animationDelay: "600ms",
                animationName: "fadeInUp"
              }}
            >
              A leading voice in low-income binso policy and <br /> the nation’s
              largest nonprofit business installer
            </div>
            <a
              href="page-about.html"
              className="theme-btn btn-style-one dark-bg wow fadeInUp animated"
              data-wow-delay="900ms"
              style={{
                visibility: "visible",
                animationDelay: "900ms",
                animationName: "fadeInUp"
              }}
            >
              <span className="btn-title">Explore More </span>
            </a>
          </div>
        </div>
      </div>
    </div>
    </section>  
  )
}

export default MainSlider
