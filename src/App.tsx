import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import TasksPage from './pages/TasksPage/TasksPage';
import NotesPage from './pages/NotesPage/NotesPage';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import LoginPage from './pages/LoginPage/LoginPage';
import { RootState } from './store/store';

const App: React.FC = () => {
  const userName = useSelector((state: RootState) => state.auth.user);

  return (
    <Router>
      <Routes>
        <Route path="/" element={userName ? <Navigate to="/profile" /> : <LoginPage />} />
        <Route path="/notes" element={<NotesPage />} />
        <Route path="/tasks" element={<TasksPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default App;
