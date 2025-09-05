import React, { useState } from 'react';
// import './YourStyles.css'; // Import your CSS if needed

const CreateBlogPost = () => {
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    category: '',
    image: null,
    content: '',
    tags: '',
  });

  const handleChange = (e) => {
    const { id, value, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    // You can now send this data to an API or handle it accordingly
  };

  return (
    <section className="sect_blogpage">
      <div className="container my-5">
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-8">
            <div className="blog_form wow animate__animated animate__zoomIn">
              <h2 className="mb-4">Create a Blog Post</h2>

              <form onSubmit={handleSubmit}>
                {/* Blog Title */}
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">Blog Title</label>
                  <input
                    type="text"
                    className="form-control"
                    id="title"
                    placeholder="Enter blog title"
                    value={formData.title}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Author Name */}
                <div className="mb-3">
                  <label htmlFor="author" className="form-label">Author Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="author"
                    placeholder="Your name"
                    value={formData.author}
                    onChange={handleChange}
                  />
                </div>

                {/* Category Dropdown */}
                <div className="mb-3">
                  <label htmlFor="category" className="form-label">Category</label>
                  <select
                    className="form-select"
                    id="category"
                    value={formData.category}
                    onChange={handleChange}
                    required
                  >
                    <option value="" disabled>Select category</option>
                    <option value="tech">Technology</option>
                    <option value="life">Lifestyle</option>
                    <option value="travel">Travel</option>
                    <option value="food">Food</option>
                  </select>
                </div>

                {/* Featured Image Upload */}
                <div className="mb-3">
                  <label htmlFor="image" className="form-label">Featured Image</label>
                  <input
                    className="form-control"
                    type="file"
                    id="image"
                    onChange={handleChange}
                  />
                </div>

                {/* Blog Content */}
                <div className="mb-3">
                  <label htmlFor="content" className="form-label">Content</label>
                  <textarea
                    className="form-control"
                    id="content"
                    rows="6"
                    placeholder="Write your blog post..."
                    value={formData.content}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                {/* Tags */}
                <div className="mb-3">
                  <label htmlFor="tags" className="form-label">Tags</label>
                  <input
                    type="text"
                    className="form-control"
                    id="tags"
                    placeholder="e.g. tech, coding, ai"
                    value={formData.tags}
                    onChange={handleChange}
                  />
                </div>

                {/* Submit Button */}
                <button type="submit" className="btn btn-primary">Publish Post</button>
              </form>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreateBlogPost;
