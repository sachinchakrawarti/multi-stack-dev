import {useState} from "react";


export default function useFullscreen(ref){


const [fullscreen,setFullscreen]=useState(false);



const openFullscreen=()=>{


if(ref.current){


ref.current.requestFullscreen();


setFullscreen(true);


}


};



const exitFullscreen=()=>{


document.exitFullscreen();


setFullscreen(false);


};



return {

fullscreen,

openFullscreen,

exitFullscreen

};


}