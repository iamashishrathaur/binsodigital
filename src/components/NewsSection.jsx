import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import News1 from '../assets/images/news-1.jpg'
import News2 from '../assets/images/news-2.jpg'
import News3 from '../assets/images/news-3.jpg'
const NewsSection = () => {
const items =[
    <div key={'news1'} className="news-block" style={{marginRight:'30px'}}>
    <div className="inner-box">
      <div className="image-box">
        <figure className="image">
          <a href="news-details.html">
            <img src={News1} alt="" />
          </a>
        </figure>
        <div className="date">
          <span>20</span> OCT
        </div>
      </div>
      <div className="content-box">
        <ul className="post-info">
          <li>
            <i className="fa fa-user" /> by Admin
          </li>
          <li>
            <i className="fa fa-tag" /> Technology
          </li>
        </ul>
        <h4 className="title">
          <a href="news-details.html">
            Professional technology information &amp; solutions are
            just like…
          </a>
        </h4>
      </div>
      <div className="bottom-box">
        <a href="news-details.html" className="read-more">
          Read More <i className="fa fa-long-arrow-alt-right" />
        </a>
        <div className="comments">
          <i className="fa fa-comments" /> 02
        </div>
      </div>
    </div>
  </div>,
  <div key={'news2'} className="news-block" style={{marginRight:'30px'}}>
    <div className="inner-box">
      <div className="image-box">
        <figure className="image">
          <a href="news-details.html">
            <img src={News2} alt="" />
          </a>
        </figure>
        <div className="date">
          <span>24</span> OCT
        </div>
      </div>
      <div className="content-box">
        <ul className="post-info">
          <li>
            <i className="fa fa-user" /> by Admin
          </li>
          <li>
            <i className="fa fa-tag" /> Technology
          </li>
        </ul>
        <h4 className="title">
          <a href="news-details.html">
            Professional technology information &amp; solutions are
            just like…
          </a>
        </h4>
      </div>
      <div className="bottom-box">
        <a href="news-details.html" className="read-more">
          Read More <i className="fa fa-long-arrow-alt-right" />
        </a>
        <div className="comments">
          <i className="fa fa-comments" /> 02
        </div>
      </div>
    </div>
  </div>,
  <div key={'news3'} className="news-block" style={{marginRight:'30px'}}>
    <div className="inner-box">
      <div className="image-box">
        <figure className="image">
          <a href="news-details.html">
            <img src={News3} alt="" />
          </a>
        </figure>
        <div className="date">
          <span>28</span> OCT
        </div>
      </div>
      <div className="content-box">
        <ul className="post-info">
          <li>
            <i className="fa fa-user" /> by Admin
          </li>
          <li>
            <i className="fa fa-tag" /> Technology
          </li>
        </ul>
        <h4 className="title">
          <a href="news-details.html">
            Professional technology information &amp; solutions are
            just like…
          </a>
        </h4>
      </div>
      <div className="bottom-box">
        <a href="news-details.html" className="read-more">
          Read More <i className="fa fa-long-arrow-alt-right" />
        </a>
        <div className="comments">
          <i className="fa fa-comments" /> 02
        </div>
      </div>
    </div>
  </div>
]

  return (
    <section className="news-section">
    <div className="auto-container">
      <div className="sec-title text-center">
        <span className="sub-title">from the blog</span>
        <h2>
          News<span> &amp; </span>Articles
        </h2>
      </div>
      <div className="carousel-outer">
        <div className="news-carousel owl-carousel owl-theme default-dots">
          <AliceCarousel items={items}
          infinite
          touchTracking
          mouseTracking
          disableButtonsControls
          disableDotsControls
          responsive={{0:{items:1},768:{items:2}, 1200:{items:3}}}/>
        </div>
      </div>
    </div>
  </section>
  )
}

export default NewsSection
