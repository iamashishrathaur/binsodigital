import './App.css'
import './custom.css'
import Home from './pages/Home'
import Pricing from './pages/Pricing'
import { createBrowserRouter , RouterProvider } from 'react-router-dom'
import NotFound from './pages/NotFound'
import Services from './pages/Services'
import ServiceDetails from './pages/ServiceDetails'

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
