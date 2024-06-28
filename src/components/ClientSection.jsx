import React, { useRef } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const ClientsSection = () => {
  // Array of client logos (image URLs)
  const clients = [
    "https://html.kodesolution.com/2024/binso-html/images/resource/client.png",
    "https://html.kodesolution.com/2024/binso-html/images/resource/client.png",
    "https://html.kodesolution.com/2024/binso-html/images/resource/client.png",
    "https://html.kodesolution.com/2024/binso-html/images/resource/client.png",
    "https://html.kodesolution.com/2024/binso-html/images/resource/client.png",
    "https://html.kodesolution.com/2024/binso-html/images/resource/client.png",
    "https://html.kodesolution.com/2024/binso-html/images/resource/client.png",
    "https://html.kodesolution.com/2024/binso-html/images/resource/client.png",
    "https://html.kodesolution.com/2024/binso-html/images/resource/client.png",
    // Add more client image URLs as needed
  ];

  const carouselRef = useRef(null);
  // Handle click on custom next button
  const handleNextClick = () => {
    if (carouselRef.current) {
      carouselRef.current.slideNext();
    }
  };

  // Handle click on custom prev button
  const handlePrevClick = () => {
    if (carouselRef.current) {
      carouselRef.current.slidePrev();
    }
  };

  // Responsive settings for the carousel
  const responsive = {
    0: { items: 1 },
    600: { items: 3 },
    1024: { items: 5 },
  };

  return (
<section className="clients-section">
  <div className="icon-lines-5" />
  <div className="auto-container">
    <div className="outer-box">
      <div className="sponsors-outer">
        <ul className="clients-carousel">
        <AliceCarousel 
              mouseTracking
              items={clients.map((client, index) => (
                <div className="slide-item" key={index}>
                  <a href="#">
                    <img alt={`Client ${index}`} src={client} />
                  </a>
                </div>
              ))}
              responsive={responsive}
              autoPlay
              infinite
              autoPlayInterval={5000}
              disableDotsControls={true}
              disableButtonsControls={true}
              ref={carouselRef}
              touchTracking
            />
          
          <div className="owl-nav">
            <div className="owl-prev" onClick={handlePrevClick}>
              <span className="fa fa-angle-left" />
            </div>
            <div className="owl-next" onClick={handleNextClick}>
              <span className="fa fa-angle-right" />
            </div>
          </div>
        </ul>
      </div>
    </div>
  </div>
</section> 
  );
};

export default ClientsSection;
