import { BiMedal } from "react-icons/bi"
import { FaRegThumbsUp, FaThumbsUp } from "react-icons/fa6"
import { GiTrophyCup } from "react-icons/gi"
import { IoThumbsDownOutline, IoThumbsUpOutline } from "react-icons/io5"
import { LuMedal } from "react-icons/lu"
import { PiMedalThin, PiThumbsUpFill, PiThumbsUpLight, PiThumbsUpThin } from "react-icons/pi"
import { TfiHummer, TfiThumbUp } from "react-icons/tfi"

const FeaturesSection2 = () => {
  return (
    <section className="features-section">
  <div className="auto-container">
    <div className="outer-box">
      <div className="row">
        <div className="feature-block col-lg-4 col-md-6">
          <div className="inner-box ">
            <div className="icon-box">
              <span className="count">01</span>
              <GiTrophyCup color="white" className="icon"/>
              {/* <i className="icon flaticon-trophy" /> */}
            </div>
            <div className="content-box">
              <h5 className="title">Award winning agency</h5>
              <div className="text">
              Excellence and innovation in delivering top-notch services and solutions.
              </div>
            </div>
          </div>
        </div>
        <div className="feature-block col-lg-4 col-md-6">
          <div className="inner-box ">
            <div className="icon-box">
              <span className="count">02</span>
              <PiMedalThin color="white" className="icon"/>
              {/* <i className="icon flaticon-medal" /> */}
            </div>
            <div className="content-box">
              <h5 className="title">Best quality work</h5>
              <div className="text">
              Exceptional work with ensuring client satisfaction and outstanding results.
              </div>
            </div>
          </div>
        </div>
        <div className="feature-block col-lg-4 col-md-6">
          <div className="inner-box ">
            <div className="icon-box">
              <span className="count">03</span>
              
              <i className="icon flaticon-satisfaction" />
              <TfiThumbUp className="icon" color="white"/>
            </div>
            <div className="content-box">
              <h5 className="title">Satisfaction guarantee</h5>
              <div className="text">
              Customer satisfaction with a guarantee of high-quality service.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom-text">
        we Envision &amp; Transofrm Your Business.
      </div>
    </div>
  </div>
</section>

  )
}

export default FeaturesSection2