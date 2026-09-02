import { Link } from "react-router"
import Blogs from "../components/Blogs"

const Blog = () => {
  return (
    <div className="w-full">
      <div className="bg-[#fbe8f6] flex flex-col items-center py-10">
        <h1 className="text-4xl font-semibold mb-2">Blogs & Articles</h1>
        <div className="flex gap-2">
          <Link to="/" className="text-[#404040] hover:text-[#e846ad]">
            Home
          </Link>
          <span className="text-[#404040]">&lt;</span>
          <span className="text-[#404040] cursor-pointer hover:text-[#e846ad]">
            Blogs & Articles
          </span>
        </div>
      </div>

      <Blogs/>
    </div>
  )
}

export default Blog
