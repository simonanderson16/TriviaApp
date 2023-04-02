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

    //==================================================

    let numQuestions;
    let category;

    function GetNumQuestions(selectedNumQuestions) {
        numQuestions = selectedNumQuestions;
        console.log(numQuestions);
    }

    function GetCategory(selectedCategory) {
        category = selectedCategory;
        console.log(category);
    }

    //===================================================

    const generateQuestions = (setData) => {
        let url = "https://opentdb.com/api.php?";
        // if amount is 0, stop program
        if(numQuestions === "0") {
            return;
        } else {
            url = url + "amount=" + numQuestions;
        }
        // else, add "amount=__" where __ is the value from the QuestionsDropdown
        //url = url + "amount=1";
    
        // if category is Any category, continue
        // else, add "&category=__" where __ is the value from the CategoryDropdown
        if(category !== "") {
            url = url + "&category=" + category;
        }

        console.log(url);
    
        fetch(url)
            .then((res) => res.json())
            .then((data) => setData(data.results));
    };

    return(
        <>
            <h2>Questions:</h2>
            <QuestionsDropdown handleGetNumQuestions={GetNumQuestions}/>
            <h2>Category:</h2>
            <CategoryDropdown handleGetCategory={GetCategory}/>
            <Button variant="contained" onClick={() => generateQuestions(setQuestions)}>Start</Button>
        </>
    );
}

// const generateQuestions = (setData) => {
//     let url = "https://opentdb.com/api.php?";
//     // if amount is 0, stop program
//     // else, add "amount=__" where __ is the value from the QuestionsDropdown
//     url = url + "amount=1";

//     // if category is Any category, continue
//     // else, add "&category=__" where __ is the value from the CategoryDropdown

//     fetch(url)
//         .then((res) => res.json())
//         .then((data) => setData(data.results));
// };