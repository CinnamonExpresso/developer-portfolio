import React from 'react';
import AboutIcon from '../../assets/images/icons/decor/user-solid.svg';
import Image from 'next/image';

/* <div className="icon-list">
<img 
  src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" 
  alt="html 5" 
  draggable='false'>
</img>
<img 
  src="https://img.shields.io/badge/CSS-1572B6?style=for-the-badge&logo=css3&logoColor=white" 
  alt="css 3" 
  draggable='false'>
</img>
<img 
  src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" 
  alt="javascript" 
  draggable='false'>
</img>
<img 
  src="https://img.shields.io/badge/Bootstrap-984aff?style=for-the-badge&logo=bootstrap&logoColor=white" 
  alt="bootstrap" 
  draggable='false'>
</img>
<img 
  src="https://img.shields.io/badge/react-black?logo=react&style=for-the-badge" 
  alt="react" 
  draggable='false'>
</img>
<img 
  src="https://img.shields.io/badge/Scss-e159ff?style=for-the-badge&logo=sass&logoColor=white" 
  alt="scss" 
  draggable='false'></img>
<img 
  src="https://img.shields.io/badge/Vite-652afa?style=for-the-badge&logo=vite&logoColor=fcee1e" 
  alt="vite" 
  draggable='false'></img>
<img 
  src="https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" 
  alt="Next js" 
  draggable='false'></img>
<img 
  src="https://shields.io/badge/TypeScript-3178C6?logo=TypeScript&logoColor=FFF&style=for-the-badge" 
  alt="Typescript" 
  draggable='false'></img>
<img 
  src="https://img.shields.io/badge/Webpack-00aeff?style=for-the-badge&logo=webpack&logoColor=white" 
  alt="webpack" 
  draggable='false'></img>
<img 
  src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" 
  alt='node' 
  draggable="false"></img>
<img 
  src="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB" 
  alt='express' 
  draggable="false"></img>
<img 
  src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" 
  alt='mongodb' 
  draggable="false"></img>
</div> */

function AboutContent(){
  return(
    <div className="about-me-page">
      <div className="about-content">
        <div className="about-title">
          <Image src={AboutIcon} alt="About me icon"></Image>
          <h1>About Me</h1>
        </div>
        <hr></hr>
        <div className="about-text">
          <p>
            I&#39;m a university honors student studying Physics and Applied Mathematics, with a strong foundation in theoretical and computational problem-solving. My academic interests lie in mathematical modeling, simulations, and algorithmic approaches to physics, which naturally complement my expertise in full-stack development and software engineering. 
          </p>
          <p>
            My programming journey began with front-end technologies like React, Next.js, and CSS before expanding into scientific computing, back-end systems, desktop applications, and game development. Over time, I&#39;ve worked on projects ranging from numerical simulations and physics-based modeling to web applications, mobile apps, and video games, honing my proficiency in Python, Java, JavaScript, PostgreSQL, and C++. 
          </p>
          <p>
            I take a methodical and analytical approach to programming, leveraging my math and physics background to write efficient, structured, and scalable code. Whether it&#39;s implementing computational methods for solving equations, developing physics simulations, or optimizing algorithms, I aim to create software that is both powerful and elegant. I thrive in projects where I oversee development from concept to implementation. 
          </p>
          <p>
            In my free time, I enjoy exploring mathematical theories, reading literature, writing, watching documentaries, and going for long walks. 
          </p>
        </div>
      </div>
      </div>
  )
}

export default AboutContent