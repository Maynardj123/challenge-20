import React from "react";
import '../styles/About.css'

function About() {
    return (
        <div>
            <h1>Full Stack Web Developer</h1>
            <div className="biography">
            <p>I am a [profession/occupation] with [number of years] of experience in [field of expertise]. I am known for my [unique skill or attribute], which has contributed to my success in [previous projects or accomplishments]. I earned a [education degree or training certification] from [school or institution], where I developed a strong foundation in [relevant subject or industry]. I continue to expand my knowledge and stay up-to-date on industry trends through [relevant professional development or certifications].</p>
            <p>Outside of work, I am actively involved in [community involvement or social responsibility]. I am committed to [cause or mission related to involvement], and have served as a [position held or organization involved with] for [length of time]. My dedication and passion for making a difference has inspired others to join in my efforts. When I'm not volunteering, I enjoy [activity or interest related to hobby], which allows me to recharge and stay motivated.</p>
            <p>I believe in the importance of work-life balance and prioritize self-care. I am committed to [health or wellness routine], which has helped me maintain a healthy lifestyle both physically and mentally. I am also an avid [activity or interest], and enjoy [other hobbies or interests], such as [activity or interest], which helps me stay creative and stimulated. My strong work ethic, combined with my commitment to giving back and maintaining a healthy lifestyle, has enabled me to achieve success both professionally and personally.</p>
            </div>
            <div>
             <img id="myPhoto" src={require("../styles/images/20230322_152823.jpg")} alt="me"></img>
            </div>
            <div>
             <img id="sports" src={require("../styles/images/sportskind.jpg")} alt="sports"></img>
            </div>
            <div>
             <img id="discGolf" src={require("../styles/images/discgolf.JPG")} alt="discGolf"></img>
            </div>
            <div>
             <img id="atDesk" src={require("../styles/images/photoatdesk.jpg")} alt="atDesk"></img>
            </div>
            
        </div>

    )
}

export default About;