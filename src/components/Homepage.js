// have a homepage linked and have as the first thing pop up when launched, Have a small bio and include 
// full stack development, with another link to the about me page for more information, then under that have a 
// list of your accomplished skills, under that show a list of top three projects and a link to the portfolio
// page for more projects, add another contact page below that.

import React from 'react';
import Contact from './Contact.js'

import '../styles/Homepage.css';

function Homepage() {
    return (
        <body>
            <div className="bioContainer">
            <div id="nameBox"></div>
                <h1 id="title">I'm a Full Stack Web Developer</h1>
                <div className="myBio">
                    <p id="bioInfo">I am excited to pursue a career in Full Stack web development. It offers an opportunity to work on
                        both the front-end and back-end aspects of web applications, which means I can design user interfaces,
                        implement business logic, and manage databases. I have a strong understanding of various programming
                        languages such as HTML, CSS, JavaScript, and database management systems, which will be critical in
                        my pursuit of this career. To stay up-to-date with the latest web development trends and best
                        practices, I am committed to continuous learning and growth. I find the idea of creating functional
                        and aesthetically pleasing web applications incredibly satisfying, and I am excited about the
                        prospects of becoming a Full Stack web developer. With the rapid advancement of technology,
                        Full Stack web development remains an in-demand and valuable skill set for companies across various
                        industries. I am thrilled about the opportunities that pursuing a career in Full Stack web development will present.
                    </p>
                    <div id="photoBox"></div>
                    <img id="firstPhoto" src={require("../styles/images/photoatdesk.jpg")}></img>
                </div>
                <button id="aboutBtn" type="button">More about me</button>
            </div>

            <div className="skillsContainer">
                <h1>Skills</h1>
                <ul className="skillList">
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Javascript</li>
                    <li>Node.js</li>
                    <li>MySQL</li>
                    <li>NoSQL</li>
                    <li>React.js</li>
                    <li>Jest</li>
                    <li>Webpack</li>
                    <li>Insomnia</li>
                    <li>Mongodb</li>
                    <li>REST APIs</li>
                    <li>Handlebar.js</li>
                    <li>Materialize</li>
                    <li>Bootstrap</li>
                </ul>
            </div>

            <div className="projectsContainer">
                <h1>Projects</h1>
                <div className="project">
                <div className="grp1">
                <h2>project1</h2>
                <img id="project1" src={require("../styles/images/projectImages/patrick-tomasso-QMDap1TAu0g-unsplash.jpg")}></img>
                </div>

                <div className="grp2">
                <h2>project2</h2>
                <img id="project2" src={require("../styles/images/projectImages/patrick-tomasso-QMDap1TAu0g-unsplash.jpg")}></img>
                </div>

                <div className="grp3">
                <h2>project3</h2>
                <img id="project3" src={require("../styles/images/projectImages/patrick-tomasso-QMDap1TAu0g-unsplash.jpg")}></img>
                </div>
                </div>
                {/* <ul>
                    <li>(have a project name and picture here)</li>
                    <li>(have a project name and picture here)</li>
                    <li>(have a project name and picture here)</li>
                </ul> */}
                <button type="button">More Projects</button>
            </div>

             <div>
                <Contact />
             </div>
        </body>
    )
}

export default Homepage;