import React from 'react'
import useJsonParseData from '../hooks/useJsonParseData'

import './styles/Projects.css'

const Projects = () => {

  const { data } = useJsonParseData('https://api.github.com/users/jriveraddiaz/repos')

  return (
    <>
      <div className='projects-container'>
        <div className='project-content'>
          <div className='project-image'>
            image
          </div >
          <div className="project-title">
            title
          </div>
          <div className="project-decription">
            description
          </div>
        </div>


        <div className='project-content'>
          <div className='project-image'>
            image
          </div >
          <div className="project-title">
            title
          </div>
          <div className="project-decription">
            description
          </div>
        </div>

        
        <div className='project-content'>
          <div className='project-image'>
            image
          </div >
          <div className="project-title">
            title
          </div>
          <div className="project-decription">
            description
          </div>
        </div>

        
        <div className='project-content'>
          <div className='project-image'>
            image
          </div >
          <div className="project-title">
            title
          </div>
          <div className="project-decription">
            description
          </div>
        </div>

        <div className='project-content'>
          <div className='project-image'>
            image
          </div >
          <div className="project-title">
            title
          </div>
          <div className="project-decription">
            description
          </div>
        </div>
        
        <div className='project-content'>
          <div className='project-image'>
            image
          </div >
          <div className="project-title">
            title
          </div>
          <div className="project-decription">
            description
          </div>
        </div>

        <div className='project-content'>
          <div className='project-image'>
            image
          </div >
          <div className="project-title">
            title
          </div>
          <div className="project-decription">
            description
          </div>
        </div>

        <div className='project-content'>
          <div className='project-image'>
            image
          </div >
          <div className="project-title">
            title
          </div>
          <div className="project-decription">
            description
          </div>
        </div>

        <div className='project-content'>
          <div className='project-image'>
            image
          </div >
          <div className="project-title">
            title
          </div>
          <div className="project-decription">
            description
          </div>
        </div>

        <div className='project-content'>
          <div className='project-image'>
            image
          </div >
          <div className="project-title">
            title
          </div>
          <div className="project-decription">
            description
          </div>
        </div>

        <div className='project-content'>
          <div className='project-image'>
            image
          </div >
          <div className="project-title">
            title
          </div>
          <div className="project-decription">
            description
          </div>
        </div>
        
        <div className='project-content'>
          <div className='project-image'>
            image
          </div >
          <div className="project-title">
            title
          </div>
          <div className="project-decription">
            description
          </div>
        </div>

        <div className='project-content'>
          <div className='project-image'>
            image
          </div >
          <div className="project-title">
            title
          </div>
          <div className="project-decription">
            description
          </div>
        </div>
        
        <div className='project-content'>
          <div className='project-image'>
            image
          </div >
          <div className="project-title">
            title
          </div>
          <div className="project-decription">
            description
          </div>
        </div>

        <div className='project-content'>
          <div className='project-image'>
            image
          </div >
          <div className="project-title">
            title
          </div>
          <div className="project-decription">
            description
          </div>
        </div>
       
      </div>
    </>
  )
}

export default Projects