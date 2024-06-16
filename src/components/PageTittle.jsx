import pageTitle from '../assets/images/page-title.jpg'

const PageTittle = () => {
  return (
    <section
    className="page-title"
    style={{ backgroundImage: `url(${pageTitle})` }}
  >
    <div className="auto-container">
      <div className="title-outer">
        <h1 className="title">Pricing</h1>
        <ul className="page-breadcrumb">
          <li>
            <a href="index.html">Home</a>
          </li>
          <li>
            <a href="#">Pages</a>
          </li>
          <li>Pricing</li>
        </ul>
      </div>
    </div>
  </section>
  )
}

export default PageTittle