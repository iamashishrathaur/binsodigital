import Footer from "../components/Footer"
import Header from "../components/Header"
import PageTittle from "../components/PageTittle"

const Projects = () => {
  return (
    <>
    <Header/>
      <PageTittle name={'Projects'}/>


      <section className="projects-section">
        <div className="container">
        <div className="sec-title text-center">
            <span className="sub-title">Our Projects</span>
            <h2>
            Learn More About Our <br />Complete Projects
            </h2>
            </div>
        </div>
      </section>

              

      <Footer/>
    </>
  )
}

export default Projects
