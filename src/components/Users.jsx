import { useEffect } from "react";
import { useState } from "react";
import User from "./User";

export default function Users() {
  const [users, setUsers] = useState([]);
  console.log(users);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div className="max-w-7xl mx-auto p-12">
      <h1 className="text-2xl font-semibold mb-6">Our Users</h1>
      <div className="grid col-span-2 gap-6 flex-wrap">
        {users.map((user) => (
          <User user={user} />
        ))}
      </div>
    </div>
  );
}
