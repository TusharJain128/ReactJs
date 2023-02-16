import React from "react";
import "./style.css";

export default class App extends React.Component{
  constructor(){
    super()
      this.state={
        count:0
      }
  }
  increment(){
    this.setState({count : this.state.count+1})
  }
  decrement(){
    this.setState({count : this.state.count-1})
  }
  reset(){
    this.setState({count: 0})
  }
  render(){
    return(
      <div>
        <button onClick={()=>this.increment()}>increase</button><br/>
        <h1>{this.state.count}</h1><br/>
        <button onClick={()=>this.decrement()}>decrease</button>
        <button onClick={()=>this.reset()}>reset</button>
      </div>
    )
  }
}