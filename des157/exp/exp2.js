let divTag = document.querySelector('div');
let btn = document.getElementById('addp');
let colorbtn = document.getElementById('changecolor');


btn.addEventListener('click', function(){
    let paragraph = prompt("Please enter a paragraph to enter");
    if(paragraph == null){
        return;
    }
    paragraph = capitalizeFirstLetter(paragraph);

    let newP = document.createElement('p');
    let pText = document.createTextNode(paragraph);
    newP.appendChild(pText);
    divTag.appendChild(newP);
});

colorbtn.addEventListener('click', function(){
    let color = prompt("Please enter a color for text");
    divTag.style.color=color;
});

function capitalizeFirstLetter(paragraph){
    newParagraph = paragraph.charAt(0).toUpperCase() + paragraph.slice(1);
    console.log(newParagraph);
    return newParagraph;
}