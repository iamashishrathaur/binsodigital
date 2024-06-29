import React from 'react'

import project1 from '../assets/images/project-details.jpg'
import ProjectDetailsSection from '../components/ProjectDetailsSection'
import PageTittle from '../components/PageTittle'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ProjectSection3 from '../components/ProjectSection3'

const ProjectDetails = () => {
  return (
    <>
    <Header/>
    <PageTittle name={'Project Details'}/>
    <ProjectDetailsSection/>
    <ProjectSection3/>
    <Footer/>
    </>

  )
}

export default ProjectDetails