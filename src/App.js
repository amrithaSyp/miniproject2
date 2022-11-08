import './App.css';

import React from 'react';
import {useState, useEffect} from 'react';

function CatFacts() {
  const [facts, setFacts] = useState([]);
  var count = 0;
  const initial = facts => facts.slice(0, -1);

  const fetchData = async () => {
    const response = await fetch("https://catfact.ninja/fact");
    const data = await response.json();
    var array = [...facts, data.fact]
    console.log(array)
    setFacts(array);

  };


  useEffect(() => {
    fetchData();
  }, []);
  
    return (
        <div className = 'App-header'>
          <p className = 'title' >Cat Facts!</p> 
          <p id = 'currentFact'> {facts[facts.length-1]} </p>
          <button onClick={fetchData}>Give me a fact</button>
          <div className = 'pastFacts'> 
            <p> Past Facts!</p>
             {facts.map((facts, index) => (
              <div key={index}>
                  <p>{index + 1 }. {facts}  </p>
              </div>
           ))}
          
              {/* <p> Past Facts! </p>
              <p className = 'pfText'> {{array.notifications.map(txt => <p>{txt}</p>)}}</p> */}
          </div>
        </div>
    );
}




export default CatFacts;