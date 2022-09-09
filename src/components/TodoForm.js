import React, { useState, useRef, useEffect } from "react";

function TodoForm({ edit, onSubmit }) {
    const [input, setInput] = useState(edit ? edit.value : "");

    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    });

    const handleChange = (e) => {
        setInput(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input,
        });

        setInput("");
    };

    return edit ? (
        <form className="todo-form edit" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Update your item"
                value={input}
                name="text"
                className="todo-input edit"
                onChange={handleChange}
                ref={inputRef}
            />
            <button onClick={handleSubmit} className="todo-button edit">
                Update
            </button>
        </form>
    ) : (
        <form className="todo-form" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Add a todo"
                value={input}
                name="text"
                className="todo-input"
                onChange={handleChange}
                ref={inputRef}
            />
            <button onClick={handleSubmit} className="todo-button">
                Add todo
            </button>
        </form>
    );
}

export default TodoForm;
