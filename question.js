var questions=[
    {
        num:1,
        question:"Who is the father of Computers?",
        answer:"b. Charles Babbage",
        options:[
            "a. James Gosling",
            "b. Charles Babbage",
            "c. Dennis Ritchie",
            "d. Bjarne Stroustrup"
        ]
    },
    {
        num:2,
        question:" What is the full form of CPU?",
        answer:"c. Central Processing Unit",
        options:[
            "a. Computer Processing Unit",
            "b. Computer Principle Unit",
            "c. Central Processing Unit",
            "d. Control Processing Unit"
        ]
    },
    {
        num:3,
        question:"Which of the following computer language is written in binary codes only?",
        answer:"b. machine language",
        options:[
            "a. pascal",
            "b. machine language",
            "c. C",
            "d. C#"
          
        ]
    },
    {
        num:4,
        question:" Which of the following is not a type of computer code?",
        answer:"a. EDIC",
        options:[
            "a. EDIC"    ,     
            "b. ASCII",
            "c. BCD",
            "d. EBCDIC"

        ]
    },
    {
        num:5,
        question:"Which of the following is designed to control the operations of a computer?",
        answer:"c. System Software",
        options:[
            "a. User",
            "b. Application Software",
            "c. System Software",
            "d. Utility Software"
        ]
    }

]

showQuestion(0);
questionCounter(1);
headScore();
resultscore();



var next=document.querySelector(".next")
var resultbox=document.querySelector(".result-box")
var quizsection=document.querySelector(".quiz-section")

next.onclick=()=>{
    if(questionCount<questions.length-1){
    questionCount++;
    showQuestion(questionCount);
    questionnum++;
    questionCounter(questionnum);
    }
    else{
      resultbox.style.display="block"
      quizbox.style.display="none"
    }
    next.classList.remove("active");
}


var questionCount=0;
var questionnum=1;
var userScore=0;



function showQuestion(index){
    var questionText=document.querySelector(".question-text");
    questionText.textContent=`${questions[index].num}.${questions[index].question}`

    var optionList=document.querySelector(".option-list")

    let optiontag=`<div class="option"><span>${questions[index].options[0]}</span></div>
    <div class="option"><span>${questions[index].options[1]}</span></div>
    <div class="option"><span>${questions[index].options[2]}</span></div>
    <div class="option"><span>${questions[index].options[3]}</span></div>`;

    optionList.innerHTML=optiontag;

    var option=document.querySelectorAll(".option");
    for(var i=0;i<option.length;i++){
        option[i].setAttribute('onclick','optionSelected(this)');
    }

    }

 


function optionSelected(answer){
    var optionList=document.querySelector(".option-list")
    var userAnswer=answer.textContent;
    var correctanswer=questions[questionCount].answer;
    var allOptions=optionList.children.length;
  
   

    if(userAnswer==correctanswer){
        
        answer.classList.add("correct");
        userScore+=1;
        headScore();
        resultscore();
        
    }
    else{
        answer.classList.add("incorrect");

        for (var i=0;i<allOptions;i++){
            if(optionList.children[i].textContent==correctanswer){
                optionList.children[i].setAttribute("class","option correct");
            }
        }
    }
    
    for(var i=0;i<allOptions;i++){
        optionList.children[i].classList.add("disabled");
    }

    next.classList.add("active");
    

}


function questionCounter(index){
    var questionTotal=document.querySelector(".question-total");
    questionTotal.textContent=`${index} of ${questions.length}Questions`;
}

function headScore(){
    var headScore=document.querySelector(".head-score");
    headScore.textContent=`Score:${userScore}/${questions.length}`;
}
 var tryagain=document.querySelector(".try");
 var gotohome=document.querySelector(".gohome");

 function resultscore(){
 
    var scoretext=document.querySelector(".percentage");
    scoretext.textContent=`Your Score ${userScore} out of ${questions.length}`;
}
 var quizbox=document.querySelector(".quiz-box")
tryagain.onclick=()=>{
       quizbox.style.display="block";
       resultbox.style.display="none";
       questionCount=0;
      questionnum=1;
      userScore=0;
      showQuestion(questionCount);
      questionCounter(questionnum);
      headScore();
}

window.addEventListener("DOMContentLoaded",()=>{
    headScore();
})











