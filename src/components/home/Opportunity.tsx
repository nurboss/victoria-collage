import videoImage from "../../../public/images/video-image.png";
import Button from "../Button";

const Opportunity = () => {
  return (
    <section className="my-container min-h-screen flex flex-col lg:flex-row justify-center gap-10 py-20">
      <div className="w-full h-full lg:w-5/12 relative flex items-center justify-center">
        <span className="absolute -top-10 left-5 text-7xl md:text-8xl font-bold">
          “
        </span>

        <h3 className="text-3xl md:text-4xl lg:text-5xl  font-black text-center m-5 md:m-10">
          A World where <span className="text-accent-blue">EVERYONE has</span>{" "}
          the <span className="text-accent-blue">opportunity</span> to fulfil
          their potential
        </h3>

        <span className="absolute -bottom-10 right-5 text-7xl md:text-8xl rotate-180 leading-tight font-bold">
          “
        </span>
      </div>

      <div className="w-full lg:w-9/12 relative h-fit mb-20">
        <img
          src={videoImage}
          alt="study-image"
          className="w-full pr-5 sm:pr-10 md:pr-20"
        />
        <div className="bg-dark-800 flex flex-col md:flex-row justify-between md:items-center  p-3 sm:p-7 lg:p-10 absolute right-0 bottom-[-100px] w-9/12 space-y-2">
          <h2 className="text-md sm:text-2xl  md:text-3xl text-accent-blue font-extrabold">
            There's Still Time <br className="hidden md:block" /> to Apply for{" "}
            <br className="hidden md:block" /> September 2025
          </h2>
          <Button> View Courses</Button>
        </div>
      </div>
    </section>
  );
};

export default Opportunity;
