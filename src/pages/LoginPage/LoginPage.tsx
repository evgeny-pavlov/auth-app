//@ts-nocheck
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../store/slices/authSlice";

const LoginPage: React.FC = () => {
    const [username, setUsername] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const error = useSelector((state) => state.auth.error);

    const handleLogin = async () => {
        const result = await dispatch(login(username));
        if (login.fulfilled.match(result)) {
            navigate('/profile');
        }
    };

    const changeHandle = (e) => {
        setUsername(e.target.value);
    }

    return (
        <>
            <h1>Login App</h1>
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={changeHandle}
            />
            <button onClick={handleLogin}>Login</button>
            {error && <p>{error}</p>}
        </>
    )
}

export default LoginPage;
