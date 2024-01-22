import { useLoaderData } from "react-router-dom";

const Users = () => {

    const users = useLoaderData();

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
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, idx) => <tr key={user._id}>
                                <th>{idx+1}</th>
                                <td>{user.email}</td>
                                <td>{user.createdAt || "N/A"}</td>
                                <td>CRUD</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;