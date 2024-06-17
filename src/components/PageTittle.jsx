import pageTitle from '../assets/images/page-title.jpg'

const PageTittle = ({name}) => {
  return (
    <section
    className="page-title"
    style={{ backgroundImage: `url(${pageTitle})` }}
  >
    <div className="auto-container">
      <div className="title-outer">
        <h1 className="title">{name}</h1>
        <ul className="page-breadcrumb">
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