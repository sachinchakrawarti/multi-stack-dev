function Counter(){

    const [count,setCount]=React.useState(0);

    return(

        <div className="card">

            <h2>Counter</h2>

            <h3>{count}</h3>

            <button
                onClick={()=>setCount(count+1)}
            >

                Increment

            </button>

        </div>

    );

}