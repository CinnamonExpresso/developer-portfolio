import { useEffect, useState } from "react";

export function useTheme() {
  const getInitialTheme = () => {
    const stored = localStorage.getItem("theme");
    if (stored) return stored;

    // system preference
    return window.matchMedia("(prefers-color-scheme: light)").matches
      ? "light"
      : "dark";
  };

  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  return { theme, setTheme };
}
