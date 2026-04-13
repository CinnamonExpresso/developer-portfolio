import { useState, useRef, useEffect } from 'react';
import { useTheme } from '../hooks/useTheme';

const SettingsGuiBtn = ({ title, icon, opt = null, opt_cb = null, opt_state = null }: [title: string, icon: string, opt: null | [string], opt_cb: Function, opt_state: string]) => {

  return (
    <div className='settings-item'>
      <h2><i className={`fa-solid fa-${icon}`}></i>{title}:</h2>
      {opt &&
        <select name="themes" onChange={(e) => opt_cb(e.target.value.toLowerCase())} defaultValue={opt_state}>
          {opt.map((ele, i) => {
            return (
              <option value={ele} key={`option-${i}`}>{ele[0].toUpperCase() + ele.slice(1)}</option>
            )
          })}
        </select>
      }
    </div>
  )
}

// A settings GUI
const SettingsButton = () => {
  const [guiOpen, setGuiOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const wrapperRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setGuiOpen(false);
      }
    }

    //Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef]);

  return (
    <div className='settings-btn-container' ref={wrapperRef}>
      <div className='scroll-btn settings-btn' onClick={() => setGuiOpen(!guiOpen)}>
        <i className='fa-solid fa-gear'></i>
      </div>
      {guiOpen &&
        <div className='settings-gui'>
          <h1>Settings</h1>
          {Array({ title: "Theme", icon: "brush" }).map((item, i) => {
            return (
              <SettingsGuiBtn key={`setting-btn-${i}`} opt_state={theme} opt_cb={setTheme} opt={["vanillia", "mint", "pink", "white", "midnight"]} title={item.title} icon={item.icon} />
            )
          })
          }
        </div>
      }
    </div>
  );
};

export default SettingsButton;