import { ArrowRight } from "lucide-react";
import canaryImage from "../../../public/images/Canary Wharf.jpg";
import boroughImage from "../../../public/images/Borough.png";
import manchesterImage from "../../../public/images/Manchester.png";
import Highlighted from "../Highlighted";

interface CampusItem {
  title: string;
  img: string;
}

const arr: CampusItem[] = [
  {
    title: "Canary Wharf",
    img: canaryImage,
  },
  {
    title: "Borough",
    img: boroughImage,
  },
  {
    title: "Manchester",
    img: manchesterImage,
  },
];

const Campus = () => {
  return (
    <section id="campuses" className="py-20 mt-50">
      <div className="bg-dark-800 min-h-screen w-full h-full relative">
        <div className="bg-dark-800 md:bg-transparent py-10 md:py-0 my-container absolute -top-40 left-1/2 -translate-x-1/2 space-y-10 w-full ">
          <div className="w-full flex flex-col justify-center md:flex-row gap-1 ">
            {arr.map((data) => (
              <div className="w-full md:w-[240px] h-[280px] md:h-[480px] relative overflow-hidden">
                {/* content */}
                <div className="flex justify-between w-full z-10 relative p-2  bg-accent-blue text-dark-800 px-4">
                  <p className="font-black">{data.title}</p>
                  <ArrowRight />
                </div>

                {/* image */}
                <div className="absolute inset-0">
                  <img
                    className="w-full h-full object-cover"
                    src={data.img}
                    alt={data.title}
                  />
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-4xl md:text-5xl 2xl:text-6xl font-black uppercase text-center">
            <Highlighted>campuses</Highlighted>
          </h2>
          <p className="text-center">
            We have multiple locations across the UK, all strategically situated{" "}
            <br />
            in vibrant city centers and easily accessible by public transport.
          </p>
        </div>
        <span className="bg-accent-teal text-[24px] text-dark-800 font-black px-3 py-1 absolute top-1/2 -translate-y-1/2 right-10 uppercase rotate-12 hidden lg:block">
          Borough
        </span>
        <span className="bg-accent-blue text-[24px] text-dark-800 font-black px-3 py-1  absolute bottom-40 left-10 uppercase rotate-12 hidden lg:block">
          Manchester
        </span>
        <span className="bg-accent-hotpink text-[24px] text-white font-black px-3 py-1  absolute top-40 left-10 uppercase -rotate-12 hidden lg:block">
          Canary Wharf
        </span>
      </div>
    </section>
  );
};

export default Campus;
