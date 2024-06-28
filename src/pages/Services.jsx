import Footer from "../components/Footer"
import Header from "../components/Header"
import PageTittle from "../components/PageTittle"
import ServiceList from "../components/ServiceList"

const Services = () => {
  return (
    <div className='page-wrapper'>
    <Header/>
    <PageTittle name={'Services'}/>
     <ServiceList/>
    <Footer/>
    </div>
  )
}

export default Services