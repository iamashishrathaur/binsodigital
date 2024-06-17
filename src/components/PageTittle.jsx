import pageTitle from '../assets/images/page-title.jpg'

const PageTittle = ({name}) => {
  return (
    <section
    className="page-title tp-dottedoverlay on"
    style={{ backgroundImage: `url(${pageTitle})` }}
  >
     {/* <div className='tp-dottedoverlay on'></div> */}
    <div className="auto-container">
      <div className="title-outer">
        <h1 className="title" style={{zIndex:'4'}}> {name}</h1>
        <ul className="page-breadcrumb" style={{zIndex:'4'}}>
          <li>
            <a href="index.html">Home</a>
          </li>
          <li>
            <a href="#">Pages</a>
          </li>
          <li>{name}</li>
        </ul>
      </div>
    </div>
  </section>
  )
}

export default PageTittle