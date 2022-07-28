import React, { useState } from 'react'
const nav  = document.querySelector('.navbar');
// const burger = document.querySelector('.burgerMenu');
const BurgerMenu = () => {
    // function handleClick(){
    //     burger.classList.toggle('toggle');
    //     nav.classList.toggle('nav-active');
    // }
    const [isActive, setActive] = useState("false");
    const handleToggle=()=>{
        setActive(!isActive);
        nav.classList.toggle('nav-active');
    }
  return (
    <div onClick={handleToggle} className={"burgerMenu" + (isActive? " toggle": "")}>
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
              </div>
  )
}

export default BurgerMenu