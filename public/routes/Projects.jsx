import React from 'react'
import useJsonParseData from '../hooks/useJsonParseData'

import './styles/Projects.css'
import CardsShowRoom from '../components/cards-show-room/CardsShowRoom'

const Projects = () => {

  const { data } = useJsonParseData('https://api.github.com/users/jriveraddiaz/repos')
  
  return (
    <>
      <CardsShowRoom data={data} />
    </>
  )
}

export default Projects