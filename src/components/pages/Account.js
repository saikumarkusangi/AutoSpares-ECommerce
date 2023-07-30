import Login from "./Login";


const Account = () => {
    const isLogged = false;
    return(
        <div>
            {isLogged ? <div>Hi</div>
                      : <Login/>
             }
        </div>
    )
}

export default Account