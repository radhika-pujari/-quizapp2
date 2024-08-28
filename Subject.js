import React from "react";
import Question from "./Question";

export  function Java(){
    const javaQuestions = [
        {
            qnum: '1',
            ques: 'Memory occupied by int variable is?',
            opA: '1 byte',
            opB: '8 bytes',
            opC: '4 bytes',
            opD: '2 bytes',
            ans: 'C',
        },
        {
            qnum: '2',
            ques: 'Memory occupied by char variable is?',
            opA: '1 byte',
            opB: '8 bytes',
            opC: '4 bytes',
            opD: '2 bytes',
            ans: 'D',
        },
        {
            qnum: '3',
            ques: 'Which keyword is used to define the subclass of a class in Java?',
            opA: 'extend',
            opB: 'extends',
            opC: 'subclass',
            opD: 'inherit',
            ans: 'B',
        },
        {
            qnum: '4',
            ques: 'What is the result of 10 % 3 in Java?',
            opA: '3',
            opB: '1',
            opC: '2',
            opD: '0',
            ans: 'C',
        }
        // Add more questions as needed
    ];
    
    return(
        <div>
            <h1> Java Assessment</h1>
            <form>
                {
                   javaQuestions.map(
                        (question) =>(
                            <Question
                            qnum={question.qnum}
                            ques={question.ques}
                            opA={question.opA}
                            opB={question.opB}
                            opC={question.opC}
                            opD={question.opD}
                            />

                        )
                    )
                }
                <br></br>
                <button type="sumit">Get Result</button>
            </form>
        </div>

    )   
}
export  function SQL(){
    const sqlQuestions = [
        {
            qnum: '1',
            ques: 'What does SQL stand for?',
            opA: 'Structured Query Language',
            opB: 'Sequential Query Language',
            opC: 'Structured Question Language',
            opD: 'Sequential Question Language',
            ans: 'A',
        },
        {
            qnum: '2',
            ques: 'Which SQL statement is used to extract data from a database?',
            opA: 'EXTRACT',
            opB: 'SELECT',
            opC: 'GET',
            opD: 'OPEN',
            ans: 'B',
        },
        {
            qnum: '3',
            ques: 'Which SQL keyword is used to sort the result set in descending order?',
            opA: 'ORDER BY DESC',
            opB: 'SORT DESC',
            opC: 'ORDER DESC',
            opD: 'DESC',
            ans: 'D',
        },
        {
            qnum: '4',
            ques: 'Which SQL function is used to count the number of rows in a table?',
            opA: 'COUNT(*)',
            opB: 'SUM(*)',
            opC: 'TOTAL(*)',
            opD: 'NUMBER(*)',
            ans: 'A',
        }
       
    ];
    
    
    return(
        <div>
            <h1> SQL Assessment</h1>
            <form>
                {
                    sqlQuestions.map(
                        (question) =>(
                            <Question
                            qnum={question.qnum}
                            ques={question.ques}
                            opA={question.opA}
                            opB={question.opB}
                            opC={question.opC}
                            opD={question.opD}
                            />

                        )
                    )
                }
                <br></br>
                <button type="sumit">Get Result</button>
            </form>
        </div>

    )   
}
export  function HTML(){
    const htmlQuestions = [
        {
            qnum: '1',
            ques: 'What does HTML stand for?',
            opA: 'Hyper Text Markup Language',
            opB: 'Hyperlinks and Text Markup Language',
            opC: 'Home Tool Markup Language',
            opD: 'Hyper Tool Markup Language',
            ans: 'A',
        },
        {
            qnum: '2',
            ques: 'Which HTML tag is used to define an unordered list?',
            opA: '<ul>',
            opB: '<ol>',
            opC: '<li>',
            opD: '<dl>',
            ans: 'A',
        },
        {
            qnum: '3',
            ques: 'Which HTML attribute is used to define inline styles?',
            opA: 'class',
            opB: 'style',
            opC: 'font',
            opD: 'styles',
            ans: 'B',
        },
        {
            qnum: '4',
            ques: 'What does the <a> tag represent in HTML?',
            opA: 'An image',
            opB: 'A paragraph',
            opC: 'A link',
            opD: 'A table',
            ans: 'C',
        }
        // Add more questions as needed
    ];
    
    return(
        <div>
            <h1> HTML Assessment</h1>
            <form>
                {
                    htmlQuestions.map(
                        (question) =>(
                            <Question
                            qnum={question.qnum}
                            ques={question.ques}
                            opA={question.opA}
                            opB={question.opB}
                            opC={question.opC}
                            opD={question.opD}
                            />

                        )
                    )
                }
                <br></br>
                <button type="sumit">Get Result</button>
            </form>
        </div>

    )   
}






