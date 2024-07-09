import React from "react";

type NoteProps = {
    title: string,
    text: string,
    id: string
}

const Note:React.FC<NoteProps> = ({ title, text, id }) => {
    return (
        <li id={id}>
            <h3>{title}</h3>
            <p>{text}</p>
        </li>
    );
}

export default Note;
