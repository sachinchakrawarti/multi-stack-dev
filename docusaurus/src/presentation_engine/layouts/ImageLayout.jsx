import React from "react";


export default function ImageLayout({

image,

title,

children

}) {


return (

<div className="slide image-layout">


<div className="image-section">


<img

src={image}

alt={title}

/>


</div>



<div className="content-section">


<h1>

{title}

</h1>


<div>

{children}

</div>


</div>


</div>

);


}