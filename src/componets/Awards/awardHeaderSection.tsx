import React from 'react';
import AboutIcon from '../../assets/images/icons/decor/user-solid.svg';
import Image from 'next/image';

function AwardHeaderSection(){
  return(
    <div className="about-me-page">
      <div className="about-content">
        <div className="about-title">
          <Image src={AboutIcon} alt="Award icon"></Image>
          <h1>Awards & Honors</h1>
        </div>
        <hr></hr>
        <div className="about-text">
          <p>
            Below is a full list of my current academic Awards and Honors
          </p>
        </div>
        <div className='awards-list'>
          <h2>Awards</h2>
          <ul>
            <li>Dean's List Spring 2024</li>
            <li>President's List Fall 2024</li>
            <li>Dean's List Fall 2024</li>
            <li>President's List Spring 2025</li>
            <li>Dean's List Fall Spring 2025</li>
          </ul>
        </div>
        <div className='awards-list'>
          <h2>Honors</h2>
          <ul>
            <li>University Honor Society admitted Spring 2025</li>
          </ul>
        </div>
      </div>
      </div>
  )
}

export default AwardHeaderSection