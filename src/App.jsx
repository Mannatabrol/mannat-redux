
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Login from './components/login'
import Signup from './components/Signup'
import Home from './components/Home'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'

function App() {
  const router = createBrowserRouter([
    {
      path: "/Home",
      element: <><Navbar/><Home/>
      <Footer /></>
    },
    {
      path: "/Login",
      element:<> <Navbar/><Login/>
      <Footer /></>
    },
    {
      path: "/Signup",
      element:  <><Navbar/><Signup/>
      <Footer /></>
    }
      ])

  return (
    <>
    <RouterProvider router={router}/>
    </>
 
  )
 
  }

export default App