import { useState, useEffect } from "react";

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
    const [data, setData] = useState([]);

    useEffect(() => {
        const handleDataFetch = async () => {
            let d = await getUserData({ "userId": 231 }).then((result) => {
                return result;
            })
                .catch((error) => {
                    console.log(error);
                    return null;
                });
            setData(...data, d);

        };
        handleDataFetch();
    }, []);

    console.log(data)

    return (
        <>
            <h2>Dashboard</h2>
            <p></p>
            <section>
                <p>
                    {data.map(d => {
                        return (
                            <section key={d.index}>
                                <p>
                                    {d.title}
                                </p>
                                <p>
                                    {d.content}
                                </p>
                            </section>
                        )
                    })}
                </p>
            </section>
        </>
    )
}