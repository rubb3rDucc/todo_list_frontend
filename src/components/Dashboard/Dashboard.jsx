import { useState, useEffect } from "react";
import AddNewNote from "../AddNewNote/AddNewNote";
import TodoItem from "../TodoItem/TodoItem";

async function getUserData(credentials) {
    return fetch('http://localhost:3000/todo/byUserId', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
        .then(data => data.json())
        .then(data => {
            return data.data.rows;
        })
}

export default function Dashboard() {
    const [dataList, setDataList] = useState([]);
    // const [messageList, setMessageList] = useState(["Milk", "Sugar", "Butter"]);

    useEffect(() => {
        const handleDataFetch = async () => {
            let d = await getUserData({ "userId": 231 }).then((result) => { return result; }).catch((error) => {
                console.log(error);
                return null;
            });
            setDataList(...dataList, d);
        };
        handleDataFetch();
    }, []);

    console.log(dataList);

    const addTodo = async (data) => {
        let min = 20;
        let max = 1000;
        let randomNum = Math.floor(Math.random() * (max - min) + min);

        console.log(randomNum);

        let payload = {
            'user_id': dataList[0].user_id,
            'todo_id': randomNum,
            'content': data.content,
            'title': data.title,
            'completed': false
        }

        console.log(payload);

        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        }

        const response = await fetch('http://localhost:3000/todo', options);
        const jsonResponse = await response.json();
        console.log(JSON.stringify(jsonResponse));
        
        return jsonResponse;
        
        // setDataList([...setDataList, p]);
    };
    
    const deleteTodo = async (dataList) => {
        console.log(dataList.todo_id);
        // let deleteDataList = dataList.todo_id;
        
        const options = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({'todo_id': dataList.todo_id})
        }
        
        const response = await fetch('http://localhost:3000/todo', options);
        const jsonResponse = await response.json();
        console.log(JSON.stringify(jsonResponse));
        return jsonResponse;
        
        // setDataList([
        //     ...dataList.slice(0, deleteDataList),
        //     ...dataList.slice(deleteDataList + 1)
        // ]);
    };

    const toggleComplete = async (data) => {
        let toggle = false;
        
        if (data.completed == false) 
        {
            toggle = true;
        }
        else
        {
            toggle = false;
        }
        
        console.log('data', data);
        console.log('toggle determined', toggle);

        const options = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                {
                    'user_id': data.user_id,
                    'todo_id': data.todo_id,
                    'completed': !data.completed
            })
        }

        const response = await fetch('http://localhost:3000/todo/toggleCompleted', options);
        const jsonResponse = await response.json();
        console.log(JSON.stringify(jsonResponse));
        return jsonResponse;
    };

    return (
        <>
            <h2>Dashboard</h2>
            <AddNewNote addTodo={addTodo} />

            <main className="container">
                {dataList.map((data, index) => (
                    <TodoItem data={data} deleteTodo={deleteTodo} toggleComplete={toggleComplete} key={index} />
                ))}
                {/* {dataList.map(data => {
                        return (
                            <section className="item" key={data.index}>
                                <p>
                                    {data.title}
                                </p>
                                <p>
                                    {data.content}
                                </p>
                                <button type="button">Delete</button>
                                <button type="button" onClick={deleteTodo}>Edit</button>
                            </section>
                        )
                    })} */}
            </main>
        </>
    )
}