import { Navigate, Link } from "react-router-dom";

export const RegisterPage = () => {
    return (
        <div>
            <h1> Register </h1>
            <p>
                Already have an account <Link to={"/login"}> Sign in </Link>
            </p>
        </div>
    );
};
