import Footer from "../components/Footer"
import Header from "../components/Header"
import PageTittle from "../components/PageTittle"
import ServiceList from "../components/ServiceList"

const Services = () => {
  return (
    <>
    <Header/>
    <PageTittle name={'Services'}/>
     <ServiceList/>
    <Footer/>
    </>
  )
}

export default Services