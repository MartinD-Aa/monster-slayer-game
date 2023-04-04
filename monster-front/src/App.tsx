import "./App.css";
import Health from "./components/Health";
import Controls from "./components/Controls";
import GameOver from "./components/GameOver";
import Log from "./components/Log";
import { useState } from "react";

function App() {
  const [gameSession, setGameSession] = useState<Boolean>(false);
  const [playerHealth, setPlayerHealth] = useState<number>(100);
  const [monsterHealth, setMonsterHealth] = useState<number>(100);
  const [death, setDeath] = useState<Boolean>(false);
  const [turn, setTurn] = useState<number>(0);

  const SetHealthPlayer = (healthPlayer: number) => {
	setPlayerHealth(healthPlayer);
  };

  const SetHealthMonster = (healthMonster: number) => {
    setMonsterHealth(healthMonster);
  };

  const SetCurrentRound = (round: number) => {
    setTurn(round);
  };

  const SetGameState = (gameState: Boolean) => {
    setGameSession(gameState);
  };

  return (
    <div className="App">
      <div className="header">
        <h1>Monster Slayer</h1>
      </div>
      <Health player={playerHealth} monster={monsterHealth} />
      <GameOver />
      <Controls
        player={playerHealth}
        monster={monsterHealth}
        round={turn}
        gameState={gameSession}
        playerHealth={SetHealthPlayer}
        monsterHealth={SetHealthMonster}
        roundCount={SetCurrentRound}
        state={SetGameState}
      />
      <Log />
    </div>
  );
}

export default App;
