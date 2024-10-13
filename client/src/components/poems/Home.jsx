import PoemList from "./PoemList";
import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Home = () => {
  const url = window.location.origin.includes("localhost")
    ? "http://localhost:5000/poems"
    : "https://poem-pad.vercel.app/poems";
  const [poems, setPoems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const fetchPoems = async (queryParams = "") => {
      try {
        const response = await axios.get(`${url}${queryParams}`);
        setPoems(response.data.poems);
        setTotalPages(response.data.totalPages);
      } catch (error) {
        setError(error.response.data?.message);
        console.error("Error: ", error);
      } finally {
        setIsPending(false);
      }
    };

    const searchParams = new URLSearchParams(location.search);
    searchParams.set("page", currentPage);
    fetchPoems(`?${searchParams.toString()}`);
  }, [location.search, currentPage, url]);

  // Pagination controls
  const handleNextPage = () => {
    setIsPending(true);
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePreviousPage = () => {
    setIsPending(true);
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  return (
    <div className="blogs content">
      <h1>All Poems</h1>
      {error && <div>{error}</div>}
      {isPending && <div className="loading">Loading...🔃</div>}
      {poems && !isPending && (
        <PoemList
          poems={poems}
          handleNextPage={handleNextPage}
          handlePreviousPage={handlePreviousPage}
          currentPage={currentPage}
          totalPages={totalPages}
        />
      )}
    </div>
  );
};

export default Home;
