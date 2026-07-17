import React from "react";


export default function TwoColumnLayout({

left,

right,

title

}) {


return (

<div className="slide two-column-layout">


{
title &&
<h1>

{title}

</h1>
}



<div className="columns">


<div className="left-column">

{left}

</div>



<div className="right-column">

{right}

</div>



</div>


</div>


);


}