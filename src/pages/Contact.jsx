import React from 'react'
import PageTittle from '../components/PageTittle'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ContactForm from '../components/ContactForm'
import ContactDetails from '../components/ContactDetails'

const Contact = () => {
  return (
    <div className='page-wrapper'>
     <Header/>
     <PageTittle name={'Contact Us'}/>
     <ContactDetails/>
      <ContactForm/>
     <Footer/>
    </div>
  )
}

export default Contact
