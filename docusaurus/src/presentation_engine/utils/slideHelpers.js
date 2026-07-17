export function getSlideNumber(
current,
total
){

return {

current: current + 1,

total,

text:
`${current+1} / ${total}`

};


}



export function getProgress(
current,
total
){

return (

((current+1)/total)*100

);


}