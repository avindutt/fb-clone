import { useEffect } from "react";
import { getPosts } from "../api";

function App() {
  useEffect(() => {

    const fetchPosts = async () => {
      const response = await getPosts();
      console.log('response', response);
    };
    fetchPosts();
  }, []);

  return (
    <div className="App">
      hi
    </div>
  );
}

export default App;