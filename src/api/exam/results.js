async function getResultsAPI(resultId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                resultId: resultId,
                totalQuestions: 4,
                correctCount: 2,
                incorrectCount: 2
            });
        }, 2000);
    });
}

let resultsAPI = {
    getResults: getResultsAPI
}

export default resultsAPI;

