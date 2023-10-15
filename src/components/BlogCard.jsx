// src/components/BlogCard.js

const BlogCard = ({ image, title, excerpt, readMoreLink }) => {
  return (
    <div className=" rounded-lg shadow-lg p-5 mb-8 mx-4">
      <img
        src={image}
        alt={title}
        className="w-full h-40 object-cover mb-4 rounded-xl"
      />
      <h3 className="text-xl font-bold mb-2 text-[#E4CB86]">{title}</h3>
      <p className="text-white mb-4">{excerpt}</p>
      <a
        href={readMoreLink}
        className="btn border-none outline-none bg-yellow-300 text-black rounded-2xl max-w-120 w-full h-40 flex justify-center items-center mt-20 cursor-pointer transition duration-300 border border-yellow-300"
      >
        Read More
      </a>
    </div>
  );
};

export default BlogCard;
