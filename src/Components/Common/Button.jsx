import React from 'react'
const buttons  = document.querySelectorAll('.btn');
const Button = ({range, setRange}) => {
    const handleRange = (e)=>{
        setRange(e.target.value);
        // removeAllActiveClass();
        // e.target.classList.add("active");
      }
    //   const removeAllActiveClass= ()=> {
    //     buttons.forEach((button) => button.classList.remove("active"));
    //   }
  return (
    <div className='range-select'>

    <button className={"btn " + (range === "long_term" ? "active" : "")} value={'long_term'} onClick={(e)=>handleRange(e)}>All Time</button>
    <button className={"btn " + (range === "medium_term" ? "active" : "")} value={'medium_term'} onClick={(e)=>handleRange(e)}>Six Months</button>
    <button className={"btn " + (range === "short_term" ? "active" : "")} value={'short_term'} onClick={(e)=>handleRange(e)}>This Month</button>
  </div>
  )
}

export default Button