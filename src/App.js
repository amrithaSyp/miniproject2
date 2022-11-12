import './App.css';
import {useEffect, useState} from 'react';
import Fact from './Fact';
import Pagination from './Pagination';

function App() {

  const [facts, setFacts] = useState({})
  const [factArray, setFactArray] = useState([])
  const [page, setPage] = useState(1);
  const [num, setNum] = useState(0)
  const [splicedArr, setSplicedArr] = useState([]);
  var first;
  var end;


  useEffect(() => {
    var array = factArray;
    first = 2 + ((page - 1) * 10);
    end = 12 + ((page - 1) * 10);
    var newArr = array.slice(first, end);
    setSplicedArr(newArr);
  }, [factArray, page, num])
  
  useEffect(() => {
    var array = [...factArray]    
    array.push(facts)
    setFactArray(array);
    fetch("https://catfact.ninja/fact")
    .then((res) => res.json())
    .then((data) => {
      let newFact = {
        fact: data.fact,
      }
      setFacts(newFact)});
  }, [num])

  useEffect(() => {
    if ((num - 1) % 10 == 0 && num > 1) {
      setPage(page + 1);
    }
  }, [num])

  return (
    <div className = 'App-header'>
      <p className = 'title' >Cat Facts!</p> 
      <p id = 'currentFact'> {facts.fact} </p>
      <button id="getFact" onClick={() => setNum(num + 1)}>Give me a fact</button>
      <div className = "pastFacts"> 
      <p> Past Facts! Click to Favorite</p>
      {splicedArr.map((e) => {
                let x = splicedArr.indexOf(e)
                return <Fact data={e} key={x} catFactArray={factArray} setCatFactArray={setFactArray}></Fact>;
            })}
      </div>
      <div>
      <Pagination index={page} setIndex={setPage} num={num}></Pagination>
      </div>
    </div>
  );
}
export default App;