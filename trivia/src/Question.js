import AnswerChoice from "./AnswerChoice";
import "./styles.css"

export default function Question({question, number}) {

    const getFormattedQuestionText = (string) => {
        const stringWithQuotes = string.replaceAll("&quot;", "\"");
        const stringWithApostrophes = stringWithQuotes.replaceAll("&#039;", "'");
        const stringWithAccents = stringWithApostrophes.replaceAll("&eacute;", "é");

        return stringWithAccents;
    }

    let answerChoices;
    const randomizeOrderOfAnswerChoices = (question) => {
        answerChoices = [...question.incorrect_answers, question.correct_answer];
        //console.log("incorrect answers: " + answerChoices);
        //answerChoices.push(question.correct_answer);
        shuffleArray(answerChoices);

    }

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
            <h3>Question {number}</h3>
            <p>{/*JSON.stringify(question.question)*/}</p>
            <p>{getFormattedQuestionText((question.question))}</p>
            {/*question.map(q => <AnswerChoice>{q.correct_answer}</AnswerChoice>)*/}
            {randomizeOrderOfAnswerChoices(question)}
            {answerChoices.map(item => <AnswerChoice allAnswers={item} correctAnswer={question.correct_answer}/>)}
        </div>
    );

    // &quot; => "
    // &#039; => '
    // &eacute; => é
}