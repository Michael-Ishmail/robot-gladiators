var playerName = window.prompt ('What is your robots name?')
var playerHealth = 100;
var playerAttack = 10;

console.log(playerName, playerHealth, playerAttack);

// By putting the variable element before the window prompt. we are able to capture and store the players input in a variable
// that can be used later in the code.

var enemyName = 'Roborto';
var enemyHealth = '50';
var enemyAttack = '12';



var fight = function(){
    window.alert ('Welcome to Robot Gladiators!');

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

};

// In javascript, you must first create the function and then call it. The function will not run if it is not called. Above is
// an example of a stored function. Below is an example of a called function.

fight ();