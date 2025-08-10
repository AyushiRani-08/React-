
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import  Navbar from './assets/components/navbar'
import Home  from './assets/components/Home'
import ViewPaste  from './assets/components/viewPaste'
import Paste from './assets/components/Paste'
const router=createBrowserRouter(
  [
    {
      path:"/",
      element:<div>
        <Navbar/>
        <Home/>
      </div>
    },
    {
      path:"/pastes",
      element:<div>
        <Navbar/>
        <Paste/>
      </div>
    },
    {
      path:"/pastes/:id",
      element:<div>
        <Navbar/>
        <ViewPaste/>
      </div>
    }
  ]
)
function App() {
  

  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
