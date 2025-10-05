import { Facebook, Instagram, Linkedin } from "lucide-react";
import Marquee from "react-fast-marquee";
import Highlighted from "../Highlighted";
import { useEffect, useState } from "react";
import TestimonialSkeleton from "../TestimonialSkeleton";

interface Testimonial {
  id: number;
  name: string;
  age: number;
  course: string;
  testimonial: string;
  image: string;
  social: {
    facebook?: string;
    instagram?: string;
    linkedin?: string;
  };
}

interface TestimonialsData {
  testimonials: Testimonial[];
}

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchTestimonials();
  }, []);

  // Fetch testimonials from JSON file
  const fetchTestimonials = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch("/data/testimonial.json");

      if (!response.ok) {
        throw new Error(
          `Failed to fetch testimonials: ${response.status} ${response.statusText}`
        );
      }

      const data: TestimonialsData = await response.json();
      setTestimonials(data.testimonials);
    } catch (err) {
      setError("Failed to load testimonials. Please try again later.");
      console.error("Error fetching testimonials:", err);
    } finally {
      setLoading(false);
    }
  };

  // Error component
  const ErrorMessage = () => (
    <div className="flex justify-center items-center py-20">
      <div className="text-center">
        <p className="text-red-400 text-lg mb-4">{error}</p>
        <button
          onClick={fetchTestimonials}
          className="px-6 py-2 bg-accent-hotpink text-white rounded hover:bg-pink-600 transition-colors"
        >
          Try Again
        </button>
      </div>
    </div>
  );

  return (
    <section id="student-testimonials" className="min-h-screen py-20">
      <div className="my-container mx-auto">
        <h2 className="text-4xl md:text-5xl 2xl:text-6xl font-black uppercase">
          Student <br /> <Highlighted>Testimonials</Highlighted>
        </h2>
      </div>
      <div className="py-40">
        {error ? (
          <ErrorMessage />
        ) : loading ? (
          <Marquee speed={100} pauseOnHover={true}>
            <TestimonialSkeleton />
          </Marquee>
        ) : (
          <Marquee speed={100} pauseOnHover={true}>
            <div className="flex gap-20 py-10">
              {testimonials.map((testimonial, i: number) => (
                <div
                  key={testimonial.id}
                  className={`w-[295px] h-[400px] relative overflow-hidden flex justify-center items-center rotate-12 border border-accent-hotpink hover:scale-105 transition-transform duration-300 ${
                    i === 0 && " ml-20"
                  }`}
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${testimonial.image})` }}
                  />
                  <div className="absolute inset-0 bg-dark-800/80 hover:bg-dark-800/70 transition-colors duration-300" />

                  <div className="relative z-10 p-6 text-white space-y-2 -rotate-12">
                    <h3 className="font-black leading-tight uppercase text-[28px]">
                      "{testimonial.testimonial?.slice(0, 17)}..."
                    </h3>
                    <p className="uppercase text-[8px]">
                      {testimonial.name} \\ {testimonial.age} \\{" "}
                      {testimonial.course}
                    </p>
                    <div className="flex gap-2">
                      {testimonial.social.facebook && (
                        <a
                          href={testimonial.social.facebook}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:scale-110 transition-transform"
                        >
                          <Facebook
                            size={12}
                            className="hover:text-accent-hotpink transition-colors"
                          />
                        </a>
                      )}
                      {testimonial.social.instagram && (
                        <a
                          href={testimonial.social.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:scale-110 transition-transform"
                        >
                          <Instagram
                            size={12}
                            className="hover:text-accent-hotpink transition-colors"
                          />
                        </a>
                      )}
                      {testimonial.social.linkedin && (
                        <a
                          href={testimonial.social.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:scale-110 transition-transform"
                        >
                          <Linkedin
                            size={12}
                            className="hover:text-accent-hotpink transition-colors"
                          />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Marquee>
        )}
      </div>
    </section>
  );
};

export default Testimonials;
