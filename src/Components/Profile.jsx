import { useContext } from "react";
import UserContext from "./UserContext";

export default function Profile() {
    const { user } = useContext(UserContext);
    return user ? <h2> Hi... {user.username}</h2> : <h2>Please Login</h2>
}