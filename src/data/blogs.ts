// export interface BlogPost {
//     id: string;
//     title: string;
//     date: string;
//     author: string;
//     category: 'developer' | 'user' | 'other';
//     content: BlogContent[];
//   }

//   export type BlogContent =
//     | { type: 'paragraph'; text: string }
//     | { type: 'heading'; level: 1 | 2 | 3; text: string }
//     | { type: 'code'; language: string; code: string }
//     | { type: 'image'; src: string; alt: string };

//   export const blogs: BlogPost[] = [
//     {
//       id: 'getting-started-nextjs',
//       title: 'Getting Started with Next.js',
//       date: '2023-10-26',
//       author: 'Jane Developer',
//       category: 'developer',
//       content: [
//         {
//           type: 'heading',
//           level: 1,
//           text: 'Getting Started with Next.js'
//         },
//         {
//           type: 'paragraph',
//           text: 'Next.js is a powerful React framework that makes building web applications simple and efficient.'
//         },
//         {
//           type: 'heading',
//           level: 2,
//           text: 'Installation'
//         },
//         {
//           type: 'paragraph',
//           text: 'To create a new Next.js app, run the following command:'
//         },
//         {
//           type: 'code',
//           language: 'bash',
//           code: 'npx create-next-app@latest my-app\ncd my-app\nnpm run dev'
//         },
//         {
//           type: 'paragraph',
//           text: 'This will create a new Next.js project and start the development server.'
//         }
//       ]
//     },
//     {
//       id: 'user-experience-tips',
//       title: 'Improving User Experience',
//       date: '2023-10-28',
//       author: 'Alex UX',
//       category: 'user',
//       content: [
//         {
//           type: 'heading',
//           level: 1,
//           text: 'Improving User Experience'
//         },
//         {
//           type: 'paragraph',
//           text: 'User experience is crucial for the success of any application.'
//         },
//         {
//           type: 'image',
//           src: '/placeholder.svg',
//           alt: 'UX Design Process'
//         }
//       ]
//     }
//   ];

export interface BlogPost {
  id: string;
  title: string;
  date: string;
  author: string;
  category: "developer" | "user" | "other";
  content: BlogContent[];
}

export type BlogContent =
  | { type: "paragraph"; text: string }
  | { type: "heading"; level: 1 | 2 | 3; text: string }
  | { type: "code"; language: string; code: string }
  | { type: "image"; src: string; alt: string };

export const blogs: BlogPost[] = [
  {
    id: "getting-started-nextjs",
    title: "Getting Started with Next.js",
    date: "2023-10-26",
    author: "Jane Developer",
    category: "developer",
    content: [
      {
        type: "heading",
        level: 1,
        text: "FormData is an essential part of modern web applications, allowing developers to handle form submissions effectively, especially when dealing with file uploads. In this guide, we’ll explore how to work with FormData in a Next.js application, both on the client side and server side, using the powerful Next.js app router",
      },
      {
        type: "paragraph",
        text: "Next.js is a powerful React framework that makes building web applications simple and efficient.",
      },
      {
        type: "heading",
        level: 2,
        text: "Introduction to FormData",
      },
      {
        type: "paragraph",
        text: "FormData is a built-in JavaScript object that can construct key/value pairs representing form fields and their values. This object is particularly useful for sending form data, including files, to a server via an HTTP request.",
      },
      {
        type: "code",
        language: "bash",
        code: "\n// components/UploadForm.js\nimport { useState } from 'react';\n\n const UploadForm = () => {\nconst [formData, setFormData] = useState({\nname: '',\nfile: null,\n});\n\nconst handleChange = (e) => {\nconst { name, value, files } = e.target;\nif (name === 'file') {\nsetFormData({ ...formData, file: files[0] });\n} else {\nsetFormData({ ...formData, [name]: value });\n}\n};\n\nconst handleSubmit = async (e) => {\ne.preventDefault();\nconst data = new FormData();\ndata.append('name', formData.name);\ndata.append('file', formData.file);\n\nconst response = await fetch('/api/upload', {\nmethod: 'POST',\nbody: data,\n});\n\nif (response.ok) {\nalert('File uploaded successfully');\n} else {\nalert('File upload failed');\n}\n};\n\nreturn (\n<form onSubmit={handleSubmit}>\n<input type=\"text\" name=\"name\" value={formData.name} onChange={handleChange} required />\n<input type=\"file\" name=\"file\" onChange={handleChange} required />\n<button type=\"submit\">Upload</button>\n</form>\n);\n};\n\nexport default UploadForm;",
      },
      {
        type: "paragraph",
        text: "2.Using the Form Component in a Page",
      },
      {
        type: "paragraph",
        text: "Create a new page, pages/index.js, and include the UploadForm component:",
      },
      {
        type: "code",
        language: "bash",
        code: "// pages/index.js\nimport UploadForm from '../components/UploadForm';\nimport UploadForm from '../components/UploadForm';\n\nconst Home = () => (\n<div>\n<h1>Upload Your File</h1>\n<UploadForm />\n</div>\n);\n\nexport default Home;",
      },
    ],
  },
  {
    id: "user-experience-tips",
    title: "Improving User Experience",
    date: "2023-10-28",
    author: "Alex UX",
    category: "user",
    content: [
      {
        type: "heading",
        level: 1,
        text: "Improving User Experience",
      },
      {
        type: "paragraph",
        text: "User experience is crucial for the success of any application.",
      },
      {
        type: "image",
        src: "/placeholder.svg",
        alt: "UX Design Process",
      },
    ],
  },
];
