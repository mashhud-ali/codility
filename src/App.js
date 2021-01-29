import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import './Todo.css'
import Form from './Form';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Form/>
    </div>
    </BrowserRouter>
  );
}

export default App;
