import { useRef } from "react";

function AddQuestion() {
    let containerRef = useRef();

    function addQuestion() {
        let question = document.createElement("div");
        question.className = "question";

        let questionText = document.createElement("input");
        questionText.type = "text";
        questionText.placeholder = "Enter question text";
        question.appendChild(questionText);

        let options = document.createElement("div");
        options.className = "options";

        for (let i = 0; i < 4; i++) {
            let option = document.createElement("input");
            option.type = "text";
            option.placeholder = "Enter option text";
            options.appendChild(option);
        }

        question.appendChild(options);

        let answer = document.createElement("input");
        answer.type = "text";
        answer.placeholder = "Enter answer";
        question.appendChild(answer);

        containerRef.current.appendChild(question);
    }

    return (
        <div>
            <h1>Add Question</h1>

            <button onClick={addQuestion}>Add Question</button>

            <div ref={containerRef}></div>
        </div>
    );
}

export default AddQuestion;

