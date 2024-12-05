import heroImg1 from "../assets/sq1.jpg";
import heroImg2 from "../assets/sq2.jpg";
import heroImg3 from "../assets/sq3.jpg";
import heroImg4 from "../assets/sq4.jpg";
import heroImg5 from "../assets/sq5.jpg";
const Hero = () => {
  return (
    <section className="hero relative bg-cover bg-center h-screen py-10">
      {/* <!-- Overlay --> */}
      {/* <div className="absolute inset-0 bg-black bg-opacity-40"></div> */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full gap-3 container mx-auto">
        <div className="absolute top-0 left-0 w-full h-full grid grid-cols-6 grid-rows-4">
          <img
            src={heroImg1}
            alt=""
            className="w-full h-full object-cover col-start-3 row-start-1"
          />
          <img
            src={heroImg2}
            alt=""
            className="w-full h-full object-cover col-start-1 row-start-2"
          />
          <img
            src={heroImg3}
            alt=""
            className="w-full h-full object-cover col-start-6 row-start-2"
          />
          <img
            src={heroImg4}
            alt=""
            className="w-full h-full object-cover col-start-2 row-start-4"
          />
          <img
            src={heroImg5}
            alt=""
            className="w-full h-full object-cover col-start-5 row-start-4"
          />
        </div>
        <h1 className="text-7xl font-bold font-raleway">Plan Your</h1>
        <h1 className="text-7xl font-bold font-raleway">Perfect Journey</h1>
        <p className="text-xl">
          Effortlessly organize trips, itineraries, and adventures in one place.
        </p>
        <button className="border-2 px-4 py-2 text-xl font-medium rounded-full">
          Start Planning Now
        </button>
      </div>
    </section>
  );
};

export default Hero;
