import React from 'react'
import { createBrowserRouter } from 'react-router-dom'

import Home from '../routes/Home'
import LayoutPublic from '../LayoutPublic'

import About from '../routes/About'
import Projects from '../routes/Projects'
import Posts from '../routes/Posts'
import Contact from '../routes/Contact'
import Resume from '../routes/Resume'

import RouterError from '../routes/RouterError'

const router = createBrowserRouter([
    {
        path: "/",
        element: <LayoutPublic />,
        errorElement: <RouterError />,
        children: [
            {
                errorElement: <RouterError />,
                children: [{
                    path: "/",
                    index: true,
                    element: <Home />
                },
                {
                    path: "/about",
                    element: <About />
                },
                {
                    path: "/projects",
                    element: <Projects />
                },
                {
                    path: "/contact",
                    element: <Contact />
                },
                {
                    path: "/posts",
                    element: <Posts />
                },
                {
                    path: "/resume",
                    element: <Resume />
                },
                ]
            }
        ]
    }
])

export default router