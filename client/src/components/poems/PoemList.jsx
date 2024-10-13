import { Link } from "react-router-dom";

const PoemList = ({
  poems,
  handleNextPage,
  handlePreviousPage,
  currentPage,
  totalPages,
}) => {
  return (
    <>
      {poems.map((poem) => (
        <Link className="single" key={poem._id} to={`poems/${poem._id}`}>
          <h3 className="title">
            {poem.title}
            <span> ~ {poem.username}</span>
          </h3>
          <p className="snippet">{poem.snippet}</p>
          <span>
            {poem.likes} <i className="fas fa-heart"></i>
          </span>
        </Link>
      ))}
      {poems.length > 0 && (
        <div className="pagination">
          <button
            disabled={currentPage === 1}
            onClick={handlePreviousPage}
            style={{
              backgroundColor: currentPage === 1 ? "#aaa" : "",
            }}
          >
            Previous
          </button>
          <span>
            Page {currentPage} of {totalPages}
          </span>
          <button
            disabled={currentPage === totalPages}
            onClick={handleNextPage}
            style={{
              backgroundColor: currentPage === totalPages ? "#aaa" : "",
            }}
          >
            Next
          </button>
        </div>
      )}
    </>
  );
};

export default PoemList;
