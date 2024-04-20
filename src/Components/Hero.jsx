import v1 from "../assets/video1.mp4";
import v2 from "../assets/video2.mp4";
const Hero = () => {
  return (
    <div className="hero min-h-screen bg-[#181818]  text-white tracking-wide">
      <div className="hero-content text-center">
        <div className="w-full">
          <h1 className="text-6xl font-bold">
            Empower Your Work with{" "}
            <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
              Virtual Tools :
            </span>{" "}
            Enhance Efficiency, Collaboration, and Innovation!
          </h1>
          <p className="py-6">
            Discover the power of virtual tools! Boost productivity,
            collaboration, and creativity with our innovative solutions.
          </p>
          <div>
            <button className="btn mr-4 transition duration-500 ease-out bg-orange-500 text-white hover:ease-in hover:-translate-y-2 border border-none">
              Explore Now
            </button>
            <button className="btn btn-ghost transition duration-500 ease-out  text-white hover:ease-in hover:-translate-y-2 border border-white">
              Documentation
            </button>
          </div>
          <div className="mt-10 flex justify-center items-center">
            <video
              autoPlay
              muted
              loop
              className="rounded-lg w-[40%] border border-orange-700 shadow-orange-400 mx-2 my-4"
            >
              <source src={v1} type="video/mp4" />
              Your browser does not support the video
            </video>
            <video
              autoPlay
              muted
              loop
              className="rounded-lg w-[40%] border border-orange-700 shadow-orange-400 mx-2 my-4"
            >
              <source src={v2} type="video/mp4" />
              Your browser does not support the video
            </video>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
