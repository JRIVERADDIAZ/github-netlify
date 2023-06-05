import React from 'react'

import './styles/posts-show-room.css'


import Loading from '../loader/Loading'
import PostsBanner from '../posts-banner/PostsBanner';

const PostsShowRooM = ({ data, loading }) => {
  console.log(loading, data);
  return (
    <>
      {

        !loading ?

          <Loading /> :

          data.map((item) => (

            <div key={item.id} className="project-content" >
              <div className="project-image-container">
                <img className='project-image' src={item.social_image} />
              </div>
              <div key={item.id} className='project-bar-container'>
                <PostsBanner
                  title={item.title}
                  url={item.url}
                />
              </div>
              <p className="project-description">{item.description}</p>
            </div>

          )
          )

      }
    </>
  )

}

export default PostsShowRooM