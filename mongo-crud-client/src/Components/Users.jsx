import { useLoaderData } from "react-router-dom";

const Users = () => {
    const users = useLoaderData();

    const handleDelete = (_id) => {
        console.log(_id);
    }
    return (
        <div>
            <h2>Total Users: {users.length}</h2>
            <div>
                {
                    users.map(user => <p key={user._id}>
                        Name: {user.name}, 
                        Email: {user.email} <button
                        onClick={() => handleDelete(user._id)}
                        >X</button>
                        </p>)
                }
            </div>
        </div>
    );
};

export default Users;