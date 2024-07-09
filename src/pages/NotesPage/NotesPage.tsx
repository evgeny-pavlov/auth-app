import React from "react";
import Note from "../../components/Note/Note";
import Sidebar from "../../components/Sidebar/Sidebar";

const notesArr = [
    { title: 'My number', text: '8800 555 35 35', id: 'n1' },
    { title: 'To watch', text: 'The movie', id: 'n2' },
    { title: 'To read', text: 'The book', id: 'n3' },
];

const NotesPage: React.FC = () => {
    const notes = notesArr.map((item) => {
        return (
            <Note
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
                <h2>Notes</h2>
                <ul>
                    {notes}
                </ul>
            </div>
        </div>
    )
}

export default NotesPage;
