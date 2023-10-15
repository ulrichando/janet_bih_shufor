import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import janetImage from "../images/2.jpg";
import Subscribe from "../components/Subscribe";

const BlogPostTwo = () => {
  return (
    <div>
      <Navbar />
      <section className="max-w-4xl mx-auto px-4 py-8">
        <img
          src={janetImage}
          alt="Tesla Model S"
          className="w-full max-h-40 mb-4"
        />
        <h1 className="text-2xl font-bold mb-2">
          Tesla&rsquo;s Latest Model S: A Game Changer for Electric Cars
        </h1>
        <p className="text-gray-500 mb-2">By John Doe</p>
        <p className="text-gray-500 mb-2">Published on August 1, 2021</p>
        <p className="mb-4">
          Tesla has done it again. The latest Model S is a game changer for
          electric cars, with a range of over 400 miles and a top speed of 200
          mph. But that&rsquo;s not all. The new Model S also features a sleek
          new design, with a panoramic glass roof and a minimalist interior
          that&rsquo;s sure to impress.
        </p>
        <p className="mb-4">
          But what really sets the new Model S apart is its advanced technology.
          The car is equipped with Tesla&rsquo;s latest Autopilot system, which
          uses cameras and sensors to navigate the road and avoid obstacles. And
          with over-the-air updates, the car&rsquo;s software can be updated
          remotely, so you always have the latest features and improvements.
        </p>
        <p className="mb-4">
          Overall, the new Model S is a game changer for electric cars, and a
          clear sign that Tesla is leading the way in the industry. If
          you&rsquo;re in the market for a new car, the Model S is definitely
          worth considering.
        </p>
      </section>
      <Subscribe />
      <Footer />
    </div>
  );
};

export default BlogPostTwo;
