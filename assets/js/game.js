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
    window.alert ('The fight has begun!');
}

// In javascript, you must first create the function and then call it. The function will not run if it is not called. Above is
// an example of a stored function. Below is an example of a called function.

fight ();