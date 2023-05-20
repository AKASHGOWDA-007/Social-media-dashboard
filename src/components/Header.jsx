import React,{ useState } from 'react';

function Header() {
  const [toggle, setToggle] = useState(true);

  console.log(window.matchMedia("(prefers-color-scheme: dark)").matches);
  
  const setColorMode = () => {
    localStorage.getItem('theme') === "dark" ? setDarkMode() : setLightMode();
  }

  const setDarkMode = () => {
    document.body.classList.remove("light");
    document.body.classList.add("dark");
  }

  const setLightMode = () => {
    document.body.classList.remove("dark");
    document.body.classList.add("light");
  }

  const handleChange = () => {
    
    if(toggle === "light") {
      setToggle("dark");
      localStorage.setItem("theme", "dark");
      setDarkMode();
    } else {
      setToggle("light");
      localStorage.setItem("theme", "light");
      setLightMode();
      
    }
    setColorMode();
    // console.log(prevState.target.value);
  }

  window.onload = (event) => {
    localStorage.getItem("theme");
    console.log(localStorage.getItem("theme"));
    setColorMode();
  }

  return (
    <header className='header container'>
      <div className='header__wrapper'></div>
      <div className="header__title">
        <h1>Social Media Dashboard</h1>
        <span className='header__subtitle'>Total Followers: 23,004</span>
      </div>
      <fieldset className='header__toggle toggle' aria-label='theme toggle' role='radiogroup'>
        <label htmlFor="dark">{toggle === "dark" ? "dark" : "Light"} Mode </label>
        <div className="toggle__wrapper">
          <input type="radio" name="theme" value="dark" onChange={handleChange} id="dark" />
          <input type="radio" name="theme" value="light" onChange={handleChange} id="light" />
          <span aria-hidden="true" className='toggle__background'></span>
          <span aria-hidden="true" className='toggle__button'></span>
        </div>
      </fieldset>
    </header>
  )
}

export default Header