import React from "react";


export default function Question(props){
    return(
        <div className="questionContainer">
       
            <h3>Q {props.qnum} : {props.ques}</h3>
            <input type="radio" name= {props.ques} value='A' onChange={(e)=>props.onChange(props.qnum,e.target.value)}/>A.{props.opA}
            <br></br>
            <input type="radio" name= {props.ques} value='B' onChange={(e)=>props.onChange(props.qnum,e.target.value)}/>B.{props.opB}
            <br></br>
            <input type="radio" name= {props.ques} value='C' onChange={(e)=>props.onChange(props.qnum,e.target.value)}/>C.{props.opC}
            <br></br>
            <input type="radio" name= {props.ques} value='D'onChange={(e)=>props.onChange(props.qnum,e.target.value)}/>D.{props.opD}
           

       
       </div>
        
    )
    
}