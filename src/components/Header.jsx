import backgroundImage from "../images/janet_bih_fofang2.jpg";

const Header = () => {
  const handleScrollDown = () => {
    window.scrollTo({
      top: window.pageYOffset + 1400,
      behavior: "smooth",
    });
  };

  return (
    <div
      className="relative h-screen bg-cover bg-center bg-no-repeat z-10 flex flex-col justify-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "top",
      }}
    >
      <button
        className="text-4xl md:text-7xl text-white rounded-full absolute pb-10 md:pb-20"
        style={{
          top: "77%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          "@media (max-width: 600px) and (max-width: 1024px)": { top: "80%" },
        }}
      >
        Welcome To My Portfolio Website
      </button>
      <button
        className="text-1xl text-white rounded-full absolute hidden md:block"
        style={{ top: "88%", left: "50%", transform: "translate(-50%, 50%)" }}
        onClick={handleScrollDown}
      >
        SCROLL DOWN
      </button>
    </div>
  );
};

export default Header;
