function loadQuiz(questions){

    const container=document.getElementById("quiz");

    let html="";

    questions.forEach((q,index)=>{

        html+=`
        <div class="question">

            <h3>${index+1}. ${q.question}</h3>

            ${q.options.map(option=>`

                <label>

                    <input
                        type="radio"
                        name="q${index}"
                        value="${option}">

                    ${option}

                </label>

            `).join("")}

            <div id="result${index}"></div>

        </div>
        `;
    });

    html+=`<button onclick="checkAnswers()">Submit Quiz</button>`;

    html+=`<div class="score" id="score"></div>`;

    container.innerHTML=html;

    window.currentQuestions=questions;
}

function checkAnswers(){

    let score=0;

    currentQuestions.forEach((q,index)=>{

        const answer=document.querySelector(`input[name=q${index}]:checked`);

        const result=document.getElementById(`result${index}`);

        if(!answer){

            result.innerHTML="<span class='wrong'>Not Answered</span>";

            return;
        }

        if(answer.value===q.answer){

            score++;

            result.innerHTML="<span class='correct'>✔ Correct</span>";

        }else{

            result.innerHTML=`
            <span class='wrong'>
            ✘ Wrong<br>
            Correct Answer:
            ${q.answer}
            </span>`;
        }

    });

    document.getElementById("score").innerHTML=
        `Final Score : ${score} / ${currentQuestions.length}`;
}