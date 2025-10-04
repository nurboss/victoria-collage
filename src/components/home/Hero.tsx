import heroImage from "../../../public/images/hero-image.png";
import Button from "../Button";

const Hero = () => {
  return (
    <section className="my-container min-h-screen flex flex-col lg:flex-row-reverse justify-center items-center gap-10 md:gap-20 ">
      <div className="w-full  lg:w-1/2">
        <img src={heroImage} alt="banner-image" className="w-full" />
      </div>
      <div className="w-full lg:w-1/2 space-y-5">
        <h1 className="text-5xl md:text-6xl 2xl:text-[120px] font-black uppercase tracking-wide">
          welcome to VCAD
        </h1>
        <p>
          Our team at Victoria College of Arts and Design is passionate about
          creating innovative projects and generating new ideas. We work with a
          variety of experts and esteemed companies using a collaborative
          approach. Located in London's Design District, we have valuable
          connections within our industry. Search our latest courses.
        </p>
        <Button> Apply Now</Button>
      </div>
    </section>
  );
};

export default Hero;
