import React from 'react'
import ProjectHero from "../../componets/Projects/projectHero";
import ProjectsTile from "../../componets/Projects/projectsTitle";
import ProjectContainer from "../../componets/Projects/projectContainer";
import { Metadata } from 'next';
import '../styles/project-globals.scss'
import '@/app/styles/blog-globals.scss'


export const metadata: Metadata = {
  title: "My projects",
  description: "Heres a full list of my public projects. Built using a wide range of languages and libaries",
};

function ProjectPage() {
  return (
    <div>
      <ProjectHero />
      <ProjectsTile />
      <ProjectContainer />
    </div>
  )
}

export default ProjectPage