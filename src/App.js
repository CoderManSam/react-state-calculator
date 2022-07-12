import "./App.css"
import React, {useState} from 'react';

function App() { 

  const [firstInteger, setFirstInteger] = useState("0")
  const [operation, setOperation] = useState('+')
  const [secondInteger, setSecondInteger] = useState("0")
  const [total, setTotal] = useState(0)
  const [store, setStore] = useState(0)

  return (
    <div className="calculator">
        <div className="panel">
          <p>{firstInteger}</p>
          <div className="numbers">
            <button onClick={()=> firstInteger === "0" ? setFirstInteger("1") : setFirstInteger(firstInteger+"1")}>1</button>
            <button onClick={()=> firstInteger === "0" ? setFirstInteger("2") : setFirstInteger(firstInteger+"2")}>2</button>
            <button onClick={()=> firstInteger === "0" ? setFirstInteger("3") : setFirstInteger(firstInteger+"3")}>3</button>
            <button onClick={()=> firstInteger === "0" ? setFirstInteger("4") : setFirstInteger(firstInteger+"4")}>4</button>
            <button onClick={()=> firstInteger === "0" ? setFirstInteger("5") : setFirstInteger(firstInteger+"5")}>5</button>
            <button onClick={()=> firstInteger === "0" ? setFirstInteger("6") : setFirstInteger(firstInteger+"6")}>6</button>
            <button onClick={()=> firstInteger === "0" ? setFirstInteger("7") : setFirstInteger(firstInteger+"7")}>7</button>
            <button onClick={()=> firstInteger === "0" ? setFirstInteger("8") : setFirstInteger(firstInteger+"8")}>8</button>
            <button onClick={()=> firstInteger === "0" ? setFirstInteger("9") : setFirstInteger(firstInteger+"9")}>9</button>
            <button onClick={()=> firstInteger === "0" ? setFirstInteger("0") : setFirstInteger(firstInteger+"0")}>0</button>
            <button onClick={()=> setFirstInteger("0")}>Clear</button>
            <button onClick={()=> setFirstInteger(store)}>recall</button>
          </div>
        </div>
        
        <div className="panel">
          <p>{operation}</p>
          <div className="numbers">
            <button onClick={()=> setOperation("+")}>+</button>
            <button onClick={()=> setOperation("-")}>-</button>
            <button onClick={()=> setOperation("*")}>*</button>
            <button onClick={()=> setOperation("÷")}>÷</button>
          </div>
        </div>

        <div className="panel">
          <p>{secondInteger}</p>
          <div className="numbers">
            <button onClick={()=> secondInteger === "0" ? setSecondInteger("1") : setSecondInteger(secondInteger+"1")}>1</button>
            <button onClick={()=> secondInteger === "0" ? setSecondInteger("2") : setSecondInteger(secondInteger+"2")}>2</button>
            <button onClick={()=> secondInteger === "0" ? setSecondInteger("3") : setSecondInteger(secondInteger+"3")}>3</button>
            <button onClick={()=> secondInteger === "0" ? setSecondInteger("4") : setSecondInteger(secondInteger+"4")}>4</button>
            <button onClick={()=> secondInteger === "0" ? setSecondInteger("5") : setSecondInteger(secondInteger+"5")}>5</button>
            <button onClick={()=> secondInteger === "0" ? setSecondInteger("6") : setSecondInteger(secondInteger+"6")}>6</button>
            <button onClick={()=> secondInteger === "0" ? setSecondInteger("7") : setSecondInteger(secondInteger+"7")}>7</button>
            <button onClick={()=> secondInteger === "0" ? setSecondInteger("8") : setSecondInteger(secondInteger+"8")}>8</button>
            <button onClick={()=> secondInteger === "0" ? setSecondInteger("9") : setSecondInteger(secondInteger+"9")}>9</button>
            <button onClick={()=> secondInteger === "0" ? setSecondInteger("0") : setSecondInteger(secondInteger+"0")}>0</button>
            <button onClick={()=> setSecondInteger("0")}>Clear</button>
            <button onClick={()=> setSecondInteger(store)}>recall</button>
          </div>
        </div>

        <div className="panel answer">
          <p>{total}</p>
          <div>
            <button onClick={()=> 
              {if (operation === "+") {setTotal(+firstInteger + +secondInteger)}
              else if (operation === "-") {setTotal(+firstInteger - +secondInteger)}
              else if (operation === "*") {setTotal(+firstInteger * +secondInteger)}
              else if (operation === "÷") {setTotal(+firstInteger / +secondInteger)}
            }}>
              =
            </button>
            <button onClick={()=> setStore(total)}>Store</button>
            <button onClick={()=> setTotal(0)}>Clear</button>
          </div>
        </div>
    </div>
  )
}

export default App
