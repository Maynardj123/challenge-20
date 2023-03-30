import React from 'react';
import '../styles/Footer.css'

const Footer = () => {
    return (
        <footer className="">
            
                <div className="logos">
                    <a href="https://github.com/Maynardj123" target="_blank">
                        <img src={require("../styles/images/25231 (1).png")} alt="github" ></img>
                    </a>

                    <a href="https://www.linkedin.com/in/jacob-maynard-2b1426172/" target="_blank">
                        <img src={require("../styles/images/new-linkedin-logo-white-black-png.png")} alt="linkedin"></img>
                    </a>

                    <a href="https://www.freecodecamp.org/Maynardj123" target="_blank">
                        <img id="correctSize" src={require("../styles/images/5847f91ccef1014c0b5e48b8.png")} alt="codecamp"></img>
                    </a>
                </div>
             
            
        </footer>
    )
};

export default Footer;