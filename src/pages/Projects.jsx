import { useState } from "react";
import Footer from "../components/Footer"
import Header from "../components/Header"
import PageTittle from "../components/PageTittle"
import ProjectsComponents from "../components/ProjectsComponents";

const Projects = () => {
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: 'Project 1',
      description: 'Description of Project 1',
      techStack: ['React', 'Node.js', 'Express'],
    },
    {
      id: 2,
      title: 'Project 2',
      description: 'Description of Project 2',
      techStack: ['Vue.js', 'Firebase'],
    },
    // Add more projects as needed
  ]);
  return (
    <div className='page-wrapper'>
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
            <div className="row g-3">

             <ProjectsComponents />
             <ProjectsComponents/>
             <ProjectsComponents/>
            </div>
            
        </div>
      </section>

              

      <Footer/>
    </div>
  )
}

export default Projects
