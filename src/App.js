import './App.css';
import Customer from './components/Customer.js';
import React, { Component } from 'react';

const customers=[{
  "name":"홍길동",
  "gender":"남자",
  "content":"책읽기가 취미임",
  "image":"https://placeimg.com/64/64/1"
},
{
  "name":"홍길동",
  "gender":"남자",
  "content":"책읽기가 취미임",
  "image":"https://placeimg.com/64/64/2"
},
{
  "name":"홍길동",
  "gender":"남자",
  "content":"책읽기가 취미임",
  "image":"https://placeimg.com/64/64/3"
}]
class  App extends Component{
  render(){
    return (
      <div>
        {
          customers.map(c=>{
            return (
            <Customer 
            image = {c.image}
            name={c.name}
            gender={c.gender}
            contnet={c.content}/>
            )
          })
        }
         </div>
       )
  }
}

export default App;
