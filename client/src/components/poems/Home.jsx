import PoemList from "./PoemList";
import useFetch from "../../useFetch";

const Home = () => {
  const url = window.location.origin.includes('localhost') ? "http://localhost:5000/poems" : "https://poem-pad.vercel.app/poems";
  const [data, isPending, error] = useFetch(url);

  return (
      <div className="blogs content">
        <h1>All Poems</h1>
        {error && <div>{error}</div>}
        {isPending && <div className="loading">Loading...🔃</div>}
        {data && <PoemList poems={data} />}
      </div>
  );
};

export default Home;
