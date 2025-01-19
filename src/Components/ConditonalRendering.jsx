import { useState } from "preact/hooks"

function ConditionalRendering() {
    const[isLoggedIn, setIsLoggedIn] = useState(true);

    const handleClick = () => {
        setIsLoggedIn(!isLoggedIn);
    }
    return (
        <div>
          <p> {isLoggedIn ? "Logged In" : "Please! Log In"} </p>  
          <button onClick={handleClick}> Sign In </button>
        </div>
    )
}

export default ConditionalRendering