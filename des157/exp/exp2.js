let divTag = document.querySelector('div');
let btn = document.getElementById('addp');
let colorbtn = document.getElementById('changecolor');

btn.addEventListener('click', function(){
    var paragraph = prompt("Please enter a paragraph to enter");

    let newP = document.createElement('p');
    let pText = document.createTextNode(paragraph);
    newP.appendChild(pText);
    divTag.appendChild(newP);
});

colorbtn.addEventListener('click', function(){
    var color = prompt("Please enter a color for text");
    divTag.style.color=color;
});