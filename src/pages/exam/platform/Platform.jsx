import { useEffect, useState } from "react";
import "./Platform.css";

import api from "../../../api";

import { SectionContainer } from "../../../components";
import "./Platform.css";

function Platform() {
    let [data, setData] = useState(null);

    async function fetchData() {
        let result = await api.exam.platform.getQuestions();
        setData(result);
    }

    function countTotalQuestions() {
        let count = 0;

        data.forEach(section => {
            count += section.questions.length;
        });

        return count;
    }

    useEffect(() => {
        fetchData();
    }, []);
    
    return (
        <div className="platform-page">
            { data === null ? (
                <div className="loading">
                    Loading questions...
                </div>
            ) : (
                <SectionContainer
                    data={data}
                    questionCount={countTotalQuestions()}
                />
            ) }
        </div>
    );
}

export default Platform;

