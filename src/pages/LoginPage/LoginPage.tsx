import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../store/slices/authSlice";
import { RootState, AppDispatch } from "../../store/store";

const LoginPage: React.FC = () => {
    const [username, setUsername] = useState('');
    const dispatch: AppDispatch = useDispatch();
    const navigate = useNavigate();
    const error = useSelector((state: RootState) => state.auth.error);

    const handleLogin = async () => {
        const result = await dispatch(login(username));
        if (login.fulfilled.match(result)) {
            navigate('/profile');
        }
    };

    const changeHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
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
