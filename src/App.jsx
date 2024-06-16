import './App.css'
import './custom.css'
import Footer from './components/Footer'
import Home from './pages/Home'
import Pricing from './pages/Pricing'
import { createBrowserRouter , RouterProvider } from 'react-router-dom'

function App() {

  const routes = createBrowserRouter([
    {
      path:'/',
      element:<Home/>
    },
    {
      path:'/pricing',
      element:<Pricing/>
    }
  ])

  return (
    <>
    <RouterProvider router={routes}/>
     <Footer/>
    </>
  )
}

export default App
