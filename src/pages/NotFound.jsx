import Not from '../assets/images/404.jpg'

const NotFound = () => {
  return (
    <section className="">
    <div className="auto-container">
      <div className="row">
        <div className="col-xl-12">
          <div className="error-page__inner">
            <div className="error-page__title-box">
              <img src={Not} alt="" />
              <h3 className="error-page__sub-title">Page not found!</h3>
            </div>
            <p className="error-page__text">
              Sorry we can&apos;t find that page! The page you are looking <br /> for
              was never existed.
            </p>
            {/* <form className="error-page__form">
              <div className="error-page__form-input">
                <input type="search" placeholder="Search here" />
                <button type="submit">
                  <i className="lnr lnr-icon-magnifier" />
                </button>
              </div>
            </form> */}
            {/* <a href="index.html" className="theme-btn btn-style-one shop-now">
              <span className="btn-title">Back to Home</span>
            </a> */}
          </div>
        </div>
      </div>
    </div>
  </section>
  
  )
}

export default NotFound