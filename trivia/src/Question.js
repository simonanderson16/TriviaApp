import { useState, useEffect } from "react";
import AnswerChoice from "./AnswerChoice";
import "./styles.css"

export default function Question({question, number, totalCorrect, handleCorrect, handleGuess, totalGuessed}) {

    //const [totalCorrect, SetTotalCorrect] = useState(0);

    const [hasBeenAnswered, setHasBeenAnswered] = useState(false);

    const HTMLDecoder = require("html-encoder-decoder");


    // const getFormattedString = (string) => {
    //     const stringWithQuotes = string.replaceAll("&quot;", "\"");
    //     const stringWithApostrophes = stringWithQuotes.replaceAll("&#039;", "'");
    //     const stringWithAccents = stringWithApostrophes.replaceAll("&eacute;", "é");
    //     const stringWithPi = stringWithAccents.replaceAll("&pi;", "π");
    //     const stringWithAnd =stringWithPi.replaceAll("&amp;", "&");

    //     return stringWithAnd;
    // }

    // let answerChoices;
    // const randomizeOrderOfAnswerChoices = (question) => {
    //     answerChoices = [...question.incorrect_answers, question.correct_answer];
    //     //console.log("incorrect answers: " + answerChoices);
    //     //answerChoices.push(question.correct_answer);
    //     shuffleArray(answerChoices);
    // }

    // let answerChoices = [...question.incorrect_answers, question.correct_answer];
    // shuffleArray(answerChoices);

    const [answerChoices, setAnswerChoices] = useState([]);
    useEffect(() => {
        const shuffledChoices = [...question.incorrect_answers, question.correct_answer];
        shuffleArray(shuffledChoices);
        setAnswerChoices(shuffledChoices);
    }, [question]);

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            let temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    }

    return (
        <div className="whole_question">
            <h3 style={{color: "purple"}}>Question {number}</h3>
            <p>{/*JSON.stringify(question.question)*/}</p>
            <p className="question-text" style={{fontWeight: 'bold'}}>{HTMLDecoder.decode(question.question)}</p>
            {/*question.map(q => <AnswerChoice>{q.correct_answer}</AnswerChoice>)*/}
            {/*randomizeOrderOfAnswerChoices(question)*/}
            {answerChoices.map((item, index) => <AnswerChoice key={index} singleAnswer={HTMLDecoder.decode(item)} correctAnswer={question.correct_answer} currentCorrect={totalCorrect} handleCorrectAnswer={handleCorrect} alreadyAnswered={hasBeenAnswered} answerQuestion={setHasBeenAnswered} currentGuessed={totalGuessed} handleGuessAttempt={handleGuess}/>)}
            <p style={{marginTop: "20px"}}>Total Correct: {totalCorrect}/{totalGuessed}</p>
        </div>
    );

    // &quot; => "
    // &#039; => '
    // &eacute; => é
}