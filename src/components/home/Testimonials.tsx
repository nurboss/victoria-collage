import { Facebook, Instagram, Linkedin } from "lucide-react";
import imageOne from "../../../public/images/testimonials-1.jpg";
import imageTwo from "../../../public/images/testimonials-2.jpg";
import imageThree from "../../../public/images/testimonials-3.jpg";
import imageFour from "../../../public/images/testimonials-4.jpg";
import Marquee from "react-fast-marquee";
import Highlighted from "../Highlighted";

const arr = [imageOne, imageTwo, imageThree, imageFour];

const Testimonials = () => {
  return (
    <section className="min-h-screen py-20 ">
      <div className="my-container mx-auto">
        <h2 className="text-4xl md:text-5xl 2xl:text-6xl font-black uppercase ">
          Student <br /> <Highlighted>Testimonials</Highlighted>
        </h2>
      </div>
      <div className="py-40">
        <Marquee speed={100} pauseOnHover={true}>
          <div className="flex gap-20 py-10">
            {arr.map((img, i) => (
              <div
                key={i}
                className="w-[295px] h-[400px] relative overflow-hidden flex justify-center items-center rotate-12 border border-accent-hotpink"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${img})` }}
                />
                <div className="absolute inset-0 bg-dark-800/80" />

                <div className="relative z-10 p-6 text-white space-y-2 -rotate-12">
                  <h3 className="font-black leading-tight uppercase text-[28px]">
                    “ Lorem Ipsum <br /> LOrem Ipsum “
                  </h3>
                  <p className="uppercase text-[8px]">Name \ age \ course</p>
                  <div className="flex gap-2">
                    <Facebook size={12} />
                    <Instagram size={12} />
                    <Linkedin size={12} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Marquee>
      </div>
    </section>
  );
};

export default Testimonials;
