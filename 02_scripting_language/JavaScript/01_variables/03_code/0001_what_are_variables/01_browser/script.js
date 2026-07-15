const name = "Sachin";
const age = 22;
const city = "Bhopal";

document
.getElementById("btn")
.addEventListener("click",()=>{

document.getElementById("output").innerHTML=`

<h2>Variables</h2>

<p>Name : ${name}</p>

<p>Age : ${age}</p>

<p>City : ${city}</p>

`;

});