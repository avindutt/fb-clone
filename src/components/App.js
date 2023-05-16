import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { Home, Login } from "../pages";
import Navbar from "./Navbar";
import Loader from './Loader';
import UserProfile from "../pages/UserProfile";
import Settings from "../pages/Settings";
import Signup from '../pages/Signup'
import { useAuth } from "../hooks";
import { element } from "prop-types";
import React, { useEffect } from "react";

const PrivateRoute = (props) => { // children are the components inside the private route and rest is the any other props coming from react router dom
  const {Component} = props;
  const auth = useAuth();
  const navigate = useNavigate();
  
  useEffect(() => {
    if (!auth.user) {
      navigate('/login');
    };
  })

    return (
      <>
      <Component/>
      </>
    )
  
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
    <>
      <Router>
      <Navbar/>

          <Routes>
          <Route path="/" element = {<PrivateRoute Component={Home}/>} />

          <Route path="/login" element = {<Login/>} />

          <Route path="/register" element={<Signup/>} />

          <Route path="/settings" element={<PrivateRoute Component={Settings}/>}/>

          <Route path="/user/:userId" element={<PrivateRoute Component={UserProfile}/>}/>

          <Route path="*" element = { <Page404/> } />
          </Routes>

      </Router>
    </>
  );
}

export default App;