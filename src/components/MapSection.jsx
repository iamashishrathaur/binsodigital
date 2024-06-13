import React from 'react'

const MapSection = () => {
  return (
    <section className="map-section">
      <iframe
        className="map"
        src="https://maps.google.com/maps?width=100%25&height=600&hl=en&q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&t=&z=14&ie=UTF8&iwloc=B&output=embed"
      />
    </section>
  )
}

export default MapSection
