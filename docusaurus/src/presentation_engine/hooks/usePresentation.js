import {useState} from "react";


export default function usePresentation(totalSlides){


const [current,setCurrent]=useState(0);



return {


current,


setCurrent,


totalSlides,


progress:
((current+1)/totalSlides)*100



};


}