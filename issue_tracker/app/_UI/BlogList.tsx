"use client"
import Image from "next/image";

const BlogCard = ({ blog }: any) => {
  return (
    <div className="border rounded-lg shadow-md overflow-hidden bg-white">
      <Image
        src={blog.image}
        alt={blog.name}
        width={400}
        height={200}
        className="w-full h-48 object-cover"
      />

      <div className="p-4">
        <h2 className="text-xl font-semibold">{blog.name}</h2>

        <p className="text-sm text-gray-500">
          {blog.date} • {blog.category}
        </p>

        <p className="mt-2 text-gray-700 line-clamp-3">
          {blog.description}
        </p>

        <button className="mt-4 text-blue-600 font-medium hover:underline">
          Read More
        </button>
      </div>
    </div>
  );
};

export default BlogCard;