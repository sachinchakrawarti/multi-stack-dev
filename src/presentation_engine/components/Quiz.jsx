import React,{useState} from "react";


export default function Quiz({
question,
answer
}){


const [show,setShow]=useState(false);


return (

<div className="quiz">


<h3>
❓ {question}
</h3>


<button
onClick={()=>setShow(!show)}
>
Show Answer
</button>


{
show &&
<p>
{answer}
</p>
}


</div>

);


}