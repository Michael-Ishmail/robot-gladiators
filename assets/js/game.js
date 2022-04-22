var playerName = window.prompt ('What is your robots name?')
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

console.log(playerName, playerHealth, playerAttack);

// By putting the variable element before the window prompt. we are able to capture and store the players input in a variable
// that can be used later in the code.

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = '50';
var enemyAttack = '12';

var fight = function(enemyName){

    while (playerHealth > 0 && enemyHealth > 0){
        

        var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter FIGHT or SKIP to choose.')

         if (promptFight === 'SKIP' | promptFight === 'Skip' | promptFight === 'skip'){
              var confirmSkip = window.confirm('Are you sure you would like to skip this fight?');
            }

         if (confirmSkip){
             window.alert(playerName + ' has decided to skip this fight.');

              playerMoney = playerMoney - 10;
              console.log('Player money ', playerMoney);
              break;
         }
    
         //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable

            enemyHealth = enemyHealth - playerAttack;

         // Log a resulting message to the console so we know that it worked.

         console.log(
             playerName + ' attacked ' + enemyName + '. ' + enemyName + ' now has ' + enemyHealth + ' health remaining.'
            );

            //check enemy health

         if (enemyHealth <= 0) {
            window.alert(enemyName + ' has died!')
            break;
         }

         else {
            window.alert(enemyName + ' still has ' + enemyHealth + ' health remaining.')
         }

         // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.

         playerHealth = playerHealth - enemyAttack;

         // Log a resulting message to the console so we know that it worked.

         console.log(
                enemyName + ' attacked ' + playerName + '. ' + playerName + ' now has ' + playerHealth + ' health remaining.'
         );

          if (playerHealth <= 0) {
             window.alert(playerName + ' has died!')
             break;
          }

         else {
             window.alert(playerName + ' still has ' + playerHealth + ' health remaining.')
         }
         
    }
    // Else if is a fall back if the IF conditions are not met. If both IF and ELSE IF conditions are not me, the default function
    // that would execute would be the ELSE function. 
};
    

    

// In javascript, you must first create the function and then call it. The function will not run if it is not called. Above is
// an example of a stored function. Below is an example of a called function.

var startGame = function(){
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;

    for (i = 0; i < enemyNames.length; i++){
         if (playerHealth > 0){
             window.alert("Welcome to robot gladiators! Round " + (i + 1) );
             var pickedEnemyName = enemyNames[i];
             enemyHealth = 50
             debugger;
             fight(pickedEnemyName);

             if (playerHealth > 0 && i < enemyNames.length - 1) {
                 var storeConfirm = window.confirm('Enter the shop before the next round?');
             }

             if (storeConfirm) {
                 shop();
             }
         
    }
    
    else {
        window.alert('You have lost your robot in battle! Game over!');
    }
    }
    endGame();
}

var endGame = function(){
    if (playerHealth > 0 ){
        window.alert("Great job, you've survived the game! You now have a score of " + playerMoney +".");
    }

    else {
        window.alert("You've lost your robot in battle.");
    }

    var playAgainConfirm = window.confirm('Would you like to play again?');

    if (playAgainConfirm) {
        startGame();
    }

    else {
        window.alert('Thank you for playing Robot Gladiators! Come back soon!');
    }


}

var shop = function () {
    var shopOptionpromp = window.prompt(
        "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the shop? Please enter one: REFILL, UPGRADE, or LEAVE to make a choice."
    )

    switch (shopOptionpromp) {
        case "REFILL":
        case "refill":
            if (playerMoney >= 7 ){
            window.alert("Refilling player's health by 20 for 7 dollars.");
            playerHealth = playerHealth + 20;
            playerMoney = playerMoney - 7;
            break;
            }

            else {
                window.alert("You don't have enough money!");
            }

        case "UPGRADE":
        case "upgrade":
            if (playerMoney >= 7 ){
            window.alert("Upgrading the player's attack by 6 for 7 dollars.");
            playerAttack = playerAttack + 6;
            playerMoney = playerMoney - 7;
            break;
            }
            
            else {
                window.alert("You don't have enough money!");
            }

        case "LEAVE":
        case "leave":
            window.alert("Leaving the shop.");
            break;

        default:
            window.alert("You did not pick a valid option. Try again.");
            shop();
            break;
    }
}

startGame();