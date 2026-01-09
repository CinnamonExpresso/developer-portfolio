import SmallLst from "../components/misc/smallList";

export default function HomePage() {
  return (
    <div className="container home">
      <header className="header home-hero fade-in">
        {/* Hero */}
        <header className="header home-hero">
          <h1>
            Hi, I’m <span className="accent">Felix</span>.
          </h1>
          <p className="subtitle">
            Math major interested in physics, scientific writing,
            and solutions to complex problems.
          </p>
        </header>
        {/* Intro */}
        <section className="content home-intro">
          <p>
            I study applied mathematics. My academic interests
            currently center on linear algebra, proofs, and
            multivariable calculus, especially where they intersect
            with physical systems.
          </p>
        </section>
        {/* Focus areas */}
        <SmallLst title={"Current Focus"} lst={["Applied Linear Algebra", "Multivariable & Vector Calculus", "Mathematics for Physical Systems", "Technical & Scientific Writing"]}/>
        {/* Featured links */}
        <section className="home-featured">
          <div className="featured-card">
            <h3>Projects</h3>
            <p>
              Some projects I've worked on. Mostly just programming related stuff.
            </p>
            <a href="/projects">View projects →</a>
          </div>
          <div className="featured-card">
            <h3>Blog</h3>
            <p>
              Short notes on mathematics, problem-solving, philosophy, and
              various ideas.
            </p>
            <a href="/blog">Read posts →</a>
          </div>
        </section>
        </header>
        {/*Blog posts*/}
        <section className="home-recent fade-in delay-3">
          <h2>Recent Writing</h2>

          <a href="/blog/test-post" className="recent-post">
            <h3>Test Post</h3>
            <p>
              A test post
            </p>
            <span>Read →</span>
          </a>
        </section>
    </div>
  )
}

