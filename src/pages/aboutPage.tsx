import SmallLst from "../components/misc/smallList";

export default function AboutPage() {
  return (
    <div className="page about-page">
      <header className="page-header">
        <h1>About</h1>
        <p className="page-subtitle">
          Mathematics as a way of thinking, not just a field of study.
        </p>
      </header>

      <section className="about-content">
        <p>
          I’m a mathematics major interested both applied math and the physical
          sciences. My academic interests include Linear Algebra, Calculus, and
          the general applications of mathematics.
        </p>

        <p>
          I enjoy approaching problems using intutition rather than relying on
          outside tools unless it's absolutely needed. Outside of coursework, I
          enjoy writing, building projects, reading (especially on philosophy),
          and researching.
        </p>
        <hr></hr>
        <div className="small-lst-container">
          <SmallLst title={"Technical Skills"} lst={["Full-Stack Web Development (3 years)", "Software engineering (3 years)", "University-level mathematics", "Mathematical Programming", "Scientific Writing (Latex & Json)", "Git & Github (3 years)"]}/>
          <SmallLst title={"Soft Skills"} lst={["Microsoft Office", "Professional Writing", "Canva (4 years)"]}/>
          <SmallLst title={"Programming Languages"} lst={["Python (3 years)", "JavaScript (3 years)", "TypeScript (3 years)"]}/>
          <SmallLst title={"Languages"} lst={["English (Native)", "Chinese (Beginner)"]}/>
        </div>
      </section>
    </div>
  );
}
