import { useState, useEffect } from "react";
import QuestionsDropdown from "./QuestionsDropdown";
import CategoryDropdown from "./CategoryDropdown";
import Button from '@mui/material/Button';

export default function Trivia() {
    const[questions, setQuestions] = useState([]);
    console.log(questions);
    useEffect(() => {
        generateQuestions(setQuestions);
    }, []);
    return(
        <>
            <h2>Questions:</h2>
            <QuestionsDropdown/>
            <h2>Category:</h2>
            <CategoryDropdown/>
            <Button variant="contained">Start</Button>
        </>
    );
}

const generateQuestions = (setData) => {
    let url = "https://opentdb.com/api.php?";
    // if amount is 0, stop program
    // else, add "amount=__" where __ is the value from the QuestionsDropdown
    url = url + "amount=1";

    // if category is Any category, continue
    // else, add "&category=__" where __ is the value from the CategoryDropdown

    fetch(url)
        .then((res) => res.json())
        .then((data) => setData(data.results));
};