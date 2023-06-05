import React from 'react'

import useJsonParseData from '../hooks/useJsonParseData'
import PostsShowRooM from '../components/posts-show-room/PostsShowRooM';

import '../components/posts-show-room/styles/posts-show-room.css'

const Posts = () => {

  const { data, loading } = useJsonParseData('https://dev.to/api/articles?username=jriveraddiaz')

  return (
    <>
      <div className="projects-container" >
        <PostsShowRooM data={data} loading={loading} />
      </div >
    </>
  )
}

export default Posts