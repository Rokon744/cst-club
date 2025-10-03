import React from 'react'
import { Routes, Route } from 'react-router'
import BaseLayout from '../layouts/BaseLayout' 
import Home from '../pages/public/Home'
import Notices from '../pages/public/Notices'
import Blogs from '../pages/public/Blogs'
import Events from '../pages/public/Events'
import Executives from '../pages/public/Executives'
import Projects from '../pages/public/Projects'

const AppRoutes = () => {
  return (
    <>
        <Routes>
            <Route path="/" element={<BaseLayout />}>
                <Route index element={<Home />} />
                <Route path="notices" element={<Notices />} />
                <Route path="blogs" element={<Blogs />} />
                <Route path="events" element={<Events />} />
                <Route path="executives" element={<Executives />} />  
                <Route path="projects" element={<Projects />} />  
            </Route> 
        </Routes> 
    </>
  )
}

export default AppRoutes