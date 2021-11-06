import './App.css';
import Header from './Components/Header.js'
import SwipeButtons from './Components/SwipeButtons';
import TinderCard from './Components/TinderCard';

function App() {
  return (
    <div className="App">

      {/* Header */}
      <Header/>
      {/* tinder cards */}
      <TinderCard/>
      {/* swipe buttons */}
      <SwipeButtons/>
    </div>
  );
}

export default App;
