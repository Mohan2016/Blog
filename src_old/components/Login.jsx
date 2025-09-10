import React from 'react';
// import Navbar from './components/Navbar'; // This line is okay too
import Navbar from './Navbar'; // Assuming this is the correct path
// import CreateBlogPost from './CreateBlogPost';
import Footer from './Footer';
import BlogForm from './BlogForm';

const Login = () => {
  return (
    <>
      <Navbar />
      {/* <CreateBlogPost /> */}
      <BlogForm />
      <Footer />
      {/* <h1>Login Page</h1> */}
    </>
  );
};

export default Login;


// git commit -m "Initial commit"
// git push -u origin main