import React from "react";


export default function Timeline({
items=[]
}){


return (

<div className="timeline">


{
items.map(
(item,index)=>

<div key={index}>

<strong>
{item.year}
</strong>

<p>
{item.text}
</p>

</div>

)
}


</div>


);


}