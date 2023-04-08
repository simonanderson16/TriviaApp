import { useState, useEffect } from "react";
import QuestionsDropdown from "./QuestionsDropdown";
import CategoryDropdown from "./CategoryDropdown";
import Button from '@mui/material/Button';
import Question from "./Question";
import "./styles.css"

export default function Trivia() {
    
    const [totalCorrect, SetTotalCorrect] = useState(0);
    const [totalAnswered, setTotalAnswered] = useState(0);
    const [started, setStarted] = useState(false);
    const [restarted, setRestarted] = useState(false);
    
    const[questions, setQuestions] = useState([]);
    console.log(questions);
    // useEffect(() => {
    //     generateQuestions(setQuestions);
    // }, []);

    //==================================================

    let numQuestions;
    let category;

    function GetNumQuestions(selectedNumQuestions) {
        numQuestions = selectedNumQuestions;
        console.log(numQuestions);
    }

    function GetAdditionalQuestions(selectedNumQuestions) {
        numQuestions = selectedNumQuestions;
        console.log(numQuestions);
    }

    function GetCategory(selectedCategory) {
        category = selectedCategory;
        console.log(category);
    }

    function reloadPage() {
        window.location.reload();
    }

    function closePage() {
        window.close();
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
        <div className="trivia-intro">
            {!started && ( 
                <div className="intro-options">
                    <h1>Trivia!</h1>
                    <h2>Questions:</h2>
                    <QuestionsDropdown handleGetNumQuestions={GetNumQuestions}/>
                    <h2>Category:</h2>
                    <CategoryDropdown handleGetCategory={GetCategory}/>
                    <Button variant="contained" className="start-button" onClick={() => {
                        generateQuestions(setQuestions)
                        setStarted(true)}
                    }>Start</Button>
                </div>
            )}
            {started && 
            <>
                <h1 style={{marginLeft: "50px"}}>Trivia!</h1>
                {questions.map((info, index) => <Question key={index} question={info} number={index+1} totalCorrect={totalCorrect} handleCorrect={SetTotalCorrect} totalGuessed={totalAnswered} handleGuess={setTotalAnswered}/>)}
                {totalAnswered === questions.length &&
                 <div className="more-questions-prompt">
                    {/*<h3>How many more questions would you like?</h3>
                    <QuestionsDropdown handleGetNumQuestions={GetAdditionalQuestions}/>
                    <CategoryDropdown handleGetCategory={GetCategory}/>
                    <Button id="more-questions-button" variant="contained" onClick ={() => {
                        generateQuestions(setQuestions);
                        setRestarted(true);
                    }}>GO</Button>*/}
                    <h2>Final Score: {totalCorrect}/{totalAnswered}</h2>
                    <h3>Play Again?</h3>
                    <Button variant="contained" onClick={reloadPage}>YES</Button>
                    <Button variant="contained" onClick={closePage}>NO</Button>
                    {window.scrollTo(0, document.body.scrollHeight)}
                </div>
                }
            </>}
        </div>
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