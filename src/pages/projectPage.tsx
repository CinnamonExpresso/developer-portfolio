
const ProjectCard = ({
  title,
  desc,
  type,
  link,
  other_info
}: {
  title: string;
  desc: string;
  type: string;
  link: string;
  other_info?: string[];
}) => {
  return (
    <a href={`https://${link}`}>
      <div className="project-card">
        <h2>{title}</h2>
        <p>{desc}</p>
        <div className="project-types">
          <span className="project-tag">{type}{other_info && " • "}</span>
          {other_info && 
            <div className="project-additional-types">
              {other_info.map((item, i) => <span className="project-tag" key={i}>{item}</span>)}
            </div>
          }
        </div>
      </div>
    </a>
  );
};

export default function ProjectPage() {
  return (
    <div className="page">
      <header className="page-header">
        <h1>Projects</h1>
        <p className="page-subtitle">
          Here one can find a selection of my projects; It includes various programming, engineering, mathematical, and physics related projects (though it's not a complete list).
        </p>
      </header>

      <section className="projects-list">
        <h2>Active Projects</h2>
        <p className="page-subtitle">
          A collection of projects that I'm actively working on.
        </p>
        <ProjectCard
          title="UI Library"
          desc="A completely free, fast, and open-source UI Library. Used to support the development of physics simulations."
          type="software"
          link=""
          other_info={["Python"]}
        />
        <ProjectCard
          title="Personal Website"
          desc="My personal website thats used to display some of my work. Includes support for blog articles, LaTeX expressions, themes, etc."
          type="software"
          link="github.com/CinnamonExpresso/developer-portfolio"
          other_info={["Typescript", "Reactjs", "Vite"]}
        />
        <h2>Archived Projects</h2>
        <p className="page-subtitle">
          Some of my previous work, used for demonstrative purposes; No longer being maintained nor updated.
        </p>
        <ProjectCard
          title="TubeFetcher"
          desc="A desktop program written in Python to download YouTube videos and audio"
          type="software"
          link="github.com/CinnamonExpresso/TubeFetcher"
          other_info={["Python", "Tkinter"]}
        />
        <ProjectCard
          title="MovieBox"
          desc="A full-stack, movie and show info webapp with a custom REST API backend. It uses server-side rendering. I built it to teach myself API's and to better understand the architecture behind popular websites."
          type="software"
          link="github.com/CinnamonExpresso/moviebox-nextjs"
          other_info={["Nextjs", "TypeScript", "Scss"]}
        />
      </section>
    </div>
  );
}
