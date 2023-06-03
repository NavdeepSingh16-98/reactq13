import './Calculator.css'
import { useRef } from 'react';
import { useState } from 'react';
function Calculator(){

    const [resultDisplayed,setResultDisplayed] = useState(false);

    const input = useRef();

    const operators = ['+','-','*','/'];

    const numbers = [[7,8,9],[4,5,6],[1,2,3]];

    const numberClick = (e) =>{

        var currentString = input.current.innerHTML;
        var lastChar = currentString[currentString.length - 1];
    
        
        if (resultDisplayed === false) {
          input.current.innerHTML += e.target.innerHTML;
        } else if (resultDisplayed === true && lastChar === "+" || lastChar === "-" || lastChar === "*" || lastChar === "/") {
          
          
         // resultDisplayed = false;
         setResultDisplayed(false);
          input.current.innerHTML += e.target.innerHTML;
        } else {
          
          
         // resultDisplayed = false;
         setResultDisplayed(false)
          input.current.innerHTML = "";
          input.current.innerHTML += e.target.innerHTML;
        }
    }

    const operatorClick = (e) =>{

        var currentString = input.current.innerHTML;
        var lastChar = currentString[currentString.length - 1];
    
        
        if (lastChar === "+" || lastChar === "-" || lastChar === "*" || lastChar === "/") {
          var newString = currentString.substring(0, currentString.length - 1) + e.target.innerHTML;
          input.current.innerHTML = newString;
        } else if (currentString.length == 0) {
          
          console.log("enter a number first");
        } else {
          
          input.current.innerHTML += e.target.innerHTML;
        }


    }

    const resultClick = (e)=>{
        var inputString = input.current.innerHTML;

        if(isNaN(inputString[inputString.length-1])){
            console.log('enter valid expression')
        }
        else{
            input.current.innerHTML = eval(inputString);
        
            setResultDisplayed(true)
           // resultDisplayed = true; 
        }

    }
    const clearScreen = (e)=>{

        input.current.innerHTML = "";
    }

    // useEffect(()=>{

    //     console.log(input.current.innerHTML)
    // })

    return(
        <>
        
        <div className="calculator">
        <div className="input" id="input" ref={input}></div>
        <div className="buttons">
          <div className="operators">

            {
                operators.map((op,index)=>{
                    return (<div key={index} onClick={operatorClick}>{op}</div>)
                })
            }
          
          </div>
          <div className="numbersPanel">  <div className="leftPanel">

            {
                numbers.map((row,index)=>{

                    return (
                        <div key={index} className="numbers">

                            {
                                row.map((num,index1)=>{
                                    return (<div key={index1} onClick={numberClick}>{num}</div>)
                                })
                            }
                        </div>
                    )
                })
            }
          
            <div className="numbers">
              <div>0</div>
              <div>.</div>
              <div id="clear" onClick={clearScreen}>C</div>
            </div>
          </div>
          <div className="equal" id="result" onClick={resultClick}>=</div>
        </div></div>
        
      </div>
        </>
    )
}
export default Calculator