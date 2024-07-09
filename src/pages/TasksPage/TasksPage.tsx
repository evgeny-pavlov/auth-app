import React from "react";
import Task from "../../components/Task/Task";
import Sidebar from "../../components/Sidebar/Sidebar";

const taskArr = [
    { title: 'Important!', text: 'Buy mom a birthday present', id: 't1' },
    { title: 'Grocery', text: 'Milk, tea, bread', id: 't2' },
    { title: 'Prog', text: 'Build an app', id: 't3' },
    { title: 'Resume', text: 'Write the resume', id: 't4' },
    { title: 'Job', text: 'Find a job', id: 't5' },
];

const TasksPage: React.FC = () => {
    const tasks = taskArr.map((item) => {
        return (
            <Task
                key={item.id}
                title={item.title}
                text={item.text}
                id={item.id}
            />
        );
    });

    return (
        <div style={{ display: 'flex' }}>
            <Sidebar />
            <div style={{ marginLeft: '3rem' }}>
                <h2>Tasks</h2>
                <ul>
                    {tasks}
                </ul>
            </div>
        </div>
    )
}

export default TasksPage;
