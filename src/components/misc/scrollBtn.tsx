import { useState, useEffect } from 'react'; 

//A scroll to top button, appears after the client scrolls past a certain length and does as the name implies
const ScrollButton = () => {
  const [visible, setVisible] = useState(false); 
  
  useEffect(() => {
    const toggleVisible = () => {
      const scrolled = window.scrollY;
      if (scrolled > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisible);

    // Cleanup function to remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', toggleVisible);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className='scroll-btn' onClick={scrollToTop} style={{ display: visible ? 'flex' : 'none' }}>
      <i className='fa-solid fa-chevron-up'></i>
    </div>
  ); 
};

export default ScrollButton;