// import { useState } from "react";


// const LikeButton = ({ title }) => {
//   const [liked, setLiked] = useState(false);

//   return (
//     <div className="card p-4 shadow-sm my-3" style={{ maxWidth: "350px" }}>

//       <h4 className="mb-3 text-center">{title}</h4>

//       <button
//         className="btn btn-light border d-flex align-items-center mx-auto"
//         onClick={() => setLiked(!liked)}
//         style={{ fontSize: "1.2rem", gap: "10px" }}
//       >
//         <i
//           className={`bi ${liked ? "bi-heart-fill text-danger" : "bi-heart"}`}
//           style={{ fontSize: "1.6rem" }}
//         ></i>

//         {liked ? "Liked" : "Like"}
//       </button>

//       {liked && (
//         <p className="text-success text-center mt-3 fw-semibold">
//           You liked this post ❤️
//         </p>
//       )}

//     </div>
//   );
// };

// export default LikeButton;

import { useState } from "react";


const LikeButton = ({ title }) => {
  const [liked, setLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(0);

  const handleLike = () => {
    if (liked) {
      // If already liked → unlike it
      setLikesCount(likesCount - 1);
    } else {
      // If not liked → like it
      setLikesCount(likesCount + 1);
    }
    setLiked(!liked);
  };

  return (
    <div className="card p-4 shadow-sm my-3" style={{ maxWidth: "350px" }}>

      <h4 className="mb-3 text-center">{title}</h4>

      <button
        className="btn btn-light border d-flex align-items-center mx-auto"
        onClick={handleLike}
        style={{ fontSize: "1.2rem", gap: "10px" }}
      >
        <i
          className={`bi ${liked ? "bi-heart-fill text-danger" : "bi-heart"}`}
          style={{ fontSize: "1.6rem" }}
        ></i>

        {liked ? "Liked" : "Like"}
      </button>

      {/* Likes Count */}
      <p className="text-center mt-3 fw-semibold">
        Likes: <span className="text-primary">{likesCount}</span>
      </p>

    </div>
  );
};

export default LikeButton;

