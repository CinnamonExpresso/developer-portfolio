import React from 'react'
import ProfileIcon from '../../assets/images/icons/decor/user-solid.svg';
import Image from 'next/image';

//Second part of the home page, shows info
function HomeInfo() {

  return (
    <div className="home-info">
      <div className='info-title'>
        <Image src={ProfileIcon} draggable="false" alt="Profile icon"></Image>
        <h1>About Me</h1>
      </div>
      <hr></hr>
      <div className='home-about-me-intro'>
          <p>👋 Hello there! I&#39;m a university honors student studying Physics and Mathematics, with a minor in Philosophy. I have a strong foundation in theoretical and computational problem-solving. My academic interests lie in mathematical modeling, simulations, and algorithmic approaches to physics, which naturally complement my expertise in software engineering.</p>
          <a href='/about'>
            <button className="btn btn-primary">Read more</button>
          </a>
      </div>
      <hr></hr>
    </div>
  )
};

export default HomeInfo