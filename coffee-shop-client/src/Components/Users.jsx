import { useState } from "react";
import { useLoaderData } from "react-router-dom";

const Users = () => {

    const loadedUsers = useLoaderData();
    const [users, setUsers] = useState(loadedUsers);

    const handleDelete = (id) => {
        // console.log("hello", id);
        fetch(`https://coffee-shop-server-1ffisa7uf-askats-projects.vercel.app/user/${id}`, {
            method: "DELETE"
        }).then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    console.log("deleted succesfully");
                    // delete data from UI
                    const remainingUsers = users.filter(user => user._id !== id);
                    setUsers(remainingUsers);
                }
            })

    }


    return (
        <div>
            <h2 className="text-xl font-bold text-center mb-10">Users: {users.length}</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Email</th>
                            <th>Created At</th>
                            <th>Last Logged At</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, idx) => <tr key={user._id}>
                                <th>{idx + 1}</th>
                                <td>{user.email}</td>
                                <td>{user.createdAt || "N/A"}</td>
                                <td>{user.lastLoginAt || "N/A"}</td>
                                <td>
                                    <span className="btn btn-circle btn-error m-1"
                                        onClick={() => handleDelete(user._id)}>X</span>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;