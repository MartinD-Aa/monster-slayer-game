import './App.css';
import MonsterHealth from './components/MonsterHealth';
import PlayerHealth from './components/PlayerHealth';
import Controls from './components/Controls';
import GameOver from './components/GameOver';
import Log from './components/Log';

function App() {
  return (
    <div className="App">
      <MonsterHealth/>
      <PlayerHealth/>
      <GameOver/>
      <Controls/>
      <Log/>
    </div>
  );
}

export default App;
