import React from "react";

type TaskProps = {
    title: string,
    text: string,
    id: string
}

const Task:React.FC<TaskProps> = ({ title, text, id }) => {
    return (
        <li id={id}>
            <h3>{title}</h3>
            <p>{text}</p>
        </li>
    );
}

export default Task;
