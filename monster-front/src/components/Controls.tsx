function Controls(props: 
  {player:number, 
    monster:number,
    round: number,
    gameState: Boolean,
    playerHealth: Function, 
    monsterHealth: Function, 
    roundCount: Function,
    state:Function
  }) {
    var currentRound = props.round;
    var currentGame = props.gameState;

  function attackPlayer(){
    var playerHP = props.player;
    const hit = randomTall(15, 8);
    if(playerHP - hit < 0){
      props.playerHealth(0);
    }else{
      props.playerHealth(playerHP-= hit);
    }
    currentRound++;
    props.roundCount(currentRound);
  }

  function attackMonster(){
    var monsterHP = props.monster;
    const hit = randomTall(12, 5);
    if(monsterHP - hit < 0){
      props.monsterHealth(0);
    } else{
      props.monsterHealth(monsterHP -= hit);
    }
    attackPlayer();
  }

  function specialAttack(){
    var monsterHP = props.monster;
    const hit = randomTall(20, 15);
    if(monsterHP - hit < 0){
      props.monsterHealth(0);
    } else{
      props.monsterHealth(monsterHP -= hit);
    }
    attackPlayer();
  }

  function healPlayer(){
    var playerHP = props.player;
    const heal = randomTall(20, 5);
    const hit = randomTall(15, 8);
    if(playerHP + (heal - hit) > 100){
      props.playerHealth(100);
    } else {
      props.playerHealth(playerHP += (heal - hit));
    }
    currentRound++;
    props.roundCount(currentRound);
  }

  function flee(){
    const num = randomTall(8, 2)
    if(num < 5){
      
    } else {
      props.state(!currentGame)
    }
  }

  function randomTall(min:number, max:number){
    return Math.floor(Math.random() * (max-min)) + min;
  }


    return (
    <section id="controls" className="container">
    <button onClick={attackMonster}>ATTACK</button>
    <button disabled={currentRound % 3 !== 0} onClick={specialAttack}>
      SPECIAL ATTACK
    </button>
    <button onClick={healPlayer}>HEAL</button>
    <button onClick={flee}>RUN</button>
  </section>
  );
}
export default Controls;