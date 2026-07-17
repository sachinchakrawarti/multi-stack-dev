import React from "react";

export default function DefaultLayout({
    title,
    children
}) {

return (

<div className="slide default-layout">

    {
      title &&
      <h1 className="slide-title">
        {title}
      </h1>
    }


    <div className="slide-content">

        {children}

    </div>


</div>

);

}