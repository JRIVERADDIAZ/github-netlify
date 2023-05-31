import React from 'react'
import { Link } from "react-router-dom"
import './styles/navbarMenu.css'
import Photo from '../components/photo/Photo'
import SocialMedia from '../components/socialmedia/SocialMedia'

const NavBar = () => {
    return (
        <>

            <div className='layered-color-menu-container'>
                <div className='photo-navbar-container'>
                    <Photo />
                </div>
                <div className='menu-container'>

                    <ul className='layered-color-menu'>
                        <li>
                            <Link className="link-element" to="/" >Home</Link>
                        </li>
                        <li>
                            <Link className="link-element" to="/about" >About</Link>
                        </li>
                        <li>
                            <Link className="link-element" to="/projects" >Projects</Link>
                        </li>
                        <li>
                            <Link className="link-element" to="/posts" >Posts</Link></li>
                        <li>
                            <Link className="link-element" to="/contact" > Contact </Link>
                        </li>
                        <li>
                            <Link className="link-element" to="/resume" >Resume</Link>
                        </li>
                    </ul>
                </div>

                <div className='socialmedia-navbar-container'>
                    <SocialMedia />
                </div>
            </div>

        </>
    )
}

export default NavBar