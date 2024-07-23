import React from "react";
interface User {
  id: number;
  name: string;
}

const newUsersPage = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    cache: "no-cache",
    next: { revalidate: 10 },
  });
  const users: User[] = await res.json();
  return (
    <>
      <h1>newUsers</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  );
};

export default newUsersPage;
