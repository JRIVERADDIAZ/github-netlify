import React from 'react'

import ProjectBanner from '../project-banner/ProjectBanner';

import './styles/cards-show-room.css'

const CardsShowRoom = (data) => {

    const information = data.data;
console.log(information[13]);
    return (
        <>
            <div className="projects-container" >
                {

                    Object.values(information).map((item) => (
                        <div className="project-content" key={item.id}>
                            {/* <div key={item.id} className="project-image"> */}
                                {/* <img src={item.avatar_url} alt={item.title} /> */}
                            {/* </div> */}
                            <div className='project-title-bar-container'>
                                <ProjectBanner
                                 name={item.name}
                                 repoUrl={item.html_url}
                                 homePage={item.homepage}
                                 />
                            </div>
                            <p className="project-description">{item.description}</p>
                        </div>
                    ))

                }

            </div>
        </>
    )
}

export default CardsShowRoom