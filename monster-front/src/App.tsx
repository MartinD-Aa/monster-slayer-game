import './App.css';

function App() {
  return (
    <div className="App">
      <div id='game'>
      <section id="monster" className="container">
        <h2>Monster Health</h2>
        <div className="healthbar">
          <div className="healthbar__value"></div>
        </div>
      </section>
      </div>
      <section id="player" className="container">
        <h2>Your Health</h2>
        <div className="healthbar">
          <div className="healthbar__value" ></div>
        </div>
      </section>
      <section className="container" v-if="winner">
        <h2>Game Over!</h2>
        <h3 v-if="winner === 'monster'">You lost!</h3>
        <h3 v-else-if="winner === 'player'">You won!</h3>
        <h3 v-else>It's a draw!</h3>
        <button>Start New Game</button>
      </section>
      <section id="controls" v-else>
        <button >ATTACK</button>
        <button >
          SPECIAL ATTACK
        </button>
        <button >HEAL</button>
        <button >SURRENDER</button>
      </section>
      <section id="log" className="container">
        <h2>Battle Log</h2>
      </section>
    </div>
  );
}

export default App;
