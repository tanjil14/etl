import brands1 from "../../img/co/dhakalive.png"
import brands2 from "../../img/co/itbazaar.png"
import brands3 from "../../img/co/techjobs.com.bd.png"
import brands4 from "../../img/co/etlcampus.png"
const CoBrands = () => {
  return (
    <section className="px-24 py-16">
      <div className="text-center mb-[60px]">
        <h3 className="text-[30px] uppercase font-normal tracking-[3px]">
          Co - Brands
        </h3>
        <hr className="h-[2px] w-[25px] bg-[#444444] border-none my-[30px] mx-auto" />
      </div>
      <div className="our-brands grid grid-cols-1 md:grid-cols-4 gap-4 place-items-center">
        <a href="/">
          <img className="p-5 max-w-full h-auto text-center" src={brands1} alt="" />
        </a>
        <a href="/">
          <img className="p-5 max-w-full h-auto" src={brands2} alt="" />
        </a>
        <a href="/">
          <img className="p-5 max-w-full h-auto" src={brands3} alt="" />
        </a>
        <a href="/">
          <img className="p-5 max-w-full h-auto" src={brands4} alt="" />
        </a>
      </div>
    </section>
  );
};

export default CoBrands;
