function ProductList(){

    const products=[

        "Laptop",

        "Mouse",

        "Keyboard",

        "Monitor"

    ];

    return(

        <div className="card">

            <h2>Products</h2>

            <ul>

                {

                    products.map(

                        (item,index)=>

                        <li key={index}>

                            {item}

                        </li>

                    )

                }

            </ul>

        </div>

    );

}