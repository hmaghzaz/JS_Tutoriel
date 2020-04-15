// valeur constant
const ATTACK_VALUE = 10;
const STRONG_ATTACK_VALUE = 17;
const MONSTER_ATTACK_VALUE = 14;
const HEAL_VALUE = 20;
const MODE_ATTACK = "ATTACK";
const MODE_STRONG_ATTACK = "STRONG_ATTACK";
const LOG_EVENT_PLAYER_ATTACK = "PLAYER_ATTACK";
const LOG_EVENT_PLAYER_STRONG_ATTACK = "PLAYER_STRONG_ATTACK";
const LOG_EVENT_MONSTER_ATTACK = "MONSTER_ATTACK";
const LOG_EVENT_PLAYER_HEAL = "PLAYER_HEAL";
const LOG_EVENT_GAME_OVER = "GAME_OVER";
const BattleLog = [];

// max life is a number entred by user
const enteredValue = prompt("Maximum life for you and the monster", "100");

//store input user value
let chosenMaxLife = parseInt(enteredValue);
//check input is number
if (isNaN(chosenMaxLife) || chosenMaxLife <= 0) {
  chosenMaxLife = 100;
}

// initialize Monster health and player health and bonus life
let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;
let hasBonusLife = true;

//this function is implemented in vendor, to adjust health bars (player &  monster)
adjustHealthBars(chosenMaxLife);

/*this function do two thing first it allow the monster attack the player then check 
if the game si over or not
*/
function endRound() {
  //monster attack
  const initialPlayerHealth = currentPlayerHealth;
  const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
  currentPlayerHealth -= playerDamage;
  //log the monster attack
  writeToLog(
    LOG_EVENT_MONSTER_ATTACK,
    playerDamage,
    currentMonsterHealth,
    currentPlayerHealth
  );
  //check the bonus
  if (currentPlayerHealth <= 0 && hasBonusLife) {
    hasBonusLife = false;
    removeBonusLife();
    currentPlayerHealth = initialPlayerHealth;
    setPlayerHealth(initialPlayerHealth);
    alert("your bonus life save you !");
  }
  //check the end of the game
  if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
    alert("You won !");
    //log won
    writeToLog(
      LOG_EVENT_GAME_OVER,
      "Player Won",
      currentMonsterHealth,
      currentPlayerHealth
    );
  } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
    alert("You lost !");
    //log lost
    writeToLog(
      LOG_EVENT_GAME_OVER,
      "Monster Won",
      currentMonsterHealth,
      currentPlayerHealth
    );
  } else if (currentMonsterHealth <= 0 && currentPlayerHealth <= 0) {
    alert("You have a draw !");
    //log draw
    writeToLog(
      LOG_EVENT_GAME_OVER,
      "A DRAW",
      currentMonsterHealth,
      currentPlayerHealth
    );
  }
  // after the game is over we reset the game
  if (currentMonsterHealth <= 0 || currentPlayerHealth <= 0) {
    rest();
  }
}

//this function : player attacks
function attackMonster(mode) {
  // use ternary expression to store value based on a condition
  let maxDamage = mode === MODE_ATTACK ? ATTACK_VALUE : STRONG_ATTACK_VALUE;
  let logEvent =
    mode === MODE_ATTACK
      ? LOG_EVENT_PLAYER_ATTACK
      : LOG_EVENT_PLAYER_STRONG_ATTACK;
  //calculate damage using function from vendor
  const damage = dealMonsterDamage(maxDamage);
  //store new monster health
  currentMonsterHealth -= damage;
  //log the event
  writeToLog(logEvent, damage, currentMonsterHealth, currentPlayerHealth);
  //allow monster to attack the user
  endRound();
}

//this function to rest the game after the game is over, restgame is implimented in vendor
function rest() {
  currentMonsterHealth = chosenMaxLife;
  currentPlayerHealth = chosenMaxLife;
  resetGame(chosenMaxLife);
}

//this function serve to write log
function writeToLog(ev, val, monsterHealth, playerHealth) {
  let logEntry;
  switch (ev) {
    case LOG_EVENT_PLAYER_ATTACK:
      logEntry = {
        event: ev,
        value: val,
        target: "Monster",
        finalMonsterHealth: monsterHealth,
        finalPlayerHealth: playerHealth,
      };
      break;
    case LOG_EVENT_PLAYER_STRONG_ATTACK:
      logEntry = {
        event: ev,
        value: val,
        target: "Monster",
        finalMonsterHealth: monsterHealth,
        finalPlayerHealth: playerHealth,
      };
      break;
    case LOG_EVENT_MONSTER_ATTACK:
      logEntry = {
        event: ev,
        value: val,
        target: "Player",
        finalMonsterHealth: monsterHealth,
        finalPlayerHealth: playerHealth,
      };
      break;
    case LOG_EVENT_PLAYER_HEAL:
      logEntry = {
        event: ev,
        value: val,
        finalMonsterHealth: monsterHealth,
        finalPlayerHealth: playerHealth,
      };
      break;
    case LOG_EVENT_GAME_OVER:
      logEntry = {
        event: ev,
        value: val,
        finalMonsterHealth: monsterHealth,
        finalPlayerHealth: playerHealth,
      };
      break;
    default:
      logEntry = {};
  }
  BattleLog.push(logEntry);
}

// this function is called when the attack button is clicked
function attackHandler() {
  attackMonster(MODE_ATTACK);
}
// this function is called when the strong attack button is clicked
function strongAttackHandler() {
  attackMonster(MODE_STRONG_ATTACK);
}

// this function is called when the heal button is clicked
function healPlayerHandle() {
  let healValue;
  if (currentPlayerHealth >= chosenMaxLife - HEAL_VALUE) {
    healValue = chosenMaxLife - currentPlayerHealth;
  } else healValue = HEAL_VALUE;
  increasePlayerHealth(healValue);
  currentPlayerHealth += healValue;
  writeToLog(
    LOG_EVENT_PLAYER_HEAL,
    healValue,
    currentMonsterHealth,
    currentPlayerHealth
  );
  endRound();
}
// this function is called when the show log button is clicked
function printLogHandler() {
  console.log(BattleLog);
}

// this is listnere to the click buttons
attackBtn.addEventListener("click", attackHandler);
strongAttackBtn.addEventListener("click", strongAttackHandler);
healBtn.addEventListener("click", healPlayerHandle);
logBtn.addEventListener("click", printLogHandler);
