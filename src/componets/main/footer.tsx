import React from 'react';
import Twitter from '../../assets/images/icons/twitter.svg';
import Youtube from '../../assets/images/icons/youtube.svg';
import Linkedin from '../../assets/images/icons/linkedin.svg';
import Discord from '../../assets/images/icons/discord.svg';
import Image from 'next/image';
import Link from "next/link";

//Appears at the bottom of the page
function Footer(){
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-col-2">
          <h2>Felix</h2>
          <div className="footer-social-links">
            <a href='https://twitter.com/pumpeddev'><Image src={Twitter} alt='Twitter' draggable='false'></Image></a>
            <a href='#'><Image src={Youtube} alt='Youtube' draggable='false'></Image></a>
            <a href='#'><Image src={Linkedin} alt='Linkedin' draggable='false'></Image></a>
            <a href='#'><Image src={Discord} alt='Discord' draggable='false'></Image></a>
          </div>
        </div>
        <div className='footer-col-links'>
          <div className="footer-col-2">
            <ul>
              <li>
                <Link href='/'>Home</Link>
              </li>
              <li>
                <Link href='/projects'>Projects</Link>
              </li>
              <li>
                <Link href='/blog'>Blog</Link>
              </li>
              <li>
                <Link href='/about'>About</Link>
              </li>
            </ul>
          </div>
          <div className="footer-col-2">
            <ul>
              <li>
                <Link href='/contact'>Contact</Link>
              </li>
              <li>
                <Link href='/legal/terms'>Terms</Link>
              </li>
              <li>
                <Link href='/legal/privacy'>Privacy</Link>
              </li>
            </ul>
          </div>
        </div>
        </div>
        <hr></hr>
        <div className="footer-row-2">
          <p>
            © Copyright 2023 | Made with ☕ by <span><a href='https://github.com/CinnamonExpresso'>Felix</a></span>
          </p>

        </div>
    </div>
  )
}

export default Footer