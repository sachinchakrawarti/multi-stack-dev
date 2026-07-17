import React from "react";


export default function CodeBlock({
language="javascript",
children
}){


return (

<pre className="code-block">

<code className={`language-${language}`}>

{children}

</code>

</pre>

);


}