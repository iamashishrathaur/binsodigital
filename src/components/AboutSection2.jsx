import { Search } from 'react-flaticons'
import aboutImage from '../assets/images/about4-1.webp'
import { MdCarRepair, MdDesignServices, MdHomeRepairService } from 'react-icons/md'
import { RiStockLine } from 'react-icons/ri'
import { PiRanking, PiRankingLight, PiRankingThin } from 'react-icons/pi'
import { CgIfDesign, CgWebsite } from 'react-icons/cg'

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
            An expert in software programming demonstrates mastery across multiple programming languages and frameworks, adept at designing, developing, and optimizing complex applications. Their expertise spans frontend and backend development, including databases, APIs, and user interfaces, with a focus on delivering efficient and maintainable code.
            </div>
          </div>
          <div className="row">
            <div className="info-box col-md-12">
              <div className="inner">
                <i className="icon flaticon-repair" />
                {/* <i className='icon'></i> */}
                {/* <MdHomeRepairService className='icon'/> */}
                <CgIfDesign className='icon'/>
                <h6 className="title">Quality web designing</h6>
                <div className="text">
                 Expert in crafting high-quality web designs that combine aesthetics with usability, ensuring an engaging user experience.
                </div>
              </div>
            </div>
            <div className="info-box col-md-12">
              <div className="inner">
                <PiRankingLight className='icon'/>
                <i className="icon flaticon-search-engine" />
                <h6 className="title">SEO &amp; content Writing</h6>
                 <div className="text">
                 SEO ensures that web content is optimized with relevant keywords, meta tags, and backlinks to improve search engine rankings
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
