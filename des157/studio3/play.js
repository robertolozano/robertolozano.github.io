let POKEMON1 = 0;
let POKEMON2 = 1;
let BACKGROUNDVOLUME = 0.05;
let HEALTHREGAIN = -30;

let gameData = {
    greendice: [
        'dice1green.png',
        'dice2green.png',
        'dice3green.png',
        'dice4green.png',
        'dice5green.png',
        'dice6green.png',
    ],
    bluedice: [
        'dice1blue.png',
        'dice2blue.png',
        'dice3blue.png',
        'dice4blue.png',
        'dice5blue.png',
        'dice6blue.png'
    ],
    reddice: [
        'dice1red.png',
        'dice2red.png',
        'dice3red.png',
        'dice4red.png',
        'dice5red.png',
        'dice6red.png',
    ],
    rolledDice: [

    ],
    roll: 0,
    gameTurn: 0,
    pokemon1: {
        name: "Charmander",
        health: 100,
        pokemon_art: "images/charmander.png"
    },
    pokemon2: {
        name: "Pikachu",
        health: 100,
        pokemon_art: "images/pikachu.png"
    }
};

let useTurn = document.getElementById("use_turn");
let passTurn = document.getElementById("pass_turn");

let pokemon1Health = document.getElementById("pokemon_1_health");
let pokemon2Health = document.getElementById("pokemon_2_health");

let pokemon1Name = document.getElementById("pokemon_1_name");
let pokemon2Name = document.getElementById("pokemon_2_name");

let pokemon1Art = document.getElementById("pokemon_1_art");
let pokemon2Art = document.getElementById("pokemon_2_art");

let diceRoll = document.getElementById("dice_roll_img");

let game_description = document.getElementById("game_description");

let lightning = document.getElementById("lightning");
let flame = document.getElementById("flame");

let pokemon_1_health_text = document.getElementById("pokemon_1_health_text");
let pokemon_2_health_text = document.getElementById("pokemon_2_health_text");

let gameMenu= document.getElementById("game_menu_button");
let gameMenuOverlay = document.getElementById("game_menu_overlay");

let closeMenuButton = document.getElementById("close_menu_button");

let toggleVolume = document.getElementById("toggleVolume");

let backgroundMusic = document.getElementById("background_music");
let heal_up = document.getElementById("heal_up");
let fire_attack = document.getElementById("fire_attack");
let electric_attack = document.getElementById("electric_attack");

let winnerOverlay = document.getElementById("winner_overlay");
let winnerImg = document.getElementById("winner_overlay_img");
let winnerName = document.getElementById("winner_overlay_name");
let winnerOverlayReset = document.getElementById("winner_overlay_reset");

let startGameButton = document.getElementById("start_game_button");
let containerIndex = document.getElementById("container_index");
let container = document.getElementById("container");
let quitGame = document.getElementById("quit_game");

let footer = document.getElementById("footer");

quitGame.addEventListener("click", function(){
    location.reload();
});

startGameButton.addEventListener("click", function(){
    footer.className = "invisible"
    containerIndex.className = "invisible";
    containerIndex.className = "invisible";
    container.className = "visible";
    backgroundMusic.volume = BACKGROUNDVOLUME;
    heal_up.volume = "1"
    fire_attack.volume = "1"
    electric_attack.volume = "1"
    backgroundMusic.loop = true;
    backgroundMusic.play();
});

winnerOverlayReset.addEventListener("click", function(){
    location.reload();
});

toggleVolume.addEventListener("click", function(){
    console.log("toggling volume");
    if(backgroundMusic.volume != "0"){
        backgroundMusic.volume = "0"
        heal_up.volume = "0"
        fire_attack.volume = "0"
        electric_attack.volume = "0"   
    }
    else{
        backgroundMusic.volume = "0.25"
        heal_up.volume = "1"
        fire_attack.volume = "1"
        electric_attack.volume = "1"
    }
});


closeMenuButton.addEventListener("click", function(){
    console.log("closing overlay");
    gameMenuOverlay.className = "game_menu_overlay_invisible";
});

gameMenu.addEventListener("click", function(){
    console.log("cliking on overlay");
    gameMenuOverlay.className = "game_menu_overlay_visible";
});

game_description.textContent = ``;

useTurn.addEventListener('click', function(){
    throwDice();
});

passTurn.addEventListener('click', function(){
    changeTurn();
});

function adjustHealth(pokemonID, damage){
    if(pokemonID == POKEMON1){
        gameData.pokemon1.health = gameData.pokemon1.health - damage;
        if(gameData.pokemon1.health > 100){
            gameData.pokemon1.health = 100;
        }
        if(gameData.pokemon1.health < 0){
            gameData.pokemon1.health = 0;
        }
        percentage = gameData.pokemon1.health/100;
        newWidth = 93 * percentage;
        if(gameData.gameTurn == POKEMON1){
            pokemon1Health.style.width =`${newWidth}%`;
            pokemon_1_health_text.textContent = gameData.pokemon1.health + "/100";
        }
        else{
            pokemon2Health.style.width =`${newWidth}%`;
            pokemon_2_health_text.textContent = gameData.pokemon1.health + "/100";
        }
    }
    else{
        gameData.pokemon2.health = gameData.pokemon2.health - damage;

        if(gameData.pokemon2.health > 100){
            gameData.pokemon2.health = 100;
        }
        if(gameData.pokemon2.health < 0){
            gameData.pokemon2.health = 0;
        }
        percentage = gameData.pokemon2.health/100;
        newWidth = 93 * percentage;
        if(gameData.gameTurn == POKEMON1){
            pokemon2Health.style.width =`${newWidth}%`;
            pokemon_2_health_text.textContent = gameData.pokemon2.health + "/100";
        }
        else{
            pokemon1Health.style.width =`${newWidth}%`;
            pokemon_1_health_text.textContent = gameData.pokemon2.health + "/100";
        }
    }
}

