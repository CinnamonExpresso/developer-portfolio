const ProjectCard = ({
  title,
  desc,
  type,
}: {
  title: string;
  desc: string;
  type: string;
}) => {
  return (
    <div className="project-card">
      <h2>{title}</h2>
      <p>{desc}</p>
      <span className="project-tag">{type}</span>
    </div>
  );
};

export default function ProjectPage() {
  return (
    <div className="page">
      <header className="page-header">
        <h1>Projects</h1>
        <p className="page-subtitle">
          A selection of work exploring structure, abstraction, and computation.
        </p>
      </header>

      <section className="projects-list">
        <ProjectCard
          title="TubeFetcher"
          desc="A desktop program written in Python to download YouTube videos and audio"
          type="software"
        />
      </section>
    </div>
  );
}
