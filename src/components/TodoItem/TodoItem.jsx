export default function TodoItem({ data, deleteTodo, toggleComplete }) {
    // console.log(data);
    // const [title, content] = data;
    // console.log(title)
    // fix to delete stuff on the server
    const handleDelete = (event) => {
        deleteTodo(data);
    };
    
    const handleToggleComplete = (event) => {
        toggleComplete(data);
    };

    return (
        <li className="item">
            {/* <p>completed? {data.completed ? "yes" : "no"}</p> */}
            <input className="checkbox" type="checkbox" checked={data.completed ? true : false} onChange={handleToggleComplete}/>
            <p>
                {data.title}
            </p>
            <p>
                {data.content}
            </p>
            <button className="button is-primary" type="button" onClick={handleDelete}>Delete</button>
            {/* <button className="button is-info" type="button" onClick={handleToggleComplete}>Toggle Complete</button> */}
            <button className="button is-info" type="button">Edit</button>
        </li>
    );
}