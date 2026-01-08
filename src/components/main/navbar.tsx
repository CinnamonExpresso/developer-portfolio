import { useState } from "react";
import { useTheme } from "../hooks/useTheme";
import ThemeToggle from "../misc/themetoggle";
import PiImg from "../../assets/images/pi.svg"

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const [subMenuOpen, setSubMenuOpen]: any = useState({}); // track mobile submenu

  const links = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/projects" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
    {
      name: "About",
      href: "/about",
    },
  ];

  const toggleSubMenu = (name: string) => {
    setSubMenuOpen((prev: any) => ({ ...prev, [name]: !prev[name] }));
  };

  return (
    <nav className="navbar">
      <div className="nav-left">
        <span className="logo">
          <a href="/">
            <img src={PiImg}></img>
          </a>
        </span>
      </div>

      {/* Hamburger */}
      <button
        className="hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span className={`bar ${menuOpen ? "open" : ""}`}></span>
        <span className={`bar ${menuOpen ? "open" : ""}`}></span>
        <span className={`bar ${menuOpen ? "open" : ""}`}></span>
      </button>

      {/* Links */}
      <div className={`nav-link-content ${menuOpen ? "active" : ""}`}>
        {links.map((link: any) => (
          <div
            key={link.name}
            className={`nav-item ${link.subLinks ? "has-sub" : ""}`}
          >
            <a
              href={link.href}
              onClick={(e) => {
                if (link.subLinks && window.innerWidth <= 768) {
                  e.preventDefault();
                  toggleSubMenu(link.name);
                }
              }}
            >
              {link.name}
            </a>

            {link.subLinks && (
              <div
                className={`sub-menu ${subMenuOpen[link.name] ? "open" : ""}`}
              >
                {link.subLinks.map((sub: any) => (
                  <a key={sub.name} href={sub.href}>
                    {sub.name}
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="toggle-container">
        <ThemeToggle theme={theme} setTheme={setTheme} />
      </div>
    </nav>
  );
}
