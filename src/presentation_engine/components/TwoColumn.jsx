import React from "react";


export default function TwoColumn({
left,
right
}){


return (

<div className="two-column">


<div>
{left}
</div>


<div>
{right}
</div>


</div>


);


}