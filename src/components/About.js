import React from "react";
import '../styles/About.css'

function About() {
    return (
        <div>
            <h1>Full Stack Web Developer</h1>
            <div className="biography">
            <p>[Your name] is a [profession/occupation] with [number of years] of experience in [field of expertise]. They are known for their [unique skill or attribute], which has contributed to their success in [previous projects or accomplishments]. [Your name] has a [education degree or training certification] from [school or institution], where they developed a strong foundation in [relevant subject or industry]. They have continued to expand their knowledge and stay up-to-date on industry trends through [relevant professional development or certifications].</p>
            <p>Outside of work, [your name] is actively involved in [community involvement or social responsibility]. They are committed to [cause or mission related to involvement], and have served as a [position held or organization involved with] for [length of time]. [Your name]'s dedication and passion for making a difference has inspired others to join in their efforts. When not volunteering, [your name] enjoys [activity or interest related to hobby], which allows them to recharge and stay motivated.</p>
            <p>[Your name] believes in the importance of work-life balance and prioritizes self-care. They are committed to [health or wellness routine], which has helped them maintain a healthy lifestyle both physically and mentally. [Your name] is also an avid [activity or interest], and enjoys [other hobbies or interests], such as [activity or interest], which helps them stay creative and stimulated. Their strong work ethic, combined with their commitment to giving back and maintaining a healthy lifestyle, has enabled them to achieve success both professionally and personally.</p>
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