import { useEffect, useState } from "react";

export function useTheme(theme_choice:string="", is_return:boolean=true) {
  const getInitialTheme = () => {
    const stored = localStorage.getItem("theme");
    if (stored) return stored;

    // system preference
    return window.matchMedia("(prefers-color-scheme: light)").matches
      ? "vanillia"
      : "midnight";
  };

  const [theme, setTheme] = useState(theme_choice ? theme_choice  : getInitialTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  if(is_return){
    return { theme, setTheme };
  }
}