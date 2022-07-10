// componente que muestra los detalles de los usuarios
// component that shows the details of the users

import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

// DETALLES DEL USUARIO

export function UserDetails() {
  const { id } = useParams();
  const [user, setUser] = useState();

  useEffect(() => {
    fetch(`http://localhost:8000/users//userProfile/:id_User`)
      .then((res) => res.json())
      .then((data) => setUser(data.data));
  }, [id]);

  return (
    <div>
      {user ? (
        <div key={user.id_User}>
          <p>{user.email}</p>
          <p>
            {user.name} {user.last_name}
          </p>
          {/* <img width={64} height={64} src={user.avatar} /> */}
          <Link to={`/users/${user.id_User}`}>Ver detalle</Link>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}
