import React from 'react'
import bgTeam1 from '../assets/images/bg-team1.jpg'
import Team1 from '../assets/images/team1-1.jpg'
import Team2 from '../assets/images/team1-2.jpg'
import Team3 from '../assets/images/team1-3.jpg'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const TeamSection = () => {


    const item =[
        <div key={'team1'} className="team-block" style={{marginRight:'30px'}}>
        <div className="inner-box">
          <div className="image-box">
            <figure className="image">
              <a href="page-team-details.html">
                <img src={Team3} alt="" />
              </a>
            </figure>
            <a
              href="page-team-details.html"
              className="share-icon fa fa-share-alt"
            />
            <div className="social-links">
              <a href="#">
                <i className="fab fa-twitter" />
              </a>
              <a href="#">
                <i className="fab fa-facebook" />
              </a>
              <a href="#">
                <i className="fab fa-pinterest-p" />
              </a>
              <a href="#">
                <i className="fab fa-instagram" />
              </a>
            </div>
          </div>
          <div className="info-box">
            <h4 className="name">
              <a href="page-team-details.html">Mike Hardson</a>
            </h4>
            <span className="designation">Designer</span>
          </div>
        </div>
      </div>,
      <div key={'team2'} className="team-block" style={{marginRight:'30px'}}>
        <div className="inner-box">
          <div className="image-box">
            <figure className="image">
              <a href="page-team-details.html">
                <img src={Team2} alt="" />
              </a>
            </figure>
            <a
              href="page-team-details.html"
              className="share-icon fa fa-share-alt"
            />
            <div className="social-links">
              <a href="#">
                <i className="fab fa-twitter" />
              </a>
              <a href="#">
                <i className="fab fa-facebook" />
              </a>
              <a href="#">
                <i className="fab fa-pinterest-p" />
              </a>
              <a href="#">
                <i className="fab fa-instagram" />
              </a>
            </div>
          </div>
          <div className="info-box">
            <h4 className="name">
              <a href="page-team-details.html">Mike Hardson</a>
            </h4>
            <span className="designation">Designer</span>
          </div>
        </div>
      </div>,
      <div key={'team3'} className="team-block" style={{marginRight:'30px'}}>
        <div className="inner-box">
          <div className="image-box">
            <figure className="image">
              <a href="page-team-details.html">
                <img src={Team1} alt="" />
              </a>
            </figure>
            <a
              href="page-team-details.html"
              className="share-icon fa fa-share-alt"
            />
            <div className="social-links">
              <a href="#">
                <i className="fab fa-twitter" />
              </a>
              <a href="#">
                <i className="fab fa-facebook" />
              </a>
              <a href="#">
                <i className="fab fa-pinterest-p" />
              </a>
              <a href="#">
                <i className="fab fa-instagram" />
              </a>
            </div>
          </div>
          <div className="info-box">
            <h4 className="name">
              <a href="page-team-details.html">Mike Hardson</a>
            </h4>
            <span className="designation">Designer</span>
          </div>
        </div>
      </div>
    ]
  return (
    <div className="team-section">
      <div
        className="bg bg-image"
        style={{ backgroundImage: `url(${bgTeam1})` }}
      />
      <div className="auto-container">
        <div className="sec-title text-center">
          <span className="sub-title">professional people</span>
          <h2 className="title mb-0">
            Meet expert<span> Team</span>
          </h2>
        </div>
        <div className="carousel-outer">
          <div className="team-carousel owl-carousel owl-theme default-dots">
          <AliceCarousel
          items={item}
          infinite
          touchTracking
          mouseTracking
          disableButtonsControls
          disableDotsControls
          responsive={{0:{items:1},768:{items:2}, 1200:{items:3}}}
          />
           
          </div>
        </div>
      </div>
    </div>
  )
}

export default TeamSection
