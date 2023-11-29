import { useLoaderData } from "react-router-dom";

const Users = () => {
    const users = useLoaderData();

    return (
        <div>
            <h2>Total Users: {users.length}</h2>
            <div>
                {
                    users.map(user => <p key={user._id}>Name: {user.name}, Email: {user.email}</p>)
                }
            </div>
        </div>
    );
};

export default Users;