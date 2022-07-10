import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/users/allUser")
      .then((res) => res.json())
      .then((data) => setUsers(data.data));
  }, []);

  return (
    <div>
      {users.map((user) => {
        return (
          <li key={user.id_User}>
            <p>{user.email}</p>
            <p>
              {user.name} {user.last_name}
            </p>
            <Link to={`/users/${user.id_User}`}>Ver detalle</Link>
          </li>
        );
      })}
    </div>
  );
}
