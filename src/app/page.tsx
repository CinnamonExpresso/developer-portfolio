import React from 'react'
import { HomeHero } from "../componets/Home/homeHero";
import HomeInfo from "../componets/Home/homeInfo";
import HomeSkills from "../componets/Home/homeSkills";
import { Metadata } from 'next';
import './styles/home-globals.scss'
import ProjectContainer from '@/componets/Projects/projectContainer';
import '@/app/styles/blog-globals.scss'
import '@/app/styles/project-globals.scss'
import Image from 'next/image';
import ProjectIcon from '@/assets/images/icons/decor/paintbrush-solid.svg';

export const metadata: Metadata = {
  title: "Pumped dev",
  description: "Welcome to my porfilo! here you can view some of my public projects, blog, and more. Feel free to get in touch if you have any questions!",
};

function HomePage() {
  return (
    <div>
      <HomeHero></HomeHero>
      <HomeInfo></HomeInfo>
      <HomeSkills></HomeSkills>
      <div className="home-projects">
        <div className='project-title'>
          <Image src={ProjectIcon} draggable='false' alt="Projects icon"></Image>
          <h1>My Projects</h1>
          </div>
          <p>Heres a assorted list of projects i&#39;ve developed</p>
          <hr></hr>
        <ProjectContainer/>
      </div>
    </div>
  )
}

export default HomePage