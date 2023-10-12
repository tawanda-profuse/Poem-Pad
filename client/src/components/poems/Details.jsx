import { useParams, useHistory } from "react-router-dom";
import useFetch from "../../useFetch";

const Details = () => {
  const { id } = useParams();
  const url = window.location.origin.includes('localhost') ? "http://localhost:5000/poems" : "https://poem-pad.onrender.com/poems";
  const [data, error, isPending] = useFetch(`${url}/${id}`);
  const history = useHistory();

  const deletePoem = async (e, poemId) => {
    fetch(`${url}/${id}`, {
      method: "DELETE",
    }).then(() => {
      history.push("/poems");
    });
  };

  return (
    <>
      <div className="details blogs content">
        {isPending && <div className="loading">Loading...🔃</div>} {error && <div>{error}</div>}
        {data && (
          <>
            <h1>
              {data.title} ~ <span>{data.username}</span>
            </h1>
            <div className="content">
              <pre>{data.body}</pre>
            </div>
            <button className="delete" onClick={deletePoem}>
              <img src="/images/trashcan.svg" alt="Delete" />
            </button>
          </>
        )}
      </div>
    </>
  );
};

export default Details;
