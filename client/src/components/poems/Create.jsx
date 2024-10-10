import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
  const [poems, setPoems] = useState([]);
  const history = useHistory();

  const [username, setUsername] = useState("");
  const [title, setTitle] = useState("");
  const [snippet, setSnippet] = useState("");
  const [body, setBody] = useState("");
  const url = window.location.origin.includes('localhost') ? "http://localhost:5000/poems" : "https://poem-pad.vercel.app/poems";

  const handleAddPoem = async (event) => {
    event.preventDefault();
    const response = await fetch(url,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        title, 
        username,
        snippet,
        body
      })
    });

    const newPoem = await response.json();

    try {
      setPoems([newPoem, ...poems])
      setTitle("");
      setUsername("");
      setSnippet("");
      setBody("");
      history.push("/poems");
    } catch (error) {
      console.log(error);
    }

  };

  return (
    <div className="create-blog content">
      <form onSubmit={(e) => handleAddPoem(e)}>
        <label htmlFor="username">Author:</label>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="Enter the writer of the poem"
          required
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        ></input>
        <label htmlFor="title">Poem title:</label>
        <input
          type="text"
          id="title"
          name="title"
          required
          placeholder="Enter the title of the poem"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        ></input>
        <label htmlFor="snippet">Poem snippet:</label>
        <input
          type="text"
          id="snippet"
          name="snippet"
          placeholder="Enter a display snippet of the poem"
          value={snippet}
          onChange={(e) => {
            setSnippet(e.target.value);
          }}
        ></input>
        <label htmlFor="body">Poem body:</label>
        <textarea
          id="body"
          name="body"
          required
          placeholder="Enter and format your poem here"
          value={body}
          onChange={(e) => {
            setBody(e.target.value);
          }}
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Create;
