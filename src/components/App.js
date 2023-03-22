import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { getPosts } from "../api";
import { Home, Login } from "../pages";
import Navbar from "./Navbar";
import Loader from './Loader';

const About = () => {
  return <h1>About</h1>
}

const UserInfo = () => {
  return <h1>UserInfo</h1>
}

const Page404 = () => {
  return (<h1>Oops! Page 404 </h1>)
}

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
      
      <Router>
      <Navbar/>

          <Routes>
          <Route exact path="/" element = {<Home posts={posts}/>} />

          <Route exact path="/about" element = {<About/>} />

          <Route exact path="/login" element = {<Login/>} />

          <Route exact path="/user/asdasd" element = {<UserInfo/>} />

          <Route path="*" element = { <Page404/> } />
          </Routes>

      </Router>
    </div>
  );
}

export default App;