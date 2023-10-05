const Sponsor = () => {
  const style = {
    backgroundImage: 'url("https://i.ibb.co/Sxy8650/bg.png")',
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat", // You can adjust this value as needed
  };

  return (
    <div
      style={style}
      className="text-center px-4   text-white py-16 bg-{backgroundImage} mt-10"
    >
      <div>
        {" "}
        <h2 className="text-4xl mb-5 font-extrabold">
          Create an Amazing Newspaper
        </h2>
        <p className="font-normal mb-6">
          Discover thousands of options, easy to customize layouts, one-click to
          import demo and much more.
        </p>
        <button className="px-4 py-2 bg-[#D72050] text-white font-medium">
          Learn more
        </button>
      </div>
    </div>
  );
};

export default Sponsor;
