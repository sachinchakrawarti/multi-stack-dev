import React from "react";


export default function ImageCard({
src,
title
}){


return (

<div className="image-card">


<img src={src}/>


<h3>
{title}
</h3>


</div>

);


}