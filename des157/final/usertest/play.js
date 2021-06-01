let POKEMON1 = 0;
let POKEMON2 = 1;
let BACKGROUNDVOLUME = 0.05;
let HEALTHREGAIN = -30;

window.onload = function(){
    alert("Hi! Welcome to my game. It follows the journey of fighting obstacles you encounter during college\n 1.Try walking around first!\n2.Try initiating the battle!\n3.Try winning the battle!");
};

let gameData = {
    gameTurn: 0,
    level: 0,
    pokemon1: {
        name: "Roberto",
        health: 100,
        pokemon_art: "images/sprite1.png",
        pokemon_art_reversed: "images/spriterev1.png"
    },
    pokemon2: {
        name: "Physics and Math",
        health: 100,
        pokemon_art: "images/enemy1.png"
    },
    pokemon3: {
        name: "Turkey",
        health: 100,
        pokemon_art: "images/charmander.png"
    }
};

let attack1 = document.getElementById("attack1");
let attack2 = document.getElementById("attack2");
let attack3 = document.getElementById("attack3");
let attack4 = document.getElementById("attack4");

let pokemon1Health = document.getElementById("pokemon_1_health");
let pokemon2Health = document.getElementById("pokemon_2_health");

let pokemon1Name = document.getElementById("pokemon_1_name");
let pokemon2Name = document.getElementById("pokemon_2_name");

let pokemon1Art = document.getElementById("pokemon_1_art");
let pokemon2Art = document.getElementById("pokemon_2_art");

let game_description = document.getElementById("game_description");

let lightning = document.getElementById("lightning");
let flame = document.getElementById("flame");

let pokemon_1_health_text = document.getElementById("pokemon_1_health_text");
let pokemon_2_health_text = document.getElementById("pokemon_2_health_text");

let gameMenu = document.getElementById("game_menu_button");
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

let screen = document.getElementById("screen_container");

let instructions = document.getElementById("instructions");

quitGame.addEventListener("click", function(){
    location.reload();
});

winnerOverlayReset.addEventListener("click", function(){
    // location.reload();
    containerIndex.className = "invisible";
    winnerOverlay.className = "invisible";
    screen.className = "visible"
    container.className = "invisible";   
    backgroundMusic.pause()
    // TODO: Return to overworld, don't reload game.
});

toggleVolume.addEventListener("click", function(){
    console.log("toggling volume");
    if(backgroundMusic.volume != "0"){
        backgroundMusic.volume = "0";
        heal_up.volume = "0";
        fire_attack.volume = "0";
        electric_attack.volume = "0";   
    }
    else{
        backgroundMusic.volume = "0.25";
        heal_up.volume = "1";
        fire_attack.volume = "1";
        electric_attack.volume = "1";
    }
});

closeMenuButton.addEventListener("click", function(){
    console.log("closing overlay");
    gameMenuOverlay.className = "invisible";
});

gameMenu.addEventListener("click", function(){
    console.log("cliking on overlay");
    gameMenuOverlay.className = "visible";
});

game_description.textContent = ``;

attack1.addEventListener('click', function(){
    // throwDice();
    console.log("attack1");
    game_description.textContent = `${gameData.pokemon1.name}'s studied! ${gameData.pokemon2.name} took some damage.`;
    adjustHealth(POKEMON2, 20);
    flame.className = "bottom_to_top"
    fire_attack.play();
    setTimeout(function(){
        flame.className = "attack_hidden"
    }, 1000);
    checkWinningCondition();
});

attack2.addEventListener('click', function(){
    // changeTurn();
    console.log("attack2");
    game_description.textContent = `${gameData.pokemon1.name}'s attack hit! ${gameData.pokemon2.name} took some damage.`;
    adjustHealth(POKEMON2, 20);
    lightning.className = "bottom_to_top"
    electric_attack.play();
    setTimeout(function(){
        lightning.className = "attack_hidden"
    }, 1000);
    checkWinningCondition();
});

attack3.addEventListener('click', function(){
    // throwDice();
    console.log("attack3");

    game_description.textContent = `${gameData.pokemon1.name} drank some coffee!`;
    adjustHealth(POKEMON1, HEALTHREGAIN);
    health.className="appearing";
    heal_up.play();
    setTimeout(function(){
        health.className="attack_hidden";
    }, 2000);
});

