import { useState } from "react";

export default function AddNewNote({ addTodo }) {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const titleChangeHandler = (event) => {
        setTitle(event.target.value);
    };

    const contentChangeHandler = (event) => {
        setContent(event.target.value);
    };

    const submitHandler = (event) => {
        let input = { title, content }
        addTodo(input);
        setTitle("");
        setContent("");
    };

    return (
        <div id="form">
            <h3>Add a New Todo: </h3>
       
                <div className="field">
                    <label className="label" htmlFor="todo-title">Title:</label>
                    <div className="control">
                        <input
                            className="input"
                            type="text"
                            name="todo-title"
                            id="todo-title"
                            onChange={titleChangeHandler}
                            value={title}
                        />
                    </div>
                </div>
                <div className="field">
                    <label className="label" htmlFor="todo-content">Content:</label>
                    <div className="control">

                        <input
                            className="input"
                            type="text"
                            name="todo-content"
                            id="todo-content"
                            onChange={contentChangeHandler}
                            value={content}
                        />
                    </div>
                </div>
                <button
                    className="button is-link"
                    onClick={submitHandler}
                >
                    Add
                </button>
        </div>
    )
}