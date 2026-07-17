import React from "react";

export default function Slide({
    children,
    title
}) {

return (

<section className="slide">

    {
      title &&
      <h1 className="slide-title">
        {title}
      </h1>
    }


    <div className="slide-content">
        {children}
    </div>


</section>

);

}