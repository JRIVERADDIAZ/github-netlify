import React from 'react'
import useJsonParseData from '../hooks/useJsonParseData'

const Posts = () => {
  
  const { data } = useJsonParseData('https://dev.to/api/articles?username=jriveraddiaz')

  console.log(data);
  return (
    <>
      
      </>
  )
}

export default Posts