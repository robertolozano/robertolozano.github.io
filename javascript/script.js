var me_section_left = document.getElementById("me_section_left");

ScrollReveal().reveal(me_section_left,{
    origin: 'left',
    distance: '50%',
    duration: 820
});

var me_section_right = document.getElementById("me_section_right");

ScrollReveal().reveal(me_section_right,{
    origin: 'right',
    distance: '50%',
    duration: 820
});

var project = document.getElementsByClassName("project")

ScrollReveal().reveal(project,{
    origin: 'right',
    distance: '50%',
    duration: 1500
});