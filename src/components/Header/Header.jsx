import React from 'react';
// import img from  "./foto.jpg";


const Header = (props) => {
  return (
    <div>
      {/* <img src={img} alt="logo" /> */}
      <h1>{props.title}</h1>
      <h2>{props.subtitle}</h2>
      <button type="button" class="btn btn-primary">Primary</button>
    </div>
  )
}

export default Header
