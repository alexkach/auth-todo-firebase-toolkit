import { Link } from "react-router-dom";
import { Login } from "../components/Login";

export const LoginPage = () => {
    return (
        <div>
            <h1>Login</h1>
            <Login />
            <p>
                Or <Link to="/register">registration</Link>
            </p>
        </div>
    );
};
