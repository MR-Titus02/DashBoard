import React, { useState } from "react";

const AdminDashboard = () => {
  const [blogs, setBlogs] = useState([]);
  const [formData, setFormData] = useState({ title: "", content: "" });
  const [editingId, setEditingId] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editingId !== null) {
      // Update existing blog
      setBlogs((prev) =>
        prev.map((blog) =>
          blog.id === editingId ? { ...blog, ...formData } : blog
        )
      );
      setEditingId(null);
    } else {
      // Create new blog
      const newBlog = {
        id: Date.now(),
        title: formData.title,
        content: formData.content,
      };
      setBlogs((prev) => [newBlog, ...prev]);
    }

    setFormData({ title: "", content: "" });
  };

  const handleEdit = (blog) => {
    setFormData({ title: blog.title, content: blog.content });
    setEditingId(blog.id);
  };

  const handleDelete = (id) => {
    setBlogs((prev) => prev.filter((blog) => blog.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">Admin Dashboard</h1>

        {/* Blog Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded-2xl shadow mb-8"
        >
          <h2 className="text-xl font-semibold mb-4">
            {editingId ? "Edit Blog" : "Create New Blog"}
          </h2>

          <div className="mb-4">
            <label className="block mb-1 text-gray-700">Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4">
            <label className="block mb-1 text-gray-700">Content</label>
            <textarea
              name="content"
              value={formData.content}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="4"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
          >
            {editingId ? "Update Blog" : "Create Blog"}
          </button>
        </form>

        {/* Blog List */}
        {blogs.length === 0 ? (
          <p className="text-center text-gray-500">No blogs created yet.</p>
        ) : (
          blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white p-6 rounded-2xl shadow mb-4"
            >
              <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
              <p className="text-gray-700 mb-4">{blog.content}</p>
              <div className="flex gap-2">
                <button
                  onClick={() => handleEdit(blog)}
                  className="bg-yellow-500 text-white px-4 py-1 rounded hover:bg-yellow-600"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(blog.id)}
                  className="bg-red-600 text-white px-4 py-1 rounded hover:bg-red-700"
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
