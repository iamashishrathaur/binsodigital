import './App.css'
import './custom.css'
import Home from './pages/Home'
import Pricing from './pages/Pricing'
import { createBrowserRouter , RouterProvider } from 'react-router-dom'
import NotFound from './pages/NotFound'
import Services from './pages/Services'
import ServiceDetails from './pages/ServiceDetails'
import Contact from './pages/Contact'
import Projects from './pages/Projects'
import About from './pages/About'

function App() {

  const routes = createBrowserRouter([
    {
      path:'/',
      element:<Home/>
    },
    {
      path:'/pricing',
      element:<Pricing/>
    },
    {
      path:'/services',
      element:<Services/>
    },
    {
      path:'/service-details',
      element:<ServiceDetails/>
    },
    {
      path:'/contact',
      element:<Contact/>
    },
    {
      path:'/projects',
      element:<Projects/>
    },
    {
      path:'/about',
      element:<About/>
    },
    {
      path:'*',
      element:<NotFound/>
    }
  ])

  return (
    <>  
    <RouterProvider router={routes}/>
    </>
  )
}

export default App
