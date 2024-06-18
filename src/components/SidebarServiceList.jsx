import React from 'react'

const SidebarServiceList = () => {
  return (
    <div className="sidebar-service-list">
    <ul>
      <li>
        <a href="page-service-details.html" className="current">
          <i className="fas fa-angle-right" />
          <span>Digital Agency</span>
        </a>
      </li>
      <li className="current">
        <a href="page-service-details.html">
          <i className="fas fa-angle-right" />
          <span>Web designing</span>
        </a>
      </li>
      <li>
        <a href="page-service-details.html">
          <i className="fas fa-angle-right" />
          <span>Web development</span>
        </a>
      </li>
      <li>
        <a href="page-service-details.html">
          <i className="fas fa-angle-right" />
          <span>Web application</span>
        </a>
      </li>
      <li>
        <a href="page-service-details.html">
          <i className="fas fa-angle-right" />
          <span>Digital Marketing</span>
        </a>
      </li>
      <li>
        <a href="page-service-details.html">
          <i className="fas fa-angle-right" />
          <span>App Development</span>
        </a>
      </li>
    </ul>
  </div>
  )
}

export default SidebarServiceList
