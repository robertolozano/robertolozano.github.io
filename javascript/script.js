var me_section_left = document.getElementById("me_section_left");
var me_section_right = document.getElementById("me_section_right");
var me_section_right = document.getElementById("me_section_right");

ScrollReveal().reveal(me_section_left,{
    origin: 'left',
    distance: '50%',
    duration: 820
});

ScrollReveal().reveal(me_section_right,{
    origin: 'right',
    distance: '50%',
    duration: 820
});

ScrollReveal().reveal(project,{
    origin: 'right',
    distance: '50%',
    duration: 1500
});