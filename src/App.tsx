import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/navbar/Sidebar";
import Routes from "./router/Routes";
import { fetchDataAndPostToFirestore } from "./service/api";
import React from "react";

function App() {
  // Set an interval for a function that fetches from NYT and posts to firebase every 24 hrs
  // in a real world scenario this would be a cron job on the backend since this will only execte if someone is on the server
  setInterval(fetchDataAndPostToFirestore, 1000 * 60 * 60 * 24);
  return (
    <div className="App">
      <Navbar />
      <Sidebar />
      <Routes />
    </div>
  );
}

export default App;
