import React from 'react';
import './App.css';
import myData from './data.json';

function App() {

  const el = myData.map((item, idx) => {
    return <div className='list-inner'>
      <h1 key="1" className="list-name">Name: {item.firstName}</h1>
      <p key="2" className="list-bio">Short Biography: {item.shortBiography}</p>
      <p key="3" className="list-phone">Phone: {item.phone}</p>
      <p key="4" className="list-email">Email: {item.email}</p>
    </div>
    
  })
  
  
  return (
    <div className="App">
      <div className='list'>
          {el}

      </div>
      
    </div>
  );
}

export default App;
