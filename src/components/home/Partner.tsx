import partnerLogoOne from "../../../public/images/Ravensboune-university.svg";
import partnerLogoTwo from "../../../public/images/Arts-university.svg";
import Highlighted from "../Highlighted";
const Partner = () => {
  return (
    <section className="my-container py-20 mt-50 md:mt-0">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20">
        <h1 className="text-4xl md:text-5xl 2xl:text-6xl font-black uppercase">
          Partner{" "}
          <Highlighted color="var(--color-accent-pink)">
            Institutions
          </Highlighted>
        </h1>

        <p className="text-wrap break-words">
          Pur partners description here
          jfslkjfslkjafklsajfklsajflkjsadlkj`ldkjakldjkldjkldjk`djkl`jdkls`jdkljs`kdljskldjksljdklsjdkjsdkjsdkjskdjsljdklsjdklsjdksjdksjkdjskldjklsdjksldjksldjklsjdksjdksjdksjdkjskdjskjdklsjdksjdkjskdjskjdksjdkjskdjskdjskdksjdks
        </p>
        <img
          src={partnerLogoOne}
          alt="partner logo"
          className="h-[140px] md:col-start-2 md:row-start-1"
        />
        <img src={partnerLogoTwo} alt="partner logo" className="h-[140px]" />
      </div>
    </section>
  );
};

export default Partner;
