import React from 'react'

import { Link } from "react-router-dom";
import './styles/project-banner-styles.css'

const ProjectBanner = ({ name, homepage, repoUrl }) => {
console.log(homepage);
    return (
        <>

            <p className="project-title">{name}</p>
            <Link to={repoUrl} target="_blank" >
                <img src="" alt="code-icon" />
            </Link>
            <Link to={homepage} target="_blank">
                <img src="" alt="production-app-icon" />
            </Link>

        </>
    )
}

export default ProjectBanner