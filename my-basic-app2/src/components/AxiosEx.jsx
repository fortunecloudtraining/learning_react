// import { useEffect, useState } from "react";
// import axios from "axios";

// function AxiosEx() {
//   const [users, setUsers] = useState([]);
//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     // Fetch Users
//     axios
//       .get("https://jsonplaceholder.typicode.com/users")
//       .then((response) => {
//         setUsers(response.data);
//       })
//       .catch((error) => {
//         console.log("User API Error:", error);
//       });

//     // Fetch Posts
//     axios
//       .get("https://jsonplaceholder.typicode.com/posts")
//       .then((response) => {
//         setPosts(response.data);
//       })
//       .catch((error) => {
//         console.log("Posts API Error:", error);
//       });
//   }, []);

//   return (
//     <div>
//       <h2>User List</h2>
//       <ol>
//         {users.map((u) => (
//           <li key={u.id}>{u.name}</li>
//         ))}
//       </ol>

//       <h2>Post List</h2>
//       <ol>
//         {posts.slice(0, 100).map((p) => (
//           <li key={p.id}>
//             <strong>{p.title}</strong>
//             <p>{p.body}</p>
//           </li>
//         ))}
//       </ol>
//     </div>
//   );
// }

// export default AxiosEx;
import { useEffect, useState } from "react";
import axios from "axios";

function AxiosEx() {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Create async function inside useEffect
    const fetchData = async () => {
      try {
        // Fetch users
        const userRes = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        setUsers(userRes.data);

        // Fetch posts
        const postRes = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        setPosts(postRes.data);
      } catch (error) {
        console.log("API Error:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>User List</h2>
      <ol>
        {users.map((u) => (
          <li key={u.id}>{u.name}</li>
        ))}
      </ol>

      <h2>Post List</h2>
      <ol>
        {posts.slice(0, 100).map((p) => (
          <li key={p.id}>
            <strong>{p.title}</strong>
            <p>{p.body}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default AxiosEx;

