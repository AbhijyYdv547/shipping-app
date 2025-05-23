import video from "../assets/Eclypse-video.mp4"
import logo from "../assets/logo.jpg"
import crumbled from "../assets/Crumbled-jacket.jpg"
import pocket from "../assets/Jacket-pocket.jpg"
import scissor from "../assets/scissor.jpg"


const LookbookGrid = () => (
  <section className="bg-black px-6 py-12">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {/* Video: spans 2 columns on medium+ screens */}
      <video
        src={video}
        autoPlay
        muted
        loop
        className="w-full h-64 md:col-span-2 object-cover rounded"
      />

      {/* Top-right image */}
      <img
        src={crumbled}
        alt="Look 2"
        className="w-full h-64 object-cover rounded"
      />

      {/* Second row images */}
      <img
        src={pocket}
        alt="Look 3"
        className="w-full h-64 object-cover rounded"
      />
      <img
        src={scissor}
        alt="Look 4"
        className="w-full h-64 object-cover rounded"
      />
      <img
        src={logo}
        alt="Look 5"
        className="w-full h-64 object-cover rounded"
      />
    </div>
  </section>
);

export default LookbookGrid;
