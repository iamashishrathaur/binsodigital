import aboutImage from '../assets/images/about4-1.webp'

const AboutSection2 = () => {
  return (
    <section className="about-section-four">
  <div className="auto-container">
    <div className="row">
      <div className="content-column col-xl-6 order-2">
        <div className="inner-column">
          <div className="sec-title">
            <span className="sub-title">ABOUT COMPANY</span>
            <h2>Expert of Software Programming</h2>
            <div className="text">
              Lorem ipsum dolor sit amet, consectetur notted adipisicing elit
              sed do eiusmod tempor incididunt ut labore et simply free text
              dolore magna aliqua lonm andhn personal touch
            </div>
          </div>
          <div className="row">
            <div className="info-box col-md-12">
              <div className="inner">
                <i className="icon flaticon-repair" />
                <h6 className="title">Quality web designing</h6>
                <div className="text">
                  It is a long established fact that a reader will be distracted
                  the readable contentk layout.
                </div>
              </div>
            </div>
            <div className="info-box col-md-12">
              <div className="inner">
                <i className="icon flaticon-search-engine" />
                <h6 className="title">SEO &amp; content Writing</h6>
                <div className="text">
                  It is a long established fact that a reader will be distracted
                  the readable contentk layout.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="image-column col-xl-6">
        <div className="inner-column">
          <span className="icon-dots-3 bounce-x" />
          <div className="count-box counted">
            <div className="inner">
              <h2 className="title">10k+</h2>
              <p className="text">Clients</p>
            </div>
          </div>
          <div className="image-box">
            <figure
              className="image overlay-anim wow fadeInUp animated"
              style={{ visibility: "visible", animationName: "fadeInUp" }}
            >
              <img src={aboutImage} alt="" />
            </figure>
          </div>
          <div className="exp-box bounce-y">
            <div className="inner">
              <h2 className="title">25</h2>
              <p className="text">Years Of experience</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  )
}

export default AboutSection2
