import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Layout from './Layout.jsx'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import User from './components/User.jsx'
import Github from './components/Github.jsx'
import GithubOld from './components/GithubOld.jsx'
import NotFound from './components/NotFound.jsx'
import { Route, RouterProvider, createRoutesFromElements, createBrowserRouter } from 'react-router-dom'
import githubLoader from './githubLoader.js'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='*' element={<NotFound />} />
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='user/:name' element={<User />} />
      <Route path='githubold' element={<GithubOld />} />
      <Route
      loader={githubLoader}
      path='github' element={<Github />} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
