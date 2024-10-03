import React from 'react';
import "./About.css"
import AboutImg from "../../assets/carou.jpg"

const About = () => {
  const onButtonClick = () => {
    const pdfUrl = "CV_Carolina_Figueira.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "CV_Carolina_Figueira.pdf"; // specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
  <section className="about container section">
    <h2 className="section__title">About Me</h2>
    <div className="about__container grid">
      <img src={AboutImg} alt="" className="about__img" />
      <div className="about__data grid">
        <div className="about__info">
          <p className="about__description">My name is Carolina Figueira, a bilingual Software Engineer from 
            Porto, Portugal. I just finished my Masters in Informatics and Computing Engineering in September. 
            I love all things visual: UI/UX design, graphical interfaces in frontend or game development,
             you name it. I have worked with different programming languages and frameworks in the past and my 
            biggest projects were softwares for healthcare (supporting applications 
            and serious games). My great passion is using technology to improve people's lives
            and I'm looking for opportunities to work in the field.
          </p>
          <button onClick={onButtonClick} className="btn">Download CV</button>
        </div>

        <div className="about__skills grid">
          <div className="skills__data">
            <div className="skills__titles">
              <h3 className="skills__name">Code</h3>
              <span className="skills__number">90%</span>
            </div>
            <div className="skills__bar">
              <span className="skills__percentage p90"></span>
            </div>
          </div>

          <div className="skills__data">
            <div className="skills__titles">
              <h3 className="skills__name">UI/UX design</h3>
              <span className="skills__number">80%</span>
            </div>
            <div className="skills__bar">
              <span className="skills__percentage p80"></span>
            </div>
          </div>

          <div className="skills__data">
            <div className="skills__titles">
              <h3 className="skills__name">Communication</h3>
              <span className="skills__number">75%</span>
            </div>
            <div className="skills__bar">
              <span className="skills__percentage p75"></span>
            </div>
          </div>

          <div className="skills__data">
            <div className="skills__titles">
              <h3 className="skills__name">English</h3>
              <span className="skills__number">85%</span>
            </div>
            <div className="skills__bar">
              <span className="skills__percentage p85"></span>
            </div>
          </div>

          <div className="skills__data">
            <div className="skills__titles">
              <h3 className="skills__name">Portuguese</h3>
              <span className="skills__number">100%</span>
            </div>
            <div className="skills__bar">
              <span className="skills__percentage p100"></span>
            </div>
          </div>

          <div className="skills__data">
            <div className="skills__titles">
              <h3 className="skills__name">Spanish</h3>
              <span className="skills__number">70%</span>
            </div>
            <div className="skills__bar">
              <span className="skills__percentage p70"></span>
            </div>
          </div>

        </div>
      </div>
    </div>
  </section> 
  )
}

export default About
