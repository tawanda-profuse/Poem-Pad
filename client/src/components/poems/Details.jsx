import { useParams, useNavigate } from "react-router-dom";
import useFetch from "../../useFetch";
import { useState } from "react";

const Details = () => {
  const { id } = useParams();
  const url = window.location.origin.includes("localhost")
    ? "http://localhost:5000/poems"
    : "https://poem-pad.vercel.app/poems";
  const [data, error, isPending] = useFetch(`${url}/${id}`);
  const navigate = useNavigate();
  const [clicked, setClicked] = useState(localStorage.getItem(`liked-${id}`));
  let counter = data.likes;
  const [likes, setLikes] = useState(counter);

  const deletePoem = async () => {
    fetch(`${url}/${id}`, {
      method: "DELETE",
    }).then(() => {
      setTimeout(() => {
        navigate("/poems");
      }, 1000);
    });
  };

  const updateLikes = () => {
    // If the user has not already liked the item
    if (!clicked) {
      // Increment the likes state by 1
      setLikes((prevLikes) => prevLikes + 1);
      // Set the clicked state to true
      setClicked(true);
      // Save the liked status to localStorage
      localStorage.setItem(`liked-${id}`, "true");
      // Send a PUT request to the database to update the likes field
      fetch(`${url}/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ likes: counter + 1 }),
      }).then((res) => {
        if (res.ok) {
          console.log("Likes updated successfully", likes);
        } else {
          console.error("Something went wrong");
        }
      });
    }
  };

  return (
    <>
      <div className="details blogs content">
        {isPending && <div className="loading">Loading...🔃</div>}{" "}
        {error && <div>{error}</div>}
        {data && (
          <>
            <h1>
              {data.title} ~ <span>{data.username}</span>
            </h1>
            <div className="">
              <pre>{data.body}</pre>
            </div>
            <div className="interactions">
              <button
                className="like"
                style={{
                  backgroundColor: clicked ? "tomato" : "yellow",
                }}
                onClick={(e) => {
                  updateLikes();
                  e.target.style.animation = clicked
                    ? ""
                    : "hooray 0.5s ease-in-out 0s 1";
                }}
              >
                <span className="tooltiptext">
                  {clicked
                    ? "You've already liked this poem"
                    : "Click to like this poem"}
                </span>
                <i className="fas fa-heart"></i>
              </button>
              <button
                className="delete"
                onClick={(e) => {
                  e.target.parentElement.style.animation = "destroy 0.3s ease 0s 1";
                  deletePoem();
                }}
              >
                <span className="tooltiptext">Click to delete this poem</span>
                <i className="fas fa-trash"></i>
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Details;
