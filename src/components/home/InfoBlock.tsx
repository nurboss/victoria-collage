import studyImage from "../../../public/images/study-img.png";
import Button from "../Button";
import Highlighted from "../Highlighted";
import TabMenu from "../TabMenu";
const InfoBlock = () => {
  return (
    <section className="my-container min-h-screen my-20">
      <TabMenu />
      <div className="flex flex-col lg:flex-row justify-center gap-10 md:gap-20 ">
        <div className="w-full lg:w-1/2">
          <img src={studyImage} alt="study-image" className="w-full" />
        </div>

        <div className="w-full lg:w-1/2 space-y-8 mt-0 md:mt-10">
          <h2 className="text-4xl md:text-5xl 2xl:text-6xl font-black uppercase">
            What will you{" "}
            <Highlighted color="var(--color-dark-800)">study?</Highlighted>
          </h2>
          <p>
            If you join Victoria College of Arts and Design, you can expect the
            highest calibre of teaching, cutting-edge facilities, and
            exceptional industry connections, which will help to prepare you for
            a rewarding career in the creative and tech industries.
          </p>
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-5">
            <Button>View Courses</Button>
            <Button outline>Download Prospectus</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoBlock;
