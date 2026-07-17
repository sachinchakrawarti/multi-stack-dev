import React from "react";

export default function TitleSlide({
 title,
 subtitle
}) {

return (

<div className="title-slide">

<h1>
{title}
</h1>


<p>
{subtitle}
</p>


</div>

);

}