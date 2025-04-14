// import { blogs } from "@/data/blogs";

// import { notFound } from "next/navigation";
// import { format } from "date-fns";
// import { BlogContentRenderer } from "@/components/BlogContentRenderer";

// export function generateStaticParams() {
//   return blogs.map((blog) => ({
//     id: blog.id,
//   }));
// }

// export default function BlogPage({ params }: { params: { id: string } }) {
//   const blog = blogs.find((blog) => blog.id === params.id);

//   if (!blog) {
//     notFound();
//   }

//   return (
//     <article className="container mx-auto w-full  px-4 py-12">
//       <div className="mb-8 border-b pb-6">
//         <h1 className="text-4xl font-extrabold">{blog.title}</h1>

//         <div className="mt-4 flex items-center gap-2 text-gray-600">
//           <span className="font-medium">{blog.author}</span>
//           <span>•</span>
//           <time dateTime={blog.date}>
//             {format(new Date(blog.date), "MMMM d, yyyy")}
//           </time>
//           <span>•</span>
//           <span className="capitalize">{blog.category}</span>
//         </div>
//       </div>

//       <BlogContentRenderer content={blog.content} />
//     </article>
//   );
// }

import { notFound } from "next/navigation";
import { format } from "date-fns";
import { BlogContentRenderer } from "@/components/BlogContentRenderer";
import { blogs } from "@/data/blogs";

export function generateStaticParams() {
  return blogs.map((blog) => ({
    id: blog.id,
  }));
}

export default  function BlogPage({ params }: { params: { id: string } }) {
  // Simulate await for future data fetching compatibility
  const blog = blogs.find((blog) => blog.id == params.id);
  
  if (!blog) {
    notFound();
  }

  return (
    <article className="container mx-auto w-full px-4 py-12">
      <div className="mb-8 border-b pb-6">
        <h1 className="text-4xl font-extrabold">{blog.title}</h1>

        <div className="mt-4 flex items-center gap-2 text-gray-600">
          <span className="font-medium">{blog.author}</span>
          <span>•</span>
          <time dateTime={blog.date}>
            {format(new Date(blog.date), "MMMM d, yyyy")}
          </time>
          <span>•</span>
          <span className="capitalize">{blog.category}</span>
        </div>
      </div>

      <BlogContentRenderer content={blog.content} />
    </article>
  );
}
