import { useState } from "react";
import SmallLst from "../components/misc/smallList";

export default function AboutPage() {
  const quotes = [
    "No human investigation can be called real science if it cannot be demonstrated mathematically. – Leonardo Da Vinci",
    "Each problem that I solved became a rule, which served afterwards to solve other problems. – Rene Descartes"

  ];
  const [randomQuote, setRandomQuote] = useState(quotes[Math.floor(Math.random() * quotes.length)]);

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
            I study Mathematics with a minor in Philosophy. I’m especially drawn to calculus
            and the general applications of mathmematics in physics.
          </p>

          <p>
            I prefer building intuition first, using tools only when they
            meaningfully contribute to my understanding. Outside of coursework, I spend
            time writing, building projects, reading, tending to my plants, and researching
            various science related topics.
          </p>
        </div>

        <section className="about-section">
          <h2>Background</h2>
          <div className="about-grid two-col">
            <SmallLst
              title="Education"
              lst={[
                "B.S. in Mathematics, minor in Philosophy (Honors) 2024 – 2027"
              ]}
            />
            <SmallLst
              title="Awards & Societies"
              lst={[
                "Dean’s List (2 semesters)",
                "President’s List (2 semesters)",
                "Honors College (Admitted 05/05/2025)",
                "Math Society (Admitted Fall 2025)",
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
                "University-level physics",
                "Mathematical programming (Matlab & Numpy)",
                "Scientific writing (LaTeX, JSON)",
                "Git & GitHub",
              ]}
            />
            <SmallLst
              title="Programming"
              lst={[
                "Python",
                "JavaScript (ReactJS, ViteJS, NodeJS)",
                "TypeScript",
                "HTML, CSS3 & SCSS"
              ]}
            />
            <SmallLst
              title="Other"
              lst={[
                "Professional writing (Technical & Scientific)",
                "Microsoft Office",
                "Canva",
                "Linux"
              ]}
            />
            <SmallLst
              title="Languages"
              lst={[
                "English (native)",
                "French (beginner)",
                "Chinese (beginner)"
              ]}
            />
          </div>
          <div className="about-symbol">
            <p>{randomQuote}</p>
          </div>
        </section>
      </section>
    </div>
  );
}
