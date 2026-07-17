import React from "react";


export default function TitleLayout({
title,
subtitle,
author
}) {


return (

<div className="slide title-layout">


<div className="title-container">


<h1>

{title}

</h1>


<p>

{subtitle}

</p>


{
author &&
<span>

{author}

</span>
}


</div>


</div>

);


}