import React, { useState } from 'react';
import Create from './Create'
import "./App.css";

const Home = () => {
    const [todos,setTodos] = useState([]);
  return (
    <div class="home">
      <h2>To do List</h2>
      <Create />
      {
        
        todos.length===0?
        <div>No Record</div>
        :
        todos.map(todo => (
        <div>
            {todo}
        </div>
      ))}
    </div>
  )
}

export default Home
