import React from "react";
import { FcLike } from "react-icons/fc";
const Card = ({ course }) => {
  return (
    <div>
      <div>
        <img src={course.image.url} />
        <div>
          <button>
            <FcLike fontSize="1.75rem" />
          </button>
        </div>
        <div className="title">
          <p>{course.title}</p>
          <p>{course.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
