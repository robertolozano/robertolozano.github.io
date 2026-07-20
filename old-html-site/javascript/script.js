var me_section_left = document.getElementById("me_section_left");

ScrollReveal().reveal(me_section_left,{
    origin: 'left',
    distance: '50%',
    duration: 820,
    easing: 'ease'
});

var me_section_right = document.getElementById("me_section_right");

ScrollReveal().reveal(me_section_right,{
    origin: 'right',
    distance: '50%',
    duration: 820,
    easing: 'ease'
});

var project = document.getElementsByClassName("project")

ScrollReveal().reveal(project,{
    origin: 'right',
    distance: '50%',
    duration: 1500,
    easing: 'ease'
});

var logo = document.getElementById("RLJ_Logo");

// ScrollReveal().reveal(logo,{
//     scale: 4
// });

// const isHover = e => e.parentElement.querySelector(':hover') === e;    

// const myDiv = document.getElementById('RLJ_Logo');
// document.addEventListener('mousemove', function checkHover() {
//   const hovered = isHover(myDiv);
//   if (hovered !== checkHover.hovered) {
//     console.log(hovered ? 'hovered' : 'not hovered');
//     if(hovered == true){
//         ScrollReveal().reveal(logo,{
//             scale: 4,
//             reset: true
//         });
//     }
//     console.log(hovered)
//     checkHover.hovered = hovered;
//   }
// });