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

    window.alert ('Welcome to Robot Gladiators!');

    var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter FIGHT or SKIP to choose.')

    if (promptFight === 'FIGHT' | promptFight === 'Fight'){
    
        //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable

        enemyHealth = enemyHealth - playerAttack;

        // Log a resulting message to the console so we know that it worked.

        console.log(
            playerName + ' attacked ' + enemyName + '. ' + enemyName + ' now has ' + enemyHealth + ' health remaining.'
        );

        //check enemy health

        if (enemyHealth <= 0) {
            window.alert(enemyName + ' has died!')
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
        }

        else {
            window.alert(playerName + ' still has ' + playerHealth + ' health remaining.')
        }
    } else if (promptFight === 'SKIP' | promptFight === 'Skip'){
        window.alert(playerName + ' has chosen to skip the fight.')

        var confirmSkip = window.confirm('Are you sure you would like to skip this fight?');

        if (confirmSkip){
            window.alert(playerName + ' has decided to skip this fight.');

            playerMoney = playerMoney - 2;
        } else {
            fight();
        }
    } else {
        window.alert('You need to choose a valid option. Try again!');
    }
    // Else if is a fall back if the IF conditions are not met. If both IF and ELSE IF conditions are not me, the default function
    // that would execute would be the ELSE function. 
};

// In javascript, you must first create the function and then call it. The function will not run if it is not called. Above is
// an example of a stored function. Below is an example of a called function.

for (i = 0; i < enemyNames.length; i++){
    fight(enemyNames[i]);
}

