import firstImage from "../../../public/images/story-two.jpg";
import secondImage from "../../../public/images/story-one.jpg";
import Button from "../Button";
import Highlighted from "../Highlighted";

const Story = () => {
  return (
    <section id="stories" className="my-container min-h-screen">
      <h1 className="text-4xl md:text-5xl 2xl:text-6xl font-black uppercase my-20">
        <Highlighted color="var(--color-dark-800)">stories</Highlighted>
      </h1>
      <div className="flex flex-col lg:flex-row justify-center gap-10 md:gap-20">
        <div className="w-full lg:w-1/2">
          <img src={firstImage} alt="study-image" className="w-full" />
        </div>
        <div className="w-full lg:w-1/2 space-y-8 mt-5 md:mt-10">
          <h2 className="text-4xl md:text-5xl  font-black uppercase">
            Induction in VCAD Canary Wharf campus
          </h2>
          <p>
            If you join Victoria College of Arts and Design, you can expect the
            highest calibre of teaching, cutting-edge facilities, and
            exceptional industry connections, which will help to prepare you for
            a rewarding career in the creative and tech industries.
          </p>

          <div className="flex flex-col sm:flex-row gap-2 sm:gap-5">
            <Button>Read article</Button>
            <Button outline>View full gallery</Button>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-center gap-10 md:gap-20 mt-20">
        <div className="w-full  lg:w-1/2">
          <img src={secondImage} alt="study-image" className="w-full" />
        </div>
        <div className="w-full lg:w-1/2 space-y-8 mt-5 md:mt-10">
          <h2 className="text-4xl md:text-5xl font-black uppercase">
            Be ready for applying! Five tips to <br />
            <span className="text-accent-hotpink">build your portfolio</span>
          </h2>
          <p>
            If you join Victoria College of Arts and Design, you can expect the
            highest calibre of teaching, cutting-edge facilities, and
            exceptional industry connections, which will help to prepare you for
            a rewarding career in the creative and tech industries.
          </p>
          <div>
            <Button>Read article</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
