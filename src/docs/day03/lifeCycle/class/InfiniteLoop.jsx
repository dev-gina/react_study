import React, { Component } from 'react';
 
// https://jsonplaceholder.typicode.com/users
class InfiniteLoop extends Component {

 state = {
  uesrs : []

 }

 componentDidMount = () => {
  const getDatas = async() => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const datas = await response.json()
    console.log("리랜더링")
    return datas;
  }
  getDatas().then((datas) => this.setState({users : datas}));
 }



 render() {

  const {users} = this.state;

  // const getDatas = async() => {
  //  const response = await fetch("https://jsonplaceholder.typicode.com/users")
  //  const datas = await response.json()
  //  console.log("리랜더링")
  //  return datas;
  // }

  // getDatas().then((datas) => this.setState({users : datas}));


  return (
   <div>
    {users.map((user, i) => <li key={i}>{user.name}</li>)}
   </div>
  );
 }
}

export default InfiniteLoop;



