import './App.css';
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import Card from './components/card/Card';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero/>
      <Card/>
      <h1>App component</h1>
    </div>
  );
}

export default App;
