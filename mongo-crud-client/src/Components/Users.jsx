import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const Users = () => {
    const totalUsers = useLoaderData();
    const [users, setUsers] = useState(totalUsers);

    const handleDelete = (_id) => {
        console.log(_id);
        fetch(`https://coffee-shop-server-1ffisa7uf-askats-projects.vercel.app/users/${_id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0) {
                    alert("Successfully deleted one document.")
                    const remainingUsers = users.filter(user => user._id !== _id);
                    setUsers(remainingUsers);
                } else {
                    alert("No documents matched the query. Deleted 0 documents.")
                }
            })
    }
    return (
        <div>
            <h2>Total Users: {users.length}</h2>
            <div>
                {
                    users.map(user => <p key={user._id}>
                        Name: {user.name},
                        Email: {user.email} <Link to={`/update/${user._id}`}>
                            <button>U</button>
                        </Link> <button
                            onClick={() => handleDelete(user._id)}
                        >X</button>
                    </p>)
                }
            </div>
        </div>
    );
};

export default Users;