import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const Users = () => {
  const queryClient = useQueryClient();

  const {
    isPending,
    data: users,
    isError,
    error,
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch(
        "https://coffee-shop-backend-taupe.vercel.app/user"
      );
      if (!res.ok) {
        throw new Error("Failed to fetch users data.");
      }
      return res.json();
    },
  });

  const deleteUserMutation = useMutation({
    mutationFn: async (id) => {
      const res = await fetch(
        `https://coffee-shop-backend-taupe.vercel.app/user/${id}`,
        {
          method: "DELETE",
        }
      );
      if (!res.ok) {
        throw new Error("Failed to delete user.");
      }
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["users"]);
    },
  });

  const handleDelete = (id) => {
    deleteUserMutation.mutate(id);
  };

  if (isPending) {
    return (
      <p className="text-xl font-semibold text-center flex items-center gap-2 justify-center">
        Loading...<span className="loading loading-spinner loading-xs"></span>
      </p>
    );
  }

  if (isError) {
    return (
      <p className="text-base font-semibold text-center flex items-center gap-2 justify-center text-red-600">
        {error.message}
      </p>
    );
  }

  // const handleDelete = (id) => {
  //   fetch(`https://coffee-shop-backend-taupe.vercel.app/user/${id}`, {
  //     method: "DELETE",
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       if (data.deletedCount > 0) {
  //         const remainingUsers = users.filter((user) => user._id !== id);
  //         setUsers(remainingUsers);
  //       }
  //     });
  // };

  return (
    <div>
      <h2 className="text-xl font-bold text-center mb-10">
        Users: {users.length}
      </h2>
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
            {users?.map((user, idx) => (
              <tr key={user._id}>
                <th>{idx + 1}</th>
                <td>{user.email}</td>
                <td>{user.createdAt || "N/A"}</td>
                <td>{user.lastLoginAt || "N/A"}</td>
                <td>
                  <button
                    className={`btn btn-circle btn-error tooltip flex items-center justify-center ${
                      deleteUserMutation.isLoading
                        ? "opacity-50 cursor-not-allowed"
                        : ""
                    }`}
                    data-tip="Remove User"
                    onClick={() => handleDelete(user._id)}
                    disabled={deleteUserMutation.isLoading}
                  >
                    {deleteUserMutation.isLoading ? "Deleting..." : "X"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
