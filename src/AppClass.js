import React , { Component} from "react";

export default class AppClass extends Component{

    constructor (props){
        super(props);
        this.state={
            count:0
        }
    }
     increment =()=>{
        this.setState({
            count: this.state.count+1
        })
      }
       diccrement =()=>{
        this.setState({
            count: this.state.count-1
        })
      }

    render() {
        return (
        <div> 
 <h1> welocome to my counter app </h1>
      <p> The count is : {this.state.count}</p>
      <button onClick={this.diccrement}>-</button>
      <button onClick={this.increment}>+</button>
        </div>
        )
    }
}