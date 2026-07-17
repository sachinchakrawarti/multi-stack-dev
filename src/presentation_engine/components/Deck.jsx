import React from "react";

import useSlideNavigation from "../hooks/useSlideNavigation";

import usePresentation from "../hooks/usePresentation";


export default function Deck({children}){


const slides =
React.Children.toArray(children);



const {

current,

setCurrent

}=usePresentation(
slides.length
);



useSlideNavigation({

current,

total:slides.length,

setCurrent

});



return (

<div className="presentation-deck">


{slides[current]}



<div className="progress">


{current+1}

/

{slides.length}


</div>



</div>


);


}