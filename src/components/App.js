import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { getPosts } from "../api";
import { Home, Login } from "../pages";
import Navbar from "./Navbar";
import Loader from './Loader';
import Signup from '../pages/Signup'
import { useAuth } from "../hooks";

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
  
  const auth = useAuth();
  
  // useEffect(() => {

  //   const fetchPosts = async () => {
  //     const response = await getPosts();
  //     console.log('response', response);
  //     if(response.success){
  //       setPosts(response.data.posts);
  //     }
  //     setLoading(false);
  //   };
  //   fetchPosts();
  // }, []);

  if(auth.loading){
    return <Loader/>;
  }

  return (
    <div className="App">
      
      <Router>
      <Navbar/>

          <Routes>
          <Route exact path="/" element = {<Home/>} />

          {/* <Route exact path="/about" element = {<About/>} /> */}

          <Route exact path="/login" element = {<Login/>} />

          {/* <Route exact path="/user/asdasd" element = {<UserInfo/>} /> */}

          <Route exact path="/register" element={<Signup/>}></Route>

          <Route path="*" element = { <Page404/> } />
          </Routes>

      </Router>
    </div>
  );
}

export default App;