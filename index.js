import React from "react";
import ReactDom from "react-dom";
import "./index.css";

let curDate=new Date(2022,5,7,19);
curDate=curDate.getHours();
let greeting= "";
const cssStyle={};
  


 if(curDate>=1 && curDate<12) 
 {
  greeting="Good Morning";
  cssStyle.color="green";
 }
 else if(curDate>=12 && curDate<19)
 {
  greeting="Good Afternoon";
  cssStyle.color="blue";
 }
 else{
  greeting="Good Night";
  cssStyle.color="red";
 } 

ReactDom.render(


<div>
<h1>Hello Everyone,<span style={cssStyle}>{greeting}</span> </h1>
 </div>,
  
  document.getElementById("root")

);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

