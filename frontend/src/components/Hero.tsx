import video from "../assets/Eclypse-video.mp4"

const Hero = () => {
  return (
    <section className="w-full bg-black pt-24 px-4 sm:px-8">
      {/* Top Title and Year */}
      <div className="flex justify-between items-start max-w-5xl mx-auto mb-4">
        <h1 className="text-6xl sm:text-7xl font-extralight tracking-tight leading-tight text-white">
          Eclypse<span className="align-super text-sm ml-1">®</span>
        </h1>
        <span className="text-xs text-white mt-2">© 2025</span>
      </div>

      {/* Video Block */}
      <div className="relative w-full max-w-5xl mx-auto rounded-xl overflow-hidden">
        <video
          className="w-full h-full object-cover rounded-xl"
          src={video}
          autoPlay
          loop
          muted
          playsInline
        />

        {/* Bottom Right Text on Video */}
        <div className="absolute bottom-4 right-6 text-white">
          <p className="text-sm sm:text-base">
            A silhouette worth remembering
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
