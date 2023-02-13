import './App.css';
import { Footer, Game, GameBonus, GameSelector } from './components';

function App() {
  return (
    <div className="App">
      <div className='gameSelector' id='gameSelector'>
        <GameSelector/>
      </div>
      <div className='game' id='gameNormal'>
        <Game/>
      </div>
      <div className='gameBonus' id='gameBonus'>
        <GameBonus/>
      </div>
      <Footer/>
      
    </div>
  );
}

export default App;
