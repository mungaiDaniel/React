import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';


class Counter extends React.Component{
  state = {
    counter: 0
  }
  increment = () =>{
    this.setState({counter: this.state.counter+1});
  }
  componentDidMount(){
    this.setState({counter: 42});
  }
  componentDidUpdate(){
    alert("Number of clicks:" + this.state.counter)
  }
  render(){
    return <div>
      <p>{this.state.counter}</p>
      <button onClick={this.increment}>Increment</button>
    </div>
  }
}
 
const el = <Counter/>; 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  el
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
