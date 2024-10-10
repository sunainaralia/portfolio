import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HomePage } from './Pages/HomePage.jsx'
import { Resume } from './Pages/Resume.jsx'
import { Experience } from './Components/Experience.jsx'
import { Education } from './Components/Education.jsx'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Details } from './Components/Details.jsx'
let router = createBrowserRouter([
  {
    path: '/', element: <App />, children: [
      { path: '/', element: <HomePage /> },
      {
        path: 'resume/', element: <Resume />, children: [
          { path: '', element: <Experience /> },
          { path: 'education/', element: <Education /> },
          {path:'about/',element:<Details/>
          }
        ]
      }
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
