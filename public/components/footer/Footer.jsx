import React from 'react'

import './footer.css'

const Footer = () => {
    return (
        <>
        <div style={{backgroundColor: 'blue'}}>

            <div className='footer-container'>

                <div className='footer-social-media-bar'>
                    <ul>
                        <li>facebook</li>
                        <li>twiter</li>
                        <li>linkedin</li>
                        <li>github</li>
                        <li>dev</li>
                    </ul>
                    </div>

                    <div className='footer-services'  >
                    <p>Services</p>
                    <ul>
                        <li>Develop</li>
                        <li>Architecture</li>
                        <li>Design</li>
                        </ul>
                        </div>

                        <div 
                        style={{
                            backgroundColor : 'blue'
                 }}
                 className='footer-contact-express-form'>
                    FORMULARIO DE CONTACTO EXPRESS
                    </div>
                    
                    <div className='footer-right-and-copyright'>
                    <p>all rights reserved and registered under author law  </p>
                </div>

            </div>
                    </div>
        </>
    )
}

export default Footer