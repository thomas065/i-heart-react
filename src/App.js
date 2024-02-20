import HeartsList from './components/HeartsList';
import Header from './components/Header';
import './App.css';
import { Component } from "react";

 
class App extends Component {
  render() {
    return (
    <div>
      <Header />
      <HeartsList />
    </div>
  );
  }
}

export default App
