import { useState } from "react";
import "../App.css";

const LikeButtonInsta = ({ title }) => {
  const [liked, setLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(0);
  const [animate, setAnimate] = useState(false);

  const handleLike = () => {
    // Update count
    if (liked) {
      setLikesCount(likesCount - 1);
    } else {
      setLikesCount(likesCount + 1);
    }

    setLiked(!liked);

    // Trigger animation
    setAnimate(true);

    // Remove animation class after animation completes
    setTimeout(() => setAnimate(false), 300);
  };

  return (
    <div
      className="card p-4 shadow-sm my-3 text-center"
      style={{ maxWidth: "350px" }}
    >
      <h4 className="mb-3">{title}</h4>

      {/* LIKE BUTTON */}
      <button
        className="btn btn-light border mx-auto"
        style={{ fontSize: "1.2rem" }}
        onClick={handleLike}
      >
        <i
          className={`bi ${
            liked ? "bi-heart-fill text-danger" : "bi-heart"
          } ${animate ? "heart-pop" : ""}`}
          style={{ fontSize: "2.3rem" }}
        ></i>
      </button>

      {/* Likes Count */}
      <p className="mt-3 fw-semibold">
        Likes: <span className="text-primary">{likesCount}</span>
      </p>
    </div>
  );
};

export default LikeButtonInsta;
