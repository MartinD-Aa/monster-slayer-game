function Controls(props: 
  {player:number, 
    monster:number,
    round: number,
    playerHealth: Function, 
    monsterHealth: Function, 
    roundCount: Function
  }) {
    var currentRound = props.round; 

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
    const heal = randomTall(15, 5);
    const hit = randomTall(15, 8);
    if(playerHP + (heal - hit) > 100){
      props.playerHealth(100);
    } else {
      props.playerHealth(playerHP += (heal - hit));
    }
    currentRound++;
    props.roundCount(currentRound);
  }

  function randomTall(min:number, max:number){
    return Math.floor(Math.random() * (max-min)) + min;
  }


    return (
    <section id="controls">
    <button onClick={attackMonster}>ATTACK</button>
    <button disabled={currentRound % 3 !== 0} onClick={specialAttack}>
      SPECIAL ATTACK
    </button>
    <button onClick={healPlayer}>HEAL</button>
    <button >RUN</button>
  </section>
  );
}
export default Controls;