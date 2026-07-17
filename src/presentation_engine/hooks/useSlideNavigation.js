import { useEffect } from "react";


export default function useSlideNavigation({
    current,
    total,
    setCurrent
}) {


useEffect(()=>{


const handleKey=(event)=>{


switch(event.key){


case "ArrowRight":

setCurrent(
Math.min(current+1,total-1)
);

break;



case "ArrowLeft":

setCurrent(
Math.max(current-1,0)
);

break;



case "Home":

setCurrent(0);

break;



case "End":

setCurrent(total-1);

break;


default:

break;


}



};


window.addEventListener(
"keydown",
handleKey
);



return ()=>{

window.removeEventListener(
"keydown",
handleKey
);

};


},[
current,
total,
setCurrent
]);


}