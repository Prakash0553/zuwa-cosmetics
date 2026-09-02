import BlogCard from "./BlogCard";
import blog1 from "../assets/blog1.webp"
import { Link } from "react-router";

const blogs = [
  {
    image: blog1,
    views: 10,
    title:
      "Gluta Soap for Skin: Benefits, Uses & Best Brightening Soap in Nepal (2025 Guide)",
    text: "If your skin looks dull, uneven, or tanned from sun exposure, a gentle brightening soap can be a simple, effective first step. This guide explains how Zuwa Cosmetics Gluta Soap works, who it’s best for, how to use it safely, and how to get visible brightness without harsh treatments.",
  },
  {
    image: blog1,
    views: 10,
    title:
      "Gluta Soap for Skin: Benefits, Uses & Best Brightening Soap in Nepal (2025 Guide)",
    text: "If your skin looks dull, uneven, or tanned from sun exposure, a gentle brightening soap can be a simple, effective first step. This guide explains how Zuwa Cosmetics Gluta Soap works, who it’s best for, how to use it safely, and how to get visible brightness without harsh treatments.",
  },
  {
    image: blog1,
    views: 10,
    title:
      "Gluta Soap for Skin: Benefits, Uses & Best Brightening Soap in Nepal (2025 Guide)",
    text: "If your skin looks dull, uneven, or tanned from sun exposure, a gentle brightening soap can be a simple, effective first step. This guide explains how Zuwa Cosmetics Gluta Soap works, who it’s best for, how to use it safely, and how to get visible brightness without harsh treatments.",
  },
];

const Blogs = () => {
  return (
    <div className="w-full px-5 my-16">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-4xl font-semibold text-center">Featured Blogs</h1>

        <Link to="/blogs">
        <button
          type="submit"
          className="group relative cursor-pointer overflow-hidden rounded-2xl bg-[#e84cb0] px-3 py-3 font-semibold text-[13px] text-white"
        >
          <span className="absolute inset-x-0 bottom-0 h-0 rounded-2xl bg-[#991b60] transition-all duration-500 ease-out group-hover:h-full" />

          <span className="relative z-10 text-sm">READ ALL BLOGS</span>
        </button>
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog, index) => (
          <BlogCard
            key={index}
            image={blog.image}
            views={blog.views}
            title={blog.title}
            text={blog.text}
          />
        ))}
      </div>
    </div>
  );
};

export default Blogs;
