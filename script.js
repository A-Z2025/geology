const Questions = [
    {
        q: "Fill in the blank: Diamonds are the only gem made up of one element _____.",
        a: [{text: "Water.", isCorrect: false},
            {text: "Carbon.", isCorrect: true},
            {text: "Glass.", isCorrect: false},
            {text: "Charcoal.", isCorrect: false},
           ]
    },
    {
        q: "Fill in the blank: Sapphires symbolize  _____.",
        a: [{text: "Rudeness.", isCorrect: false},
            {text: "Rain.", isCorrect: false},
            {text: "Truth.", isCorrect: true},
            {text: "Kindness.", isCorrect: false},
           ]
    },
    {
        q: "Fill in the blank: Geodes are embedded with rocks that are about _____.",
        a: [{text: "3 years old.", isCorrect: true},
            {text: "18 years old.", isCorrect: false},
            {text: "34 million years old.", isCorrect: false},
            {text: "250 million years old.", isCorrect: true},
           ]
    },
    {
        q: "Fill in the blank: _____ is the most popularly found crystal.",
        a: [{text: "Amethyst.", isCorrect: false},
            {text: "Pyrite.", isCorrect: false},
            {text: "Quartz.", isCorrect: true},
            {text: "Citrine.", isCorrect: true},
           ]
    },
    
    // add more questions here....
]; 

let currQuestion = 0;
let score = 0;

function loadQues() 
{
    const question = document.getElementById("ques");
    const opt = document.getElementById("opt");

    question.textContent = Questions[currQuestion].q;
    opt.innerHTML = "";

    for ( let i = 0; i < Questions[currQuestion].a.length; i++ )
    {
        const choicesDiv = document.createElement("div");
        const choice = document.createElement("input");
        const choiceLabel = document.createElement("label");

        choice.type = "radio";
        choice.name = "answer";
        choice.value = i;

        choiceLabel.textContent = Questions[currQuestion].a[i].text;

        choicesDiv.appendChild(choice);
        choicesDiv.appendChild(choiceLabel);
        opt.appendChild(choicesDiv);
    }
}

loadQues();

function checkAns()
{
    const selectedAns = parseInt(document.querySelector('input[name="answer"]:checked').value);

    if ( Questions[currQuestion].a[selectedAns].isCorrect  )
    {
        score++;
        console.log("Correct");
        nextQuestion();
    }
    else
    {
        nextQuestion();
    }
}

function loadScore() 
{
    const totalScore = document.getElementById("score");
    // ToDo: finish this later...
    totalScore.textContent = `You scored ${score} out of ${Questions.length}`;

}

function nextQuestion() 
{
    if (  currQuestion < Questions.length - 1  )
    {
        currQuestion++;
        loadQues();
    }
    else
    {
        document.getElementById("ques").remove();
        document.getElementById("opt").remove();
        document.getElementById("btn").remove();
        loadScore();
    }
}
