import React from 'react'

const FileBtn = () => {
  return (
    <div className="sidebar-widget service-sidebar-single mt-4">
              <div
                className="service-sidebar-single-btn wow fadeInUp animated"
                data-wow-delay="0.5s"
                data-wow-duration="1200m"
                style={{
                  visibility: "visible",
                  animationDelay: "0.5s",
                  animationName: "fadeInUp"
                }}
              >
                <a href="#" className="theme-btn btn-style-one d-grid">
                  <span className="btn-title">
                    <span className="fas fa-file-pdf" /> download pdf file
                  </span>
                </a>
              </div>
            </div>
  )
}

export default FileBtn