function changeTurn(){
    clearDice();
    if(gameData.gameTurn == POKEMON1){
        pokemon1Name.textContent = gameData.pokemon2.name;
        pokemon2Name.textContent = gameData.pokemon1.name;

        pokemon_1_health_text.textContent = gameData.pokemon2.health + "/100";
        pokemon_2_health_text.textContent = gameData.pokemon1.health + "/100";

        pokemon1Art.src = "images/pikachu2.png";
        pokemon2Art.src = "images/charmander2.png";
    }
    else{
        pokemon1Name.textContent = gameData.pokemon1.name;
        pokemon2Name.textContent = gameData.pokemon2.name;

        pokemon_1_health_text.textContent = gameData.pokemon1.health + "/100";
        pokemon_2_health_text.textContent = gameData.pokemon2.health + "/100";

        pokemon1Art.src = "images/charmander.png";
        pokemon2Art.src = "images/pikachu.png";
    }
    gameData.gameTurn ? (gameData.gameTurn = POKEMON1) : (gameData.gameTurn = POKEMON2);
    adjustHealth(POKEMON1, 0);
    adjustHealth(POKEMON2, 0);
}


function throwDice(){
    gameData.roll = Math.floor(Math.random() * 6) + 1;
    diceRoll.src = "./images/" + gameData.greendice[gameData.roll-1];
    if(gameData.rolledDice.includes(gameData.roll)){
        //switch turns and heal opponent
        clearDice();
        if(gameData.gameTurn == POKEMON1){
            game_description.textContent = `${gameData.pokemon1.name} attack missed! ${gameData.pokemon2.name} had time to heal. It is now ${gameData.pokemon2.name}'s turn`;
            adjustHealth(POKEMON2, HEALTHREGAIN);
        }
        else{
            game_description.textContent = `${gameData.pokemon2.name} attack missed! ${gameData.pokemon1.name} had time to heal. It is now ${gameData.pokemon1.name}'s turn`;
            adjustHealth(POKEMON1, HEALTHREGAIN);

        }
        health.className="appearing";
        heal_up.play();
        setTimeout(function(){
            health.className="attack_hidden";
            changeTurn();
        }, 2000);
    }
    else{
        //do damage to opponent
        let dice_to_change = document.getElementById(`dice_${gameData.roll}_img`)
        dice_to_change.src = "./images/" + `dice${gameData.roll}red.png`;

        gameData.rolledDice.push(gameData.roll);
        gameData.rolledDice = [...new Set(gameData.rolledDice)];
        console.log(gameData.rolledDice);
        if(gameData.gameTurn == POKEMON1){
            game_description.textContent = `${gameData.pokemon1.name}'s attack hit! ${gameData.pokemon2.name} took some damage. It is still ${gameData.pokemon1.name}'s turn`;
            adjustHealth(POKEMON2, 20);
            flame.className = "bottom_to_top"
            fire_attack.play();
            setTimeout(function(){
                flame.className = "attack_hidden"
            }, 1000);
        }
        else{
            game_description.textContent = `${gameData.pokemon2.name}'s attack hit! ${gameData.pokemon1.name} took some damage. It is still ${gameData.pokemon2.name}'s turn`;
            adjustHealth(POKEMON1, 20);
            lightning.className = "bottom_to_top"
            electric_attack.play();
            setTimeout(function(){
                lightning.className = "attack_hidden"
            }, 1000);
        }
        checkWinningCondition();
    }
}

function checkWinningCondition(){
    if(gameData.pokemon1.health <= 0){
        console.log(`${gameData.pokemon2.name} won!`)
        game_description.textContent = `${gameData.pokemon2.name} won!`;
        winnerName.textContent = `${gameData.pokemon2.name} won!`;
        winnerImg.src = `${gameData.pokemon2.pokemon_art}`;
        setTimeout(function(){
            winnerOverlay.className = "game_menu_overlay_visible";
        }, 1500);
    }
    if(gameData.pokemon2.health <= 0){
        console.log(`${gameData.pokemon1.name} won!`)
        game_description.textContent = `${gameData.pokemon1.name} won!`;
        winnerName.textContent = `${gameData.pokemon1.name} won!`;
        winnerImg.src = `${gameData.pokemon1.pokemon_art}`;
        setTimeout(function(){
            winnerOverlay.className = "game_menu_overlay_visible";
        }, 1500);
    }
}

function clearDice(){
    gameData.rolledDice = [];
    for(i = 1; i < 7; i++){
        let dice_to_change = document.getElementById(`dice_${i}_img`)
        dice_to_change.src = "./images/" + `dice${i}blue.png`;
    }
}

function resetGame(){
    location.reload();
}