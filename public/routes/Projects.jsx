import React from 'react'
import useJsonParseData from '../hooks/useJsonParseData'


const Projects = () => {

const {data} =  useJsonParseData('https://api.github.com/users/jriveraddiaz/repos')

console.log(data);

return (
    <>

    </>
  )
}

export default Projects