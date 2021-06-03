let POKEMON1 = 0;
let POKEMON2 = 1;
let BACKGROUNDVOLUME = 0.05;
let HEALTHREGAIN = -30;

let gameData = {
    test: 1,
    gameTurn: 0,
    level: 0,
    Roberto: {
        name: "Roberto",
        health: 100,
        pokemon_art: "images/sprite1.png",
        pokemon_art_reversed: "images/spriterev1.png"
    },
    enemyList: [
        {
            name: "Physics and Math",
            health: 100,
            pokemon_art: "images/enemy1.png",
            pokemon_art_highlighted: "images/enemy1Highlighted.png"
        },
        {
            name: "Boba Addiction",
            health: 100,
            pokemon_art: "images/boba.png",
            pokemon_art_highlighted: "images/bobaHighlighted.png"
        },
        {
            name: "Summer in Davis",
            health: 100,
            pokemon_art: "images/summerInDavis.png",
            pokemon_art_highlighted: "images/summerInDavisHighlighted.png"
        },
        {
            name: "Self Doubt",
            health: 100,
            pokemon_art: "images/spriterev1.png",
            pokemon_art_highlighted: "images/spriteRev1_2Highlighted.png"
        }
    ]
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

let screenbackground = document.getElementById("screen");


let instructions = document.getElementById("instructions");

let timeOutVar;

quitGame.addEventListener("click", function(){
    location.reload();
});

function attackToggle(toggle){
    if(toggle == 0){
        attack1.style.visibility = "hidden";
        attack2.style.visibility = "hidden";
        attack3.style.visibility = "hidden";
        attack4.style.visibility = "hidden";
    }
    else{
        attack1.style.visibility = "visible";
        attack2.style.visibility = "visible";
        attack3.style.visibility = "visible";
        attack4.style.visibility = "visible";
    }
}

winnerOverlayReset.addEventListener("click", function(){
    instructions.textContent = "Move with WASD Keys and hit ENTER to interact with enemies";
    containerIndex.className = "invisible";
    winnerOverlay.className = "invisible";
    screen.className = "visible"
    container.className = "invisible"; 
    attackToggle(0);
    backgroundMusic.pause()
    if(gameData.level >= 4){
        instructions.textContent = "Congratulations you won! Thanks for joining me on my journey!"
    }
});

toggleVolume.addEventListener("click", function(){
    console.log("toggling volume");
    if(backgroundMusic.volume != "0"){
        backgroundMusic.volume = "0";
        heal_up.volume = "0";
        fire_attack.volume = "0";
        electric_attack.volume = "0";
        toggleVolume.textContent = "Unmute";
    }
    else{
        backgroundMusic.volume = "0.25";
        heal_up.volume = "1";
        fire_attack.volume = "1";
        electric_attack.volume = "1";
        toggleVolume.textContent = "Mute";
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
    console.log("attack1");
    attackToggle(0);
    game_description.textContent = `${gameData.Roberto.name} studied! ${gameData.enemyList[gameData.level].name} took some damage.`;
    adjustHealth(POKEMON2, 20);
    flame.className = "bottom_to_top"
    fire_attack.play();
    setTimeout(function(){
        flame.className = "attack_hidden"
    }, 1000);
    checkWinningCondition();

    setTimeout(function(){
        adjustHealth(POKEMON1, 15);
        lightning.className = "top_to_bottom";
        electric_attack.play();
        attackToggle(1);
        timeOutVar = setTimeout(function(){
            lightning.className = "attack_hidden"
        }, 1000);
    }, 2000);
});

attack2.addEventListener('click', function(){
    // changeTurn();
    console.log("attack2");
    game_description.textContent = `${gameData.Roberto.name}'s attack hit! ${gameData.enemyList[gameData.level].name} took some damage.`;
    adjustHealth(POKEMON2, 20);
    lightning.className = "bottom_to_top"
    electric_attack.play();
    setTimeout(function(){
        lightning.className = "attack_hidden"
    }, 1000);
    checkWinningCondition();
});

attack3.addEventListener('click', function(){
    console.log("attack3");
    game_description.textContent = `${gameData.Roberto.name} drank some coffee! ${gameData.Roberto.name} regained some health!`;
    adjustHealth(POKEMON1, HEALTHREGAIN);
    health.className="appearing";
    heal_up.play();
    setTimeout(function(){
        health.className="attack_hidden";
    }, 2000);
});

let cry = document.getElementById("cry")

attack4.addEventListener('click', function(){
    game_description.textContent = `${gameData.Roberto.name} cried! It wasn't very effective`;
    console.log("attack4");
    cry.className="appearing";
    setTimeout(function(){
        cry.className="attack_hidden";
    }, 2000);

});


function adjustHealth(pokemonID, damage){
    if(pokemonID == POKEMON1){
        gameData.Roberto.health = gameData.Roberto.health - damage;
        if(gameData.Roberto.health > 100){
            gameData.Roberto.health = 100;
        }
        if(gameData.Roberto.health < 0){
            gameData.Roberto.health = 0;
        }
        percentage = gameData.Roberto.health/100;
        newWidth = 93 * percentage;
        if(gameData.gameTurn == POKEMON1){
            pokemon1Health.style.width =`${newWidth}%`;
            pokemon_1_health_text.textContent = gameData.Roberto.health + "/100";
        }
        else{
            pokemon2Health.style.width =`${newWidth}%`;
            pokemon_2_health_text.textContent = gameData.Roberto.health + "/100";
        }
    }
    else{
        gameData.enemyList[gameData.level].health = gameData.enemyList[gameData.level].health - damage;

        if(gameData.enemyList[gameData.level].health > 100){
            gameData.enemyList[gameData.level].health = 100;
        }
        if(gameData.enemyList[gameData.level].health < 0){
            gameData.enemyList[gameData.level].health = 0;
        }
        percentage = gameData.enemyList[gameData.level].health/100;
        newWidth = 93 * percentage;
        if(gameData.gameTurn == POKEMON1){
            pokemon2Health.style.width =`${newWidth}%`;
            pokemon_2_health_text.textContent = gameData.enemyList[gameData.level].health + "/100";
        }
        else{
            pokemon1Health.style.width =`${newWidth}%`;
            pokemon_1_health_text.textContent = gameData.enemyList[gameData.level].health + "/100";
        }
    }
}

function checkWinningCondition(){
    if(gameData.Roberto.health <= 0){
        console.log(`${gameData.enemyList[gameData.level].name} won!`)
        game_description.textContent = `${gameData.enemyList[gameData.level].name} won!`;
        winnerName.textContent = `${gameData.enemyList[gameData.level].name} won!`;
        winnerImg.src = `${gameData.enemyList[gameData.level].pokemon_art}`;
        setTimeout(function(){
            winnerOverlay.className = "visible";
        }, 1500);
    }
    if(gameData.enemyList[gameData.level].health <= 0){
        clearTimeout(timeOutVar)
        console.log(`${gameData.Roberto.name} won!`)
        game_description.textContent = `${gameData.Roberto.name} won!`;
        winnerName.textContent = `${gameData.Roberto.name} won!`;
        winnerImg.src = `${gameData.Roberto.pokemon_art}`;
        setTimeout(function(){
            winnerOverlay.className = "visible";
        }, 1500);
        gameData.level++;
        if(gameData.level < 4){
            let enemy = document.getElementById("sprite_enemy_1");
            enemy.src = gameData.enemyList[gameData.level].pokemon_art
        }

        if(gameData.level >= 4){
            console.log("Thanks for playing!");
            let enemy = document.getElementById("sprite_enemy_1");
            enemy.style.visibility = "hidden";
            instructions.textContent = "Congratulations you won! Thanks for joining me on my journey!"
            screenbackground.style.backgroundImage = "url('./images/pixil-frame-4.png')"
        }
    }
}

function resetGame(){
    location.reload();
}

let spriteArray = ["images/sprite1.png","images/sprite2.png","images/sprite1.png","images/sprite3.png"]
let spriteRevArray = ["images/spriterev1.png","images/spriterev2.png","images/spriterev1.png","images/spriterev3.png"]
let spriteDownArray = ["images/spriteDown1.png","images/spriteDown2.png","images/spriteDown1.png","images/spriteDown3.png"]
let spriteUpArray = ["images/spriteUp1.png","images/spriteUp2.png","images/spriteUp1.png","images/spriteUp3.png"]
let currentSprite = 0;
let movementAmountX = 4;
let currentPosX = 0;
let currentPosY = 0;
let keyPresses = {};

moveCharacter();

window.addEventListener('keydown', keyDownListener);
function keyDownListener(event) {
    keyPresses[event.key] = true;
    console.log("Keydown = ", keyPresses);
    // moveCharacter();
}

window.addEventListener('keyup', keyUpListener);
function keyUpListener(event) {
    keyPresses[event.key] = false;
    console.log("Keyup = ", keyPresses);
}

var currentSpriteFraction = 0

function moveCharacter(){
    // console.log(e);
    currentSpriteFraction += 0.15;
    if(currentSpriteFraction >= 1){
        currentSprite += 1;
        currentSpriteFraction = 0;

    }
    // currentSprite += 1;
    if(currentSprite > 3){
        currentSprite = 0;
    }
    let sprite = document.getElementById("sprite_img");
    if(keyPresses.d){
        currentPosX = currentPosX + movementAmountX;
        if(currentPosX > 1100){
            currentPosX = 1100;
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
        if(currentPosY > 450){
            currentPosY = 450;
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
        // instructions.textContent = "Get closer to enemy!"
        
        if(currentPosX > 570 && currentPosX < 770){
            if(currentPosY > 220 && currentPosY < 440){
                instructions.textContent = "Move with WASD Keys and hit ENTER to interact with enemies"

                startBattle();
            }
        }
    }

    if(gameData.level < 4){
        if(currentPosX > 570 && currentPosX < 770){
            if(currentPosY > 220 && currentPosY < 440){
                let enemy = document.getElementById("sprite_enemy_1");
                enemy.src = gameData.enemyList[gameData.level].pokemon_art_highlighted;
            }
            else{
                let enemy = document.getElementById("sprite_enemy_1");
                enemy.src = "./images/enemy1.png"
                enemy.src = gameData.enemyList[gameData.level].pokemon_art
            }
        }
        else{
            let enemy = document.getElementById("sprite_enemy_1");
            enemy.src = gameData.enemyList[gameData.level].pokemon_art
        }
    }
    // console.log("X: ", currentPosX, "Y: ", currentPosY);
    setTimeout(moveCharacter, 10);
}

function startBattle(){
    console.log("Begin battle!");
    instructions.textContent = "Click on attack!"
    attackToggle(1);
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

    pokemon1Name.textContent = gameData.Roberto.name;
    pokemon2Art.src = gameData.Roberto.pokemon_art;
    
    test = `enemy${gameData.level}`;

    pokemon2Name.textContent = gameData.enemyList[gameData.level].name;
    pokemon2Art.src = gameData.enemyList[gameData.level].pokemon_art;
}