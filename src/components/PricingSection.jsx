import { FaCheck } from "react-icons/fa6";

const PricingSection = ({ priceProducts}) => {

  return (
    <section className="pricing-section style-two">
      <div className="sec-title text-center">
        <span className="sub-title">Pricing Plans</span>
        <h2>
          We are Offering Competitive <br />
          Prices for Our Clients
        </h2>
      </div>
      <br />
      <div className="bg" />

      <div className="auto-container">
        <div className="row">
          {priceProducts.map((product, index) => (
            <div key={index} className="pricing-block col-lg-4 col-md-6 col-sm-12">
              <div className="inner-box">
                <div className="icon-quotes" />
                <div className="plan-price">
                  <h2 className="title">
                    {product.price}<small>/m</small>
                  </h2>
                  <span className="plan">{product.plan}</span>
                </div>
                <div className="plan-list">
                  <ul className="user-links">
                    {product.features.map((feature, index) => (
                      <li key={index}>
                        <a href="#">
                          <FaCheck className="icon" />
                          {feature}
                        </a>
                      </li>
                    ))}
                  </ul>
                  <a href="page-price.html" className="theme-btn btn-style-one">
                    <span className="btn-title">get now</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
