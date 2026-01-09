import SmallLst from "../components/misc/smallList";

export default function AboutPage() {
  return (
<div className="page about-page">
  <header className="about-header">
    <h1>About</h1>
    <p className="page-subtitle">
      Mathematics as a way of thinking, not just a field of study.
    </p>
  </header>

  <section className="about-content">
    <div className="about-intro">
      <p>
        I study mathematics with an interest the
        physical sciences. I’m especially drawn to linear algebra, calculus,
        and the general applications of mathematics.
      </p>

      <p>
        I prefer building intuition first, using tools only when they
        meaningfully contribute to my understanding. Outside of coursework, I spend
        time writing, building projects, reading philosophy, tending to my plants, and researching
        various science related topics.
      </p>
    </div>

    <section className="about-section">
      <h2>Background</h2>
      <div className="about-grid two-col">
        <SmallLst
          title="Education"
          lst={[
            "B.S. in Mathematics, Minor in Philosophy (Honors) 2024 – 2027"
          ]}
        />
        <SmallLst
          title="Awards & Societies"
          lst={[
            "Dean’s List (2 semesters)",
            "President’s List (2 semesters)",
            "Honors College (Admitted 05/05/2025)",
          ]}
        />
      </div>
    </section>

    <section className="about-section">
      <h2>Skills</h2>
      <div className="about-grid three-col">
        <SmallLst
          title="Technical"
          lst={[
            "Full-stack web development (3 years)",
            "Software engineering (3 years)",
            "University-level mathematics",
            "Mathematical programming",
            "Scientific writing (LaTeX, JSON)",
            "Git & GitHub",
          ]}
        />
        <SmallLst
          title="Programming"
          lst={[
            "Python",
            "JavaScript",
            "TypeScript",
          ]}
        />
        <SmallLst
          title="Other"
          lst={[
            "Professional writing",
            "Microsoft Office",
            "Canva"
          ]}
        />
        <SmallLst
          title="Languages"
          lst={[
            "English (native)",
            "Chinese (beginner)"
          ]}
        />
      </div>
      <div className="about-symbol">
        “No human investigation can be called real science if it cannot be demonstrated mathematically.” – Leonardo Da Vinci
      </div>
    </section>
  </section>
</div>
  );
}
