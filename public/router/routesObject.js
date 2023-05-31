import { lazy } from 'react'

const About = lazy(() => delayForDemo('../routes/About'))
const Projects = lazy(() => delayForDemo('../routes/Projects'))
const Resume = lazy(() => delayForDemo('../routes/Resume'))
const Post = lazy(() => delayForDemo('../routes/Posts'))

const routes = [
    {
        path: "/about",
        route: About,
    },
    {
        path: "/projects",
        route: Projects,
    },
    {
        path: "/resume",
        route: Resume,
    },
    {
        path: "/posts",
        route: Post,
    }

]

function delayForDemo(promise) {
    return new Promise(resolve => {
        setTimeout(resolve, 2000);
    }).then(() => promise);
}

export default routes