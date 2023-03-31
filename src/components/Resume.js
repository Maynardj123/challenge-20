import React from 'react';
import '../styles/Resume.css'

const Resume = () => {
    return(
        <div>
        <div>
            <img className='resume' src={require("../styles/images/1.png")} alt="resumept1"></img>
        </div>
        <div>
            <img className='resume' src={require("../styles/images/2.png")} alt="resumept2"></img>
        </div>
        </div>
    )
};

export default Resume;