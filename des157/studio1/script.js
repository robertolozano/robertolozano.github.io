(function(){
    "use strict"

    let submit = document.querySelector("#submit");

    document.querySelector('#close').addEventListener('click', function (event) {
        event.preventDefault();
        document.getElementById('result').className = 'hidden';
    });

    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') {
            document.getElementById('result').className = 'hidden';
        }
    });

    submit.addEventListener('click', function(){
        let name = document.querySelector('#name').value;
        let profession = document.querySelector('#profession').value;
        let companyName = document.querySelector('#companyName').value;
        let job = document.querySelector('#job').value;
        let noun1 = document.querySelector('#noun1').value;
        let noun2 = document.querySelector('#noun2').value;
        let famousPerson = document.querySelector('#famousPerson').value;
        let advice = document.querySelector('#advice').value;

        let myText;

        if(name && profession && companyName && job && noun1
            && noun2 && famousPerson && advice){
            myText = `Here are the words: ${name}, ${profession}, ${companyName}, ${job}, ${noun1}, ${noun2}, ${famousPerson}, ${advice}`;
            document.getElementById("result").className = "shown";
            document.getElementById("name_field").textContent = name;
            document.getElementById("profession_field").textContent = profession;
            document.getElementById("companyName_field").textContent = companyName;
            document.getElementById("job_field").textContent = job;
            document.getElementById("noun1_field").textContent = noun1;
            document.getElementById("noun2_field").textContent = noun2;
            document.getElementById("famousPerson_field").textContent = famousPerson;
            document.getElementById("advice_field").textContent = advice;


        }
        else{
            myText = "Please give me the words so that I can finish your madlib";
        }

        console.log(myText)

        // madlib.innerHTML = myText;

        document.querySelector('#name').value = "";
        document.querySelector('#profession').value = "";
        document.querySelector('#companyName').value = "";
        document.querySelector('#job').value = "";
        document.querySelector('#noun1').value = "";
        document.querySelector('#noun2').value = "";
        document.querySelector('#famousPerson').value = "";
        document.querySelector('#advice').value = "";
    });
})();