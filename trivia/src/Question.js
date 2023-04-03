
export default function Question({question, number}) {

    const getFormattedQuestionText = (string) => {
        const stringWithQuotes = string.replace("&quot;", "\"");
        const stringWithApostrophes = stringWithQuotes.replace("&039;", "'");
        return stringWithApostrophes;
    }

    return (
        <>
        <p>Question {number}</p>
        <p>{JSON.stringify(question.question)}</p>
        <p>{getFormattedQuestionText(JSON.stringify(question.question))}</p>
        {console.log(question)}
        </>
    );

    // &quot; => "
    // #039; => '
}