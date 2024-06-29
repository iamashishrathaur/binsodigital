import React from 'react'
import project1 from '../assets/images/project-details.jpg'

const ProjectDetailsSection = () => {
  return (
    <section className="project-details">
    <div className="container">
      <div className="row">
        <div className="col-xl-12">
          <div className="project-details__top">
            <div className="project-details__img">
              {" "}
              <img src={project1} alt="" />{" "}
            </div>
          </div>
        </div>
      </div>
      <div className="project-details__content">
        <div className="row">
          <div className="col-xl-8 col-lg-8">
            <div className="project-details__content-left">
              <h3 className="mb-4">Here to Know About This Project</h3>
              <p className="">
                Lorem ipsum, dolor sit amet consectetur, adipisicing elit.
                Asperiores, repellat aliquid. Est corrupti officiis dignissimos
                deserunt sunt minima iusto quia saepe tempora consectetur dolor
                deleniti voluptatum et, eos vitae pariatur molestiae odit quos
                enim voluptas nobis ullam voluptatem cum iste. Dolore modi, animi
                optio, dignissimos delectus pariatur similique harum eos.{" "}
              </p>
              <p className="mb-5">
                Beyond more stoic this along goodness hey this this wow manatee
                mongoose one as since a far flustered impressive manifest Lorem
                ipsum dolor sit amet, consectetur adipisicing elit. Nostrum illo
                ea ad, nam quisquam optio vel tempora, minus placeat, ut nisi quam
                quos laboriosam eos quibusdam cum atque suscipit quod dignissimos
                magni doloribus facere eius soluta possimus. Officiis, autem
                similique sequi labore aliquid corporis illo omnis voluptate optio
                possimus doloremque, error reiciendis delectus ex tempore,
                architecto eaque, inventore nihil pariatur quibusdam facere
                reprehenderit? Doloribus deleniti sapiente, dicta, dolorem unde
                deserunt quisquam. Dolore consequuntur reiciendis corporis
                perspiciatis quam fuga magnam molestiae minima culpa ab beatae vel
                itaque cumque et adipisci autem nisi qui esse in, deserunt numquam
                hic? Et, eligendi, assumenda.
              </p>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4">
            <div className="project-details__content-right">
              <div className="project-details__details-box">
                <div className="project-details__bg-shape"> </div>
                <ul className="list-unstyled project-details__details-list">
                  <li>
                    <p className="project-details__client">Date</p>
                    <h4 className="project-details__name">10 January, 2024</h4>
                  </li>
                  <li>
                    <p className="project-details__client">Client</p>
                    <h4 className="project-details__name">Kodesolution Ltd</h4>
                  </li>
                  <li>
                    <p className="project-details__client">Website</p>
                    <h4 className="project-details__name">www.domain.com</h4>
                  </li>
                  <li>
                    <p className="project-details__client">Location</p>
                    <h4 className="project-details__name">New York, USA</h4>
                  </li>
                  <li>
                    <p className="project-details__client">Value</p>
                    <h4 className="project-details__name">$12,367</h4>
                  </li>
                  <li>
                    <div className="project-details__social">
                      {" "}
                      <a href="#">
                        <i className="fab fa-twitter" />
                      </a>{" "}
                      <a href="#">
                        <i className="fab fa-facebook" />
                      </a>{" "}
                      <a href="#">
                        <i className="fab fa-pinterest-p" />
                      </a>{" "}
                      <a href="#">
                        <i className="fab fa-instagram" />
                      </a>{" "}
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-xl-12">
          <div className="project-details__pagination-box">
            <ul className="project-details__pagination list-unstyled clearfix">
              <li className="next">
                <div className="icon">
                  {" "}
                  <a href="#" aria-label="Previous">
                    {/* <i className="lnr lnr-icon-arrow-left" /> */}
                    <i className="fa fa-arrow-left"></i>
                  </a>{" "}
                </div>
                <div className="content">Previous</div>
              </li>
              <li className="count">
                <a href="#" />
              </li>
              <li className="count">
                <a href="#" />
              </li>
              <li className="count">
                <a href="#" />
              </li>
              <li className="count">
                <a href="#" />
              </li>
              <li className="previous">
                <div className="content">Next</div>
                <div className="icon">
                  {" "}
                  <a href="#" aria-label="Previous">
                    {/* <i className="lnr lnr-icon-arrow-right" /> */}
                    <i className="fa fa-arrow-right"></i>
                  </a>{" "}
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
      </section>
  )
}

export default ProjectDetailsSection
