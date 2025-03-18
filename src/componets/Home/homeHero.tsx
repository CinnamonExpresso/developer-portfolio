'use client'
import React from 'react'
import Twitter from '../../assets/images/icons/twitter.svg';
import Youtube from '../../assets/images/icons/youtube.svg';
import Linkedin from '../../assets/images/icons/linkedin.svg';
import Email from '../../assets/images/icons/email.svg';
import WhiteWave from '../../assets/images/decorations/banner-wave-white.svg';
import Image from 'next/image';
import { ReactTyped } from "react-typed";

//Displays at the top of the home page
function HomeHero() {
  const emailLink = process.env.CONTACT_EMAIL;

  return (
    <div className="hero-container">
      <div className='hero-group'>
        <div className="hero-col-1">
          <h1>Hi, I&apos;m <span>Felix</span>👋</h1>
          <div style={{display: 'flex', gap: '10px', justifyContent: 'center'}}>
            <h2>I&apos;m a</h2>
            <h2>
              <ReactTyped strings={["Software developer", "Fullstack developer", "UI/UX Designer", "back-end developer", "Desktop app developer","Website developer"]} typeSpeed={100} backSpeed={50} loop />
            </h2>
          </div>
          <p>Full-stack developer, dedicated to transforming innovative concepts into functional and user-friendly web applications</p>

          <div className="hero-social-links">
            <a href='https://twitter.com/pumpeddev'>
              <Image src={Twitter} alt='Twitter' draggable='false'></Image>
            </a>
            <a href="#">
              <Image src={Youtube} alt='Youtube' draggable='false'></Image>
            </a>
            <a href="#">
              <Image src={Linkedin} alt='Linkedin' draggable='false'></Image>
            </a>
            <a href={`mailto:${emailLink}`}>
              <Image src={Email} alt='Email' draggable='false'></Image>
            </a>
          </div>
        </div>
        <div className="hero-col-2">
          <img src="https://avatars.githubusercontent.com/u/156177896?v=4"draggable='false' alt="Profile picture"></img>
        </div>
      </div>
      <div className="wave-componet">
        <Image src={WhiteWave} className='page-wave' draggable='false' alt="Page wave"></Image>
      </div>
    </div>
  );
}

export { HomeHero };