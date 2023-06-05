import React from 'react'
import './styles/resume.css'

const Resume = () => {
  return (
    <>
      <div className='resume-container'>
       
        <div className='resume-cards-container'>
          <div className='resume-info'>
            <p> Empresa </p>
            <p> Cargo </p>
            <p> Fecha </p>
          </div>
          <div className='resume-descripcion'>
            <p>job description</p>
          </div>
        </div>

        <div className='resume-cards-container'>
          <div className='resume-info'>
            <p> Empresa </p>
            <p> Cargo </p>
            <p> Fecha </p>
          </div>
          <div className='resume-descripcion'>
            <p>job description</p>
          </div>
        </div>

        <div className='resume-cards-container'>
          <div className='resume-info'>
            <p> Empresa </p>
            <p> Cargo </p>
            <p> Fecha </p>
          </div>
          <div className='resume-descripcion'>
            <p>job description</p>
          </div>
        </div>

      </div>
    </>
  )
}

export default Resume