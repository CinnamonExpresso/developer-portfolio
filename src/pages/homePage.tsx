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
            and elegant solutions to complex problems.
          </p>
        </header>

        {/* Intro */}
        <section className="content home-intro">
          <p>
            I study applied mathematics. My academic interests
            currently center on linear algebra, real analysis, and
            multivariable calculus, especially where they intersect
            with physical systems (such as physics).
          </p>
        </section>

        {/* Focus areas */}
        <section className="home-focus">
          <h2>Current Focus</h2>
          <ul>
            <li>Applied Linear Algebra</li>
            <li>Multivariable & Vector Calculus</li>
            <li>Mathematics for Physical Systems</li>
            <li>Technical & Scientific Writing</li>
          </ul>
        </section>

        {/* Featured links */}
        <section className="home-featured">
          <div className="featured-card">
            <h3>Projects</h3>
            <p>
              Computational and analytical work exploring structure,
              approximation, and physical intuition.
            </p>
            <a href="/projects">View projects →</a>
          </div>

          <div className="featured-card">
            <h3>Blog</h3>
            <p>
              Short notes on mathematics, problem-solving, philosophy, and
              communicating technical ideas clearly.
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

