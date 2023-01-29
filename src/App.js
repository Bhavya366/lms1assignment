import React from 'react';
import logo from './lizard.jpeg';
import './lms1.css';

//use functional component
const App = () => {
    return (
        <div className='outer-box'>
        <div className='box'>
          <div><img src={logo} />
          <h2>Lizard</h2>
          <p>Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antartica.</p>
          <a href='#'>SHARE</a>&nbsp;&nbsp;&nbsp;
          <a href='#'>LEARN MORE</a></div>
        </div></div>
    );
};

export default App;