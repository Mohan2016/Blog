import React, { useState } from 'react';




const BlogManager = () => {
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    content: '',
  });

  const [posts, setPosts] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isEditing) {
      const updatedPosts = [...posts];
      updatedPosts[editIndex] = formData;
      setPosts(updatedPosts);
      setIsEditing(false);
      setEditIndex(null);
    } else {
      setPosts([...posts, formData]);
    }

    // Reset form
    setFormData({
      title: '',
      author: '',
      content: '',
    });
  };

  const handleEdit = (index) => {
    setFormData(posts[index]);
    setIsEditing(true);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const updatedPosts = posts.filter((_, i) => i !== index);
    setPosts(updatedPosts);
    if (isEditing && editIndex === index) {
      setFormData({ title: '', author: '', content: '' });
      setIsEditing(false);
      setEditIndex(null);
    }
  };

  return (
    <section className="sect_blogpage">
    <div className="container my-5">

    <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-8">
            <div className="blog_form">

            <h2>{isEditing ? 'Edit Blog Post' : 'Create Blog Post'}</h2>

      <form onSubmit={handleSubmit} className="mb-4">
        {/* Title */}
        <div className="mb-3">
          <label className="form-label">Blog Title</label>
          <input
            type="text"
            className="form-control"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            placeholder="Enter blog title"
          />
        </div>

        {/* Author */}
        <div className="mb-3">
          <label className="form-label">Author</label>
          <input
            type="text"
            className="form-control"
            name="author"
            value={formData.author}
            onChange={handleChange}
            required
            placeholder="Enter author name"
          />
        </div>

        {/* Content (Textarea) */}
        <div className="mb-3">
          <label className="form-label">Content</label>
          <textarea
            className="form-control"
            name="content"
            rows="5"
            value={formData.content}
            onChange={handleChange}
            required
            placeholder="Write your blog content here..."
          ></textarea>
        </div>

        {/* Submit Button */}
        <button type="submit" className="btn btn-primary">
          {isEditing ? 'Update Post' : 'Add Post'}
        </button>
      </form>

      {/* List of Posts */}
      <h3>All Blog Posts</h3>
      {posts.length === 0 ? (
        <p>No blog posts yet.</p>
      ) : (
        <ul className="list-group">
          {posts.map((post, index) => (
            <li
              key={index}
              className="list-group-item mb-2"
            >
              <h5>{post.title}</h5>
              <p>
                <strong>Author:</strong> {post.author}
              </p>
              <p>{post.content}</p>
              <button
                className="btn btn-warning btn-sm me-2"
                onClick={() => handleEdit(index)}
              >
                Edit
              </button>
              <button
                className="btn btn-danger btn-sm"
                onClick={() => handleDelete(index)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
      </div>
    </div>
    </div>
    </section>
  );
};

export default BlogManager;
