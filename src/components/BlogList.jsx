import React, { useState } from 'react';
import blogPosts from '../data/blogPosts.json'; // Adjust path as needed

const BlogList = () => {
  const [posts, setPosts] = useState(blogPosts);

  return (
    <div>
      <h2>Blog Posts</h2>
      {posts.map((post, index) => (
        <div key={index}>
          <h3>{post.title}</h3>
          <p><strong>{post.author}</strong></p>
          <p>{post.content}</p>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default BlogList;
