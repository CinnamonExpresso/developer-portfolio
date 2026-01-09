export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-left">
        <span>© {new Date().getFullYear()} Felix</span>
      </div>

      <div className="footer-center">
        <a href="/projects">Projects</a>
        <a href="/blog">Blog</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </div>

      <div className="footer-right">
        <a href="mailto:contact@pumped.dev">Email</a>
        <a
          href="https://github.com/CinnamonExpresso"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          YouTube
        </a>
      </div>
    </footer>
  );
}
