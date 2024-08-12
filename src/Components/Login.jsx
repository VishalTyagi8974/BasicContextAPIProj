import { useContext } from "react";
import UserContext from "./UserContext";
import { useState } from "react";

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const { setUser } = useContext(UserContext);
    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({ username, password });

    }

    return (
        <>
            <h2>Login</h2>
            <form action="" onSubmit={(e) => handleSubmit(e)} >
                <input type="text" name="" onChange={(e) => setUsername(e.target.value)} id="name" placeholder="username" />
                <input type="password" onChange={(e) => setPassword(e.target.value)} name="" id="pass" placeholder="password" />
                <button >Submit</button>
            </form>
        </>
    )
}