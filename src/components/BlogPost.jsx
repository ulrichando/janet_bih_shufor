// BlogPost.js
import React from 'react';



function BlogPost() {
  return (
    <div className="container mx-auto mt-10">
      <h2 className="text-5xl font-bold mb-6 text-center py-5">Blog Post</h2>

      {/* Blog post content with image and text in rectangles */}
      <div className="blog-post flex flex-wrap">
        <div className="blog-post-item w-full mb-6 p-4">
          <div className="flex">
            <div className="w-1/2 p-4">
              <img
                src="/src/images/janet_bih_fofang.jpg"
                alt="Blog Post Image"
                className="w-full h-0 pb-full object-cover rounded-lg"
              />
            </div>
            <div className="w-1/2 p-4">
              <p className="text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus et
                sagittis quam. In vestibulum rutrum ex, sit amet vulputate odio
                malesuada non. Sed venenatis vehicula justo, non lacinia massa
                vulputate ac. Donec vitae justo a ligula bibendum cursus.
              </p>
            </div>
          </div>
        </div>
         <div className="blog-post-item w-full mb-6 p-4">
          <div className="flex">
            <div className="w-1/2 p-4">
              <img
                src="/src/images/1.jpg"
                alt="Blog Post Image"
                className="w-full h-0 pb-full object-cover rounded-lg"
              />
            </div>
            <div className="w-1/2 p-4">
              <p className="text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus et
                sagittis quam. In vestibulum rutrum ex, sit amet vulputate odio
                malesuada non. Sed venenatis vehicula justo, non lacinia massa
                vulputate ac. Donec vitae justo a ligula bibendum cursus.
              </p>
            </div>
          </div>
        </div>
         <div className="blog-post-item w-full mb-6 p-4">
          <div className="flex">
            <div className="w-1/2 p-4">
              <img
                src="/src/images/janet_bih_fofang.jpg"
                alt="Blog Post Image"
                className="w-full h-0 pb-full object-cover rounded-lg"
              />
            </div>
            <div className="w-1/2 p-4">
              <p className="text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus et
                sagittis quam. In vestibulum rutrum ex, sit amet vulputate odio
                malesuada non. Sed venenatis vehicula justo, non lacinia massa
                vulputate ac. Donec vitae justo a ligula bibendum cursus.
              </p>
            </div>
          </div>
        </div>
         <div className="blog-post-item w-full mb-6 p-4">
          <div className="flex">
            <div className="w-1/2 p-4">
              <img
                src="/src/images/janet_bih_fofang.jpg"
                alt="Blog Post Image"
                className="w-full h-0 pb-full object-cover rounded-lg"
              />
            </div>
            <div className="w-1/2 p-4">
              <p className="text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus et
                sagittis quam. In vestibulum rutrum ex, sit amet vulputate odio
                malesuada non. Sed venenatis vehicula justo, non lacinia massa
                vulputate ac. Donec vitae justo a ligula bibendum cursus.
              </p>
            </div>
          </div>
        </div>
         <div className="blog-post-item w-full mb-6 p-4">
          <div className="flex">
            <div className="w-1/2 p-4">
              <img
                src="/src/images/janet_bih_fofang.jpg"
                alt="Blog Post Image"
                className="w-full h-0 pb-full object-cover rounded-lg"
              />
            </div>
            <div className="w-1/2 p-4">
              <p className="text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus et
                sagittis quam. In vestibulum rutrum ex, sit amet vulputate odio
                malesuada non. Sed venenatis vehicula justo, non lacinia massa
                vulputate ac. Donec vitae justo a ligula bibendum cursus.
              </p>
            </div>
          </div>
        </div>
         <div className="blog-post-item w-full mb-6 p-4">
          <div className="flex">
            <div className="w-1/2 p-4">
              <img
                src="./src/images/janet_bih_fofang.jpg"
                alt="Blog Post Image"
                className="w-full h-0 pb-full object-cover rounded-lg"
              />
            </div>
            <div className="w-1/2 p-4">
              <p className="text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus et
                sagittis quam. In vestibulum rutrum ex, sit amet vulputate odio
                malesuada non. Sed venenatis vehicula justo, non lacinia massa
                vulputate ac. Donec vitae justo a ligula bibendum cursus.
              </p>
            </div>
          </div>
        </div>

        {/* Add more blog post items as needed */}
      </div>
    </div>
  )
}

export default BlogPost;
