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

export default ProjectCard;