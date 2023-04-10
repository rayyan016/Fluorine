import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SanityClient from "../client.js";

export default function Post() {
  const [postData, setPost] = useState(null);

  useEffect(() => {
    SanityClient.fetch(
      `*[_type == "post"]{
            title,
            slug,
            mainImage{
                asset->{
                    _id,
                    url
                },
                alt
            }
        }`
    )
      .then((data) => setPost(data))
      .catch(console.error);
  }, []);

  return (
    <>
      <main className="bg-green-100 min-h-screen p-12">
        <section className="container mx-auto">
          <h1 className="text-5xl flex justify-center cursive">
            Blog Posts Page
          </h1>
          <h2 className="text-lg text-gray-600 flex justify-center mb-12">
            Welcome to my page of blog posts
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <article>
              <Link to={"/post/" + post.slug.current} key={post.slug.current}>
                <span
                  className="block h-64 relative shadow leading-snug bg-white border-l-8 border-green-800"
                  key={index}
                >
                  <img src="" alt="" />
                  <span>
                    <h3></h3>
                  </span>
                </span>
              </Link>
            </article>
          </div>
        </section>
      </main>
    </>
  );
}
