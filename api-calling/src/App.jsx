import React from 'react'
import axios from 'axios'

const App = () => {

  //fetch is a built in function in js which is used to make api calls and it returns a promise
// async function getData(){
// const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
// console.log(response);

//fetch data useing fetch and async await
// const getData= async()=>{
// const response = await fetch ('https://jsonplaceholder.typicode.com/todos/')
// // response.json() is a method which is used to convert the response into json format and it also returns a promise
// const data = await response.json();
// console.log(data);

//axios is a library which is used to make api calls and it returns a promise
 const getData = async()=>{
  const response = await axios.get('https://jsonplaceholder.typicode.com/todos/')
  console.log(response.data);


}
  return (
    <div>
      <button onClick = {getData}> Get Data</button>
    </div>
  )
}

export default App
