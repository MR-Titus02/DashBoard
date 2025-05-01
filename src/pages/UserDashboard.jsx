import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const UserDashboard = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await res.json();
      // Pick 5 random blogs
      const shuffled = data.sort(() => 0.5 - Math.random());
      setBlogs(shuffled.slice(0, 6));
    };

    fetchBlogs();
  }, []);

  return (
    <>
    <Header/>
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">User Dashboard</h1>
        <div className="grid md:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition"
            >
              <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
              <p className="text-gray-700 mb-4">
                {blog.body.length > 100
                  ? blog.body.slice(0, 100) + "..."
                  : blog.body}
              </p>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                Read More
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default UserDashboard;
