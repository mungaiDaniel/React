import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';


function Converter(){
  const [km, setKm] = useState(0);

  function handleChange(e){
    setKm(e.target.value);
  }
  function convert(km){
    return (km/1.609).toFixed(2);
  }
  return <div>
    <input type="text" value={km}
      onChange={handleChange}/>
      <p>{km} km is {convert(km)} miles</p>
  </div>;
}
 
const el = <Converter/>; 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  el
);
function AddForm(){
  const [sum, setSum] = useState(0);
  const [num, setNum] = useState(0);

  function handleChange(e){
    setNum(e.target.value);
  }
  function handleSubmit(e){
    setSum(sum + Number(num));
    e.preventDefault();
  }
  return <form onSubmit={handleSubmit}>
    <input type="text" onChange={handleChange}  value={num}/>
    <input type="submit" value="Add" />
    <p>Sum is {sum}</p>
  </form>
}
const el2 = <AddForm/>
const root2 = ReactDOM.createRoot(document.getElementById('root2'));
root2.render(el2);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
