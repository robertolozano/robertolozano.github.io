(function () {
    'use strict';
    const theImg = document.querySelector('#container2 img');
    const sneakerIMG = document.querySelector('#sneakerIMG');

    const topleft = document.querySelector('#topleft');
    const center = document.querySelector('#center');
    const bottomright = document.querySelector('#bottomright');

    const colors = ["Habanero Red","Black","Lucid Green","Pacific Blue", "Sketch"]

    const shoeBoxes = document.querySelectorAll('#sneaker_section img')

    shoeBoxes.forEach(function(eachBox,i){
        eachBox.addEventListener('mouseover', function(){
            eachBox.src="./images/box_open.png"
        });
        eachBox.addEventListener('mouseout', function(){
            eachBox.src="./images/box_closed.png"
        });
        eachBox.addEventListener('click', function(){
            document.getElementById("sneakerIMG").src = `./images/sneaker${i}.png`
            document.getElementById("overlay").className = "overlay_shown";
            document.getElementById("sneakerIMG").className = "container2_open_slow";
            document.getElementById("color").textContent = colors[i];
        });
    });

    document.getElementById("exit_overlay").addEventListener('click', function(){
        document.getElementById("overlay").className = "overlay_hidden";
        document.getElementById("sneakerIMG").className = "container2_close_quick";
        theImg.className = 'start';

    });

    const hotSpots = document.querySelectorAll('#container2 div');

    hotSpots.forEach(function (eachSpot) {
        eachSpot.addEventListener('mouseover', zoomPhoto);
        eachSpot.addEventListener('mouseout', function () {
            theImg.className = 'start';
            topleft.style.border = "3px solid black";
            center.style.border = "3px solid black";
            bottomright.style.border = "3px solid black";

        });
    
    });

    function zoomPhoto(event) {
        topleft.style.border = "0px solid black";
        center.style.border = "0px solid black";
        bottomright.style.border = "0px solid black";

        const thisCorner = event.target.id;
        console.log(thisCorner);
        switch (thisCorner) {
            case 'topleft': theImg.className = 'topleft'; break;
            case 'bottomright': theImg.className = 'bottomright'; break;
            case 'center': theImg.className = 'center'; break;
        }
    }

})();