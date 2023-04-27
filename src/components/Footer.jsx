import React from 'react'

const Footer = () => {
    return (
        <footer className='footer-container'>
            
            <p>@diegotellezc</p>

            <div className='logos'>
                <a target='_blank' href="https://github.com/diegotellezc">
                    <i className='bx bxl-github' ></i>
                </a>

                <a target='_blank' href="https://www.linkedin.com/in/diegotellezc/">
                    <i className='bx bxl-linkedin-square' ></i>
                </a>

                <a target='_blank' href="https://www.instagram.com/diegotellezc/">
                    <i className='bx bxl-instagram-alt' ></i>
                </a>

                <a target='_blank' href="https://dogs-blog-diegotellezdev.netlify.app">
                    <i className='bx bx-question-mark' ></i>
                </a>
            </div>

            
        </footer>
    )
}

export default Footer
