import { useEffect, useState } from "react";
import { getPosts } from "../api";
import { Home } from "../pages";
import Navbar from "./Navbar";
import Loader from './Loader';

function App() {
  const [loading, setLoading] = useState([]);
  const [posts, setPosts] = useState(true);
  
  useEffect(() => {

    const fetchPosts = async () => {
      const response = await getPosts();
      console.log('response', response);
      if(response.success){
        setPosts(response.data.posts);
      }
      setLoading(false);
    };
    fetchPosts();
  }, []);

  if(loading){
    return <Loader/>;
  }

  return (
    <div className="App">
      <Navbar/>
      <Home posts = {posts}/>
    </div>
  );
}

export default App;