import Image from "next/image";
import { Blogs } from "@/blogs/blogs";
import BlogCard from "./_UI/BlogList";

export default function Home() {
  return (
    <div className="">
      <main>
        {Blogs.blogs.length > 0 && Blogs.blogs.map((blog) => <BlogCard key={blog.id} blog={blog} />)}
      </main>
    </div>
  );
}
