import { Eye } from "lucide-react";

const BlogCard = ({image, title, views, text}) => {
  return (
    <div>
      {/* Blog Card */}
      <div className=" max-w-[480px]">

        {/* Image */}
        <div className="w-full h-[260px] overflow-hidden">
          <img
            src={image}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        {/* Date & Views */}
        <div className="flex items-center justify-between text-base font-semibold text-[#4b4a4a] my-2">
          <span>2026-02-06</span>

          <div className="flex items-center gap-2 text-[#4b4a4a]">
            <Eye size={22} strokeWidth={2} />
            <span>{views}</span>
          </div>
        </div>

        {/* Line */}
        <hr className="border-[#d9d9d9] my-2" />

        {/* Title */}
        <h3 className=" text-xl leading-relaxed  font-semibold text-[#111] mb-2">
          {title}
        </h3>

        {/* Description */}
        <p className=" text-sm line-clamp-3 leading-normal text-[#555]">
          {text}
        </p>

      </div>
    </div>
  );
};

export default BlogCard;