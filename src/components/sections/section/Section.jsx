import { useState } from "react";
import { ObjectiveQuestion, SubjectiveQuestion } from "../../question";
import "./Section.css";

function Section({ id, name, questions, currentSection, sectionIndex, markAnswer, attemptedQuestions }) {
    let [currentQuestion, setCurrentQuestion] = useState(0);

    function nextQuestion() {
        setCurrentQuestion(currentQuestion + 1);
    }

    function previousQuestion() {
        setCurrentQuestion(currentQuestion - 1);
    }
    
    return (
        <>
            { sectionIndex === currentSection ? (
                <div className={`section ${sectionIndex === currentSection ? "active" : ""}`} id={`section-${id}`}>
                    <h1>
                        {name}
                    </h1>
                    
                    {
                        questions.map((question, index) => (
                            question.type === "objective" ? (
                                <ObjectiveQuestion
                                    key={index}
                                    questionIndex={index}
                                    id={question.id}
                                    question={question.question}
                                    options={question.options}
                                    currentQuestion={currentQuestion}
                                    markAnswer={markAnswer}
                                    attemptedQuestions={attemptedQuestions}
                                />
                            ) : (
                                <SubjectiveQuestion key={index} />
                            )
                        ))
                    }

                    <div className="section-actions">
                        <button
                            onClick={previousQuestion}
                            disabled={currentQuestion === 0}
                        >
                            Previous
                        </button>
                        <button
                            onClick={nextQuestion}
                            disabled={currentQuestion === questions.length - 1}
                        >
                            Next
                        </button>
                    </div>
                </div>
            ) : ""}
        </>
    );
}

export default Section;

