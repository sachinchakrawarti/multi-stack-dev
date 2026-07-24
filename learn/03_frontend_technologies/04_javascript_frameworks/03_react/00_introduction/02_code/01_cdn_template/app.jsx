function App(){

    return(

        <>

            <Header/>

            <Alert/>

            <Card/>

            <Button/>

            <Counter/>

            <UserCard/>

            <ProductList/>

            <Footer/>

        </>

    );

}

const root=ReactDOM.createRoot(

    document.getElementById("root")

);

root.render(

    <App/>

);