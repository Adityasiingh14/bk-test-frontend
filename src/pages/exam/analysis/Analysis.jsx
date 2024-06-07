import { useEffect, useState } from "react";
import "./Analysis.css";
import { useParams } from "react-router-dom";
import api from "../../../api";

function Analysis() {
  let params = useParams();
  let resultId = params.id;
  let [resultData, setResultData] = useState(null);

  async function getResults() {
    let response = await api.exam.results.getResults(resultId);
    setResultData(response);
  }

  useEffect(() => {
    getResults();
  }, []);

  return (
    <div>
      <h1>Analysis</h1>

      {resultData ? (
        <div>
          <h3>Result ID: {resultData.resultId}</h3>
          <h3>Total Questions: {resultData.totalQuestions}</h3>
          <h3>Correct Count: {resultData.correctCount}</h3>
          <h3>Incorrect Count: {resultData.incorrectCount}</h3>
        </div>
      ) : (
        <h3>Loading...</h3>
      )}
    </div>
  );
}

export default Analysis;

