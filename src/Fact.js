import {useEffect, useState} from 'react';
import  './Fact.css';


export default function Fact(props) {
    const { data, facts, setArr} = props;
    const [active, setActive] = useState(false);
    const handleClick = () => {
        setActive(!active);
        

      };
    function toggle() {
        
        let temp = [
            ...facts
        ]
        let index = temp.indexOf(data)
        temp[index] = {
            fact: data.fact,
            i: index
        }
        setArr(temp)
    }


    return (
            <div onLoad={toggle} className="catFact"> 
                <div>
                    <button onClick={handleClick} className={active ? "black-btn" : "white-btn"}> {data.fact} </button>    
                    
                </div>
            </div>
            
    )
}