attack4.addEventListener('click', function(){
    // changeTurn();
    game_description.textContent = `${gameData.pokemon1.name} cried! It wasn't very effective`;
    console.log("attack4");
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

function checkWinningCondition(){
    if(gameData.pokemon1.health <= 0){
        console.log(`${gameData.pokemon2.name} won!`)
        game_description.textContent = `${gameData.pokemon2.name} won!`;
        winnerName.textContent = `${gameData.pokemon2.name} won!`;
        winnerImg.src = `${gameData.pokemon2.pokemon_art}`;
        setTimeout(function(){
            winnerOverlay.className = "visible";
        }, 1500);
    }
    if(gameData.pokemon2.health <= 0){
        console.log(`${gameData.pokemon1.name} won!`)
        game_description.textContent = `${gameData.pokemon1.name} won!`;
        winnerName.textContent = `${gameData.pokemon1.name} won!`;
        winnerImg.src = `${gameData.pokemon1.pokemon_art}`;
        setTimeout(function(){
            winnerOverlay.className = "visible";
        }, 1500);
    }
    gameData.level++;
}

function resetGame(){
    location.reload();
}

let spriteArray = ["images/sprite1.png","images/sprite2.png","images/sprite1.png","images/sprite3.png"]
let spriteRevArray = ["images/spriterev1.png","images/spriterev2.png","images/spriterev1.png","images/spriterev3.png"]
let spriteDownArray = ["images/spriteDown1.png","images/spriteDown2.png","images/spriteDown1.png","images/spriteDown3.png"]
let spriteUpArray = ["images/spriteUp1.png","images/spriteUp2.png","images/spriteUp1.png","images/spriteUp3.png"]
let currentSprite = 0;
let movementAmountX = 10
let currentPosX = 0;
let currentPosY = 0;
let keyPresses = {};

window.addEventListener('keydown', keyDownListener);
function keyDownListener(event) {
    keyPresses[event.key] = true;
    console.log("Keydown = ", keyPresses);
    moveCharacter();
}

window.addEventListener('keyup', keyUpListener);
function keyUpListener(event) {
    keyPresses[event.key] = false;
    console.log("Keyup = ", keyPresses);
}

function moveCharacter(){
    // console.log(e);
    currentSprite += 1;
    if(currentSprite > 3){
        currentSprite = 0;
    }
    let sprite = document.getElementById("sprite_img");
    if(keyPresses.d){
        currentPosX = currentPosX + movementAmountX;
        if(currentPosX > 890){
            currentPosX = 890;
        }
        sprite.style.left = `${currentPosX}px`;
        sprite.src = spriteArray[currentSprite];
        sprite.style.width = "150px"
    }
    else if(keyPresses.a){
        currentPosX = currentPosX - movementAmountX;
        if(currentPosX < -30){
            currentPosX = -30;
        }
        sprite.style.left = `${currentPosX}px`;
        sprite.src = spriteRevArray[currentSprite];
        sprite.style.width = "150px"
    }
    if(keyPresses.s){
        currentPosY = currentPosY + movementAmountX;
        if(currentPosY > 380){
            currentPosY = 380;
        }
        sprite.style.top = `${currentPosY}px`;
        sprite.src = spriteDownArray[currentSprite];
        sprite.style.width = "130px"
    }
    else if(keyPresses.w){
        currentPosY = currentPosY - movementAmountX;
        if(currentPosY < -29){
            currentPosY = -24;
        }
        sprite.style.top = `${currentPosY}px`;
        sprite.src = spriteUpArray[currentSprite];
        sprite.style.width = "130px"
    }
    if(keyPresses.Enter){
        console.log("Enter was pressed");
        instructions.textContent = "Get closer to enemy!"
        if(currentPosX > 570 && currentPosX < 770){
            if(currentPosY > 220 && currentPosY < 440){
                instructions.textContent = "Move with WASD Keys and hit ENTER to interact with enemies"

                startBattle();
            }
        }
    }

    if(currentPosX > 570 && currentPosX < 770){
        if(currentPosY > 220 && currentPosY < 440){
            let enemy = document.getElementById("sprite_enemy_1");
            enemy.src = "./images/enemy1Highlighted.png"
        }
    }
    else{
        let enemy = document.getElementById("sprite_enemy_1");
        enemy.src = "./images/enemy1.png"
    }
    // console.log("X: ", currentPosX, "Y: ", currentPosY);
}

function startBattle(){
    console.log("Begin battle!");
    containerIndex.className = "invisible";
    containerIndex.className = "invisible";
    screen.className = "invisible"
    container.className = "visible";
    backgroundMusic.volume = BACKGROUNDVOLUME;
    heal_up.volume = "1"
    fire_attack.volume = "1"
    electric_attack.volume = "1"
    backgroundMusic.loop = true;
    backgroundMusic.play();

    adjustHealth(POKEMON1,-100);
    adjustHealth(POKEMON2, -100);

    pokemon1Name.textContent = gameData.pokemon1.name;
    pokemon2Art.src = gameData.pokemon1.pokemon_art;
    
    pokemon2Name.textContent = gameData.pokemon2.name;
    pokemon2Art.src = gameData.pokemon2.pokemon_art;
}


// function throwDice(){
//     gameData.roll = Math.floor(Math.random() * 6) + 1;
//     diceRoll.src = "./images/" + gameData.greendice[gameData.roll-1];
//     if(gameData.rolledDice.includes(gameData.roll)){
//         //switch turns and heal opponent
//         clearDice();
//         if(gameData.gameTurn == POKEMON1){
//             game_description.textContent = `${gameData.pokemon1.name} attack missed! ${gameData.pokemon2.name} had time to heal. It is now ${gameData.pokemon2.name}'s turn`;
//             adjustHealth(POKEMON2, HEALTHREGAIN);
//         }
//         else{
//             game_description.textContent = `${gameData.pokemon2.name} attack missed! ${gameData.pokemon1.name} had time to heal. It is now ${gameData.pokemon1.name}'s turn`;
//             adjustHealth(POKEMON1, HEALTHREGAIN);

//         }
//         health.className="appearing";
//         heal_up.play();
//         setTimeout(function(){
//             health.className="attack_hidden";
//             changeTurn();
//         }, 2000);
//     }
//     else{
//         //do damage to opponent
//         let dice_to_change = document.getElementById(`dice_${gameData.roll}_img`)
//         dice_to_change.src = "./images/" + `dice${gameData.roll}red.png`;

//         gameData.rolledDice.push(gameData.roll);
//         gameData.rolledDice = [...new Set(gameData.rolledDice)];
//         console.log(gameData.rolledDice);
//         if(gameData.gameTurn == POKEMON1){
//             game_description.textContent = `${gameData.pokemon1.name}'s attack hit! ${gameData.pokemon2.name} took some damage. It is still ${gameData.pokemon1.name}'s turn`;
//             adjustHealth(POKEMON2, 20);
//             flame.className = "bottom_to_top"
//             fire_attack.play();
//             setTimeout(function(){
//                 flame.className = "attack_hidden"
//             }, 1000);
//         }
//         else{
//             game_description.textContent = `${gameData.pokemon2.name}'s attack hit! ${gameData.pokemon1.name} took some damage. It is still ${gameData.pokemon2.name}'s turn`;
//             adjustHealth(POKEMON1, 20);
//             lightning.className = "bottom_to_top"
//             electric_attack.play();
//             setTimeout(function(){
//                 lightning.className = "attack_hidden"
//             }, 1000);
//         }
//         checkWinningCondition();
//     }
// }


// startGameButton.addEventListener("click", function(){
//     containerIndex.className = "invisible";
//     containerIndex.className = "invisible";
//     container.className = "visible";
//     backgroundMusic.volume = BACKGROUNDVOLUME;
//     heal_up.volume = "1"
//     fire_attack.volume = "1"
//     electric_attack.volume = "1"
//     backgroundMusic.loop = true;
//     backgroundMusic.play();
// });


// function clearDice(){
//     gameData.rolledDice = [];
//     for(i = 1; i < 7; i++){
//         let dice_to_change = document.getElementById(`dice_${i}_img`)
//         dice_to_change.src = "./images/" + `dice${i}blue.png`;
//     }
// }


// function changeTurn(){
//     clearDice();
//     if(gameData.gameTurn == POKEMON1){
//         pokemon1Name.textContent = gameData.pokemon2.name;
//         pokemon2Name.textContent = gameData.pokemon1.name;

//         pokemon_1_health_text.textContent = gameData.pokemon2.health + "/100";
//         pokemon_2_health_text.textContent = gameData.pokemon1.health + "/100";

//         pokemon1Art.src = gameData.pokemon2.pokemon_art;
//         pokemon2Art.src = gameData.pokemon1.pokemon_art_reversed;
//     }
//     else{
//         pokemon1Name.textContent = gameData.pokemon1.name;
//         pokemon2Name.textContent = gameData.pokemon2.name;

//         pokemon_1_health_text.textContent = gameData.pokemon1.health + "/100";
//         pokemon_2_health_text.textContent = gameData.pokemon2.health + "/100";

//         pokemon1Art.src = gameData.pokemon1.pokemon_art;
//         pokemon2Art.src = gameData.pokemon2.pokemon_art;
//     }
//     gameData.gameTurn ? (gameData.gameTurn = POKEMON1) : (gameData.gameTurn = POKEMON2);
//     adjustHealth(POKEMON1, 0);
//     adjustHealth(POKEMON2, 0);
// }