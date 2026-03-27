export default function ThemeToggle({ theme, setTheme }:any) {
  return (
    <label className="theme-switch">
      <input
        type="checkbox"
        checked={theme === 'light'}
        onChange={() =>
          setTheme(theme === 'light' ? 'dark' : 'light')
        }
      />
      <span className="slider" />
    </label>
  )
}
