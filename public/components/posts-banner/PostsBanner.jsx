import React from 'react'

import { Link } from "react-router-dom";
import './styles/banner-styles.css'
const PostsBanner = ({ title, url }) => {
    return (
        <>
            <h2 className="project-title">{title}</h2>
            <div>
                <Link to={url} target="_blank">
                    <img src="" alt="code-icon" />
                </Link>
            </div>
        </>
    )
}

export default PostsBanner