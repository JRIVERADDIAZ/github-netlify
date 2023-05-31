import React, { Suspense, lazy } from 'react'
import { createBrowserRouter } from 'react-router-dom'

import Home from '../routes/Home'
const Contact = lazy(() => delayForDemo(import('../routes/Contact')))
const About = lazy(() => delayForDemo(import('../routes/About')))
const Projects = lazy(() => delayForDemo(import('../routes/Projects')))
const Resume = lazy(() => delayForDemo(import('../routes/Resume')))
const Post = lazy(() => delayForDemo(import('../routes/Posts')))

import RouterError from '../routes/RouterError'
import Loading from '../routes/Loading'

import LayoutPublic from '../LayoutPublic'

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
                    element: (
                        <Suspense fallback={<Loading />}  >
                            <Home />
                        </Suspense>)
                },
                {
                    path: "/about",
                    element: (
                        <Suspense fallback={<Loading />}  >
                            <About />
                        </Suspense>)
                },
                {
                    path: "/projects",
                    element: (
                        <Suspense fallback={<Loading />}  >
                            <Projects />
                        </Suspense>)
                },
                {
                    path: "/contact",
                    element: (
                        <Suspense fallback={<Loading />}  >
                            <Contact />
                        </Suspense>)
                },
                {
                    path: "/posts",
                    element: (
                        <Suspense fallback={<Loading />}  >
                            <Post />
                        </Suspense>)
                },
                {
                    path: "/resume",
                    element: (
                        <Suspense fallback={<Loading />}  >
                            <Resume />
                        </Suspense>)
                },
                ]
            }
        ]
    }
])

export default router

async function delayForDemo(promise) {
    return new Promise(resolve => {
        setTimeout(resolve, 2000);
    }).then(() => promise);
}