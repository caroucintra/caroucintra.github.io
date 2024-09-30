import React from 'react';
import './Home.css';
import Me from "../../assets/avatar2.svg"
import HeaderSocials from './HeaderSocials';
import ScrollDown from './ScrollDown';
import Stars from './Stars';

const Home = () => {
  return (
    <section className="home container" id="home">
      <div className="intro">
        <img src={Me} alt="" className="home__img" />
        <h1 className="home__name">Carolina Figueira</h1>
        <span className="home__education">Software Engineer</span>
        <HeaderSocials />
        <a href='#contact' className='btn'>Hire Me</a>
        <ScrollDown />
        <Stars />
      </div>
    </section>
  );
}

export default Home;