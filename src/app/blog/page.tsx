import { blogs } from "@/data/blogs";
import Link from "next/link";

// Alternative to date-fns to avoid TypeScript issues
function formatDate(date: string | Date): string {
  const d = new Date(date);
  return d.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export default function BlogIndex() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-12">
      <h1 className="mb-8 text-4xl font-bold">Blog</h1>

      <div className="grid gap-8">
        {blogs.map((blog) => {
          // Find the first paragraph to use as excerpt
          const excerpt =
            blog.content?.find((item) => item.type === "paragraph")?.text || "";

          return (
            <article
              key={blog.id}
              className="rounded-lg border p-6 hover:shadow-md transition"
            >
              <Link href={`/blog/${blog.id}`}>
                <h2 className="text-2xl font-semibold mb-2 hover:text-blue-600">
                  {blog.title}
                </h2>
              </Link>

              <div className="mb-4 text-sm text-gray-600">
                <span>{blog.author} • </span>
                <time dateTime={blog.date}>{formatDate(blog.date)}</time>
                {blog.category && (
                  <>
                    <span> • </span>
                    <span className="capitalize">{blog.category}</span>
                  </>
                )}
              </div>

              <p className="text-gray-700">
                {excerpt.substring(0, 150)}
                {excerpt.length > 150 ? "..." : ""}
              </p>
            </article>
          );
        })}
      </div>
    </div>
  );
}
