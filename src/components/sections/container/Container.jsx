import { useRef, useState } from "react";

import "./Container.css";

import api from "../../../api";
import { Section } from "../section";
import { Link } from "react-router-dom";

function Container({ data, questionCount }) {
    let submittedStatusCodes = {
        not_submitted: 0,
        submitted: 1,
        submitting: 2
    }

    let [currentSection, setCurrentSection] = useState(0);
    let [attemptedQuestions, setAttemptedQuestions] = useState({});
    let [submittedStatus, setSubmittedStatus] = useState(submittedStatusCodes.not_submitted);
    let [resultId, setResultId] = useState(null);

    let containerRef = useRef();

    function nextSection() {
        setCurrentSection(currentSection + 1);
    }

    function previousSection() {
        setCurrentSection(currentSection - 1);
    }

    async function submitExam() {
        Array.from(containerRef.current.children).forEach(section => {
            section.style.display = "none";
        });

        setSubmittedStatus(submittedStatusCodes.submitting);

        let result = await api.exam.platform.submitExam(attemptedQuestions);

        setSubmittedStatus(submittedStatusCodes.submitted);
        setResultId(result.resultId);

        Array.from(containerRef.current.children).forEach(section => {
            section.remove();
        });
    }

    function markAnswer(questionId, answerId) {
        setAttemptedQuestions({
            ...attemptedQuestions,
            [questionId]: answerId
        });
    }

    return (
        <div className="section-container">
            <div className="container-actions">
                { submittedStatus === submittedStatusCodes.not_submitted ? (
                    <>
                        <button
                            onClick={previousSection}
                            disabled={currentSection === 0}
                        >
                            Previous
                        </button>
                        <button
                            onClick={nextSection}
                            disabled={currentSection === data.length - 1}
                        >
                            Next
                        </button>
                        <button
                            onClick={submitExam}
                            disabled={Object.keys(attemptedQuestions).length !== questionCount}
                        >
                            Submit {Object.keys(attemptedQuestions).length}/{questionCount}
                        </button>
                    </>
                ) : (
                    <>
                        <h1>
                            { submittedStatus === submittedStatusCodes.submitted ? ("Exam submitted successfully") : "Submitting exam..." }
                        </h1>

                        {
                            submittedStatus === submittedStatusCodes.submitted ? (
                                <h2>
                                    <Link to={`/exam/analysis/${resultId}`}>View result</Link>
                                </h2>
                            ) : ""
                        }
                    </>
                )}
            </div>
            
            <div className="sections" ref={containerRef}>
                {
                    data.map((section, index) => (
                        <Section
                            className="section"
                            key={index}
                            id={section.id}
                            name={section.name}
                            questions={section.questions}
                            currentSection={currentSection}
                            sectionIndex={index}
                            markAnswer={markAnswer}
                            attemptedQuestions={attemptedQuestions}
                        />
                    ))
                }
            </div>
        </div>
    );
}

export default Container;

