async function getQuestionsAPI() {
    let dummyQuestions = [
        {
            id: 1,
            name: "Section 1",
            questions: [
                {
                    id: 1,
                    type: "objective",
                    question: "What is the capital of India?",
                    options: [
                        {
                            id: 1,
                            option: "New Delhi"
                        },
                        {
                            id: 2,
                            option: "Mumbai"
                        },
                        {
                            id: 3,
                            option: "Kolkata"
                        },
                        {
                            id: 4,
                            option: "Chennai"
                        }
                    ]
                },
                {
                    id: 2,
                    type: "objective",
                    question: "What is the capital of USA?",
                    options: [
                        {
                            id: 1,
                            option: "New York"
                        },
                        {
                            id: 2,
                            option: "Los Angeles"
                        },
                        {
                            id: 3,
                            option: "Washington D.C."
                        },
                        {
                            id: 4,
                            option: "Chicago"
                        }
                    ]
                }
            ]
        },
        {
            id: 2,
            name: "Section 2",
            questions: [
                {
                    id: 3,
                    type: "objective",
                    question: "What is 2 + 2?",
                    options: [
                        {
                            id: 1,
                            option: "3"
                        },
                        {
                            id: 2,
                            option: "4"
                        },
                        {
                            id: 3,
                            option: "5"
                        },
                        {
                            id: 4,
                            option: "6"
                        }
                    ]
                },
                {
                    id: 4,
                    type: "objective",
                    question: "What is 3 + 3?",
                    options: [
                        {
                            id: 1,
                            option: "5"
                        },
                        {
                            id: 2,
                            option: "6"
                        },
                        {
                            id: 3,
                            option: "7"
                        },
                        {
                            id: 4,
                            option: "8"
                        }
                    ]
                }
            ]
        }
    ];

    // return new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //         resolve({
    //             status: 200,
    //             data: dummyQuestions
    //         });
    //     }, 2000);
    // });

    let response = await fetch("http://localhost:8080/api/test-app/v1/test", {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    });

    let data = response.json();

    // return data;
    return dummyQuestions;
}

async function submitExamAPI(data) {
    console.log(data);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                status: 200,
                message: "Exam submitted successfully",
                resultId: (Math.random() * Math.pow(2,53)).toString(36)
            });
        }, 2000);
    });
}

let platformAPI = {
    getQuestions: getQuestionsAPI,
    submitExam: submitExamAPI
};

export default platformAPI;

