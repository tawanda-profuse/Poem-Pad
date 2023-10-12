import { Link } from "react-router-dom";

const PoemList = ({ poems }) => {
  return (
    <>
      {poems.map((poem) => (
        <Link className="single" key={poem._id} to={`poems/${poem._id}`}>
          <h3 className="title">
            {poem.title}
            <span> ~ {poem.username}</span>
          </h3>
          <p className="snippet">{poem.snippet}</p>
        </Link>
      ))}
    </>
  );
};

export default PoemList;
