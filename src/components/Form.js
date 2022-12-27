import { useState } from "react";

export const Form = ({ handleClick, title }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div>
            <input
                value={email}
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="email"
            />
            <input
                value={password}
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                placeholder="password"
            />
            <button onClick={handleClick}> {title} </button>
        </div>
    );
};
