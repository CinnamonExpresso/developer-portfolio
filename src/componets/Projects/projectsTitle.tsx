import React from 'react-dom'

//For the main projects page
function ProjectsTile(){
  const ConstructProjectFilter = ({Img, Title}: {Img: string ,Title: string}) => {
    return (
      <div className="project-filter-item">
        <img src={Img} alt={`${Title}`} draggable='false'></img>
      </div>
    )
  }

  return (
    <div className="projects-page-title">
      <h1>My Project&apos;s</h1>
      <p>Here&apos;s a list of my project&apos;s. Built using a wide range of languages, skills and libaries.</p>
      <hr></hr>
      <div className="project-filter">
        <ConstructProjectFilter
          Img="https://img.shields.io/badge/react-black?logo=react&style=for-the-badge"
          Title='React'
        />
        <ConstructProjectFilter
          Img="https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white"
          Title='Nextjs'
        />
        <ConstructProjectFilter
          Img="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"
          Title='Vanillia Javascript'
        />
        <ConstructProjectFilter
          Img="https://shields.io/badge/TypeScript-3178C6?logo=TypeScript&logoColor=FFF&style=for-the-badge"
          Title='TypeScript'
        />
        <ConstructProjectFilter
          Img="https://img.shields.io/badge/Scss-e159ff?style=for-the-badge&logo=sass&logoColor=white"
          Title='Sass / Scss'
        />
      </div>
    </div>
  )
}

export default ProjectsTile;