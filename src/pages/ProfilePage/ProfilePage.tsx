import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import { useDispatch, useSelector } from 'react-redux';
import { logout } from "../../store/slices/authSlice";
import { useNavigate } from 'react-router-dom';
import { RootState } from "../../store/store";

const notes = 3;
const tasks = 5;

const ProfilePage: React.FC = () => {
    const user = useSelector((state: RootState) => state.auth.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(logout());
        navigate('/');
      };

    return (
        <div style={{ display: 'flex' }}>
            <Sidebar />
            <div style={{ marginLeft: '3rem' }}>
                <h2>Hello, {user}</h2>
                <div>You have:</div>
                <ul>
                    <li>{tasks} tasks</li>
                    <li>{notes} notes</li>
                </ul>
            <button onClick={handleLogout}>logout</button>
            </div>
        </div>
    )
}

export default ProfilePage;
