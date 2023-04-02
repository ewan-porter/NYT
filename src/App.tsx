import './App.css';
import Navbar from './components/navbar/Navbar';
import Routes from './router/Routes';
import MyComponent from './service/api';
import React from 'react';

function App() {
  return (
    <div className='App'>
      {/* <MyComponent /> */}
      <Navbar />
      <Routes />
    </div>
  );
}

export default App;
