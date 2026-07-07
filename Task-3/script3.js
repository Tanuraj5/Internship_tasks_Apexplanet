let questions = [

    {
        question: "Which language is used for styling web pages?",
        options: ["HTML", "CSS", "JavaScript", "Python"],
        answer: 1
    },

    {
        question: "Which tag is used to create a hyperlink?",
        options: ["<img>", "<a>", "<p>", "<div>"],
        answer: 1
    },

    {
        question: "Which method is used to select an element by id?",
        options: ["querySelector()", "getElement()", "getElementById()", "getId()"],
        answer: 2
    },

    {
        question: "Which company developed JavaScript?",
        options: ["Google", "Netscape", "Microsoft", "Apple"],
        answer: 1
    },

    {
        question: "Which keyword is used to declare a variable?",
        options: ["int", "var", "float", "string"],
        answer: 1
    }

];


let current = 0;
let score = 0;

showQuestion();

function showQuestion(){

    document.getElementById("question").innerHTML = questions[current].question;

    document.getElementById("label1").textContent = questions[current].options[0];
document.getElementById("label2").textContent = questions[current].options[1];
document.getElementById("label3").textContent = questions[current].options[2];
document.getElementById("label4").textContent = questions[current].options[3];

    document.getElementById("op1").checked = false;
    document.getElementById("op2").checked = false;
    document.getElementById("op3").checked = false;
    document.getElementById("op4").checked = false;

}



document.getElementById("nextbtn").addEventListener("click", function(){

    let ans = -1;

    if(document.getElementById("op1").checked){

        ans = 0;

    }

    else if(document.getElementById("op2").checked){

        ans = 1;

    }

    else if(document.getElementById("op3").checked){

        ans = 2;

    }

    else if(document.getElementById("op4").checked){

        ans = 3;

    }

    else{

        alert("Select an Option");
        return;

    }



    if(ans == questions[current].answer){

        score++;

    }

    current++;

    if(current < questions.length){

        showQuestion();

    }

    else{

        document.getElementById("question").innerHTML = "Quiz Completed";

        document.getElementById("option1").style.display = "none";
        document.getElementById("option2").style.display = "none";
        document.getElementById("option3").style.display = "none";
        document.getElementById("option4").style.display = "none";

        document.getElementById("nextbtn").style.display = "none";

        document.getElementById("score").innerHTML =
        "Your Score : " + score + " / " + questions.length;

    }

});



document.getElementById("jokebtn").addEventListener("click", joke);

async function joke(){

    try{

        let data = await fetch("https://official-joke-api.appspot.com/random_joke");

        let x = await data.json();

        document.getElementById("joke").innerHTML =
        x.setup + "<br><br>" + x.punchline;

    }

    catch{

        document.getElementById("joke").innerHTML =
        "Unable to fetch joke.";

    }

}