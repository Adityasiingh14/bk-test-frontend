import "./Objective.css";

function Objective({ id, question, options, questionIndex, currentQuestion, markAnswer, attemptedQuestions }) {
    return (
        <>
            {questionIndex === currentQuestion ? (
                <div className={`question question-objective ${questionIndex === currentQuestion ? "active" : ""}`}>
                    <div className="question-content">
                        <span>
                            {question}
                        </span>
                    </div>

                    <div className="options">
                        {options.map((option, index) => (
                            <div key={index} className="option">
                                {
                                    <input
                                        type="radio"
                                        id={`${question}-${option.id}`}
                                        name={`${question}-${id}`}
                                        onChange={() => markAnswer(id, option.id)}
                                        checked={attemptedQuestions[id] === option.id}
                                    />
                                }

                                <label htmlFor={`${question}-${option.id}`}>
                                    {option.option}
                                </label>
                            </div>
                        ))}
                    </div>
                </div>
            ) : ""}
        </>
    );
}

export default Objective;

