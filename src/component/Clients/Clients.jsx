import img7 from "../../img/client/a2i.png";
import img13 from "../../img/client/beatnik.png";
import img10 from "../../img/client/brac.png";
import img5 from "../../img/client/btcl.png";
import img12 from "../../img/client/daily-star.png";
import img11 from "../../img/client/gaan-bangla.png";
import img14 from "../../img/client/grey.png";
import img4 from "../../img/client/hi-tech.png";
import img1 from "../../img/client/ictdivision-logo.png";
import img8 from "../../img/client/IPDC-logo.png";
import img16 from "../../img/client/kcargo-logo.png";
import img2 from "../../img/client/lict-logo.png";
import img15 from "../../img/client/netg5.png";
import img3 from "../../img/client/powar-minstry.png";
import img9 from "../../img/client/prothom-alo.png";
import img6 from "../../img/client/south-city.png";
//for Partner
import img21 from "../../img/partner/aamra.png";
import img19 from "../../img/partner/bacco.png";
import img22 from "../../img/partner/basis-new.png";
import img17 from "../../img/partner/bcc.png";
import img24 from "../../img/partner/bcs.png";
import img23 from "../../img/partner/bicc.png";
import img26 from "../../img/partner/dcci_logo.png";
import img20 from "../../img/partner/e-cab.png";
import img29 from "../../img/partner/gigabyte.png";
import img25 from "../../img/partner/iccb.png";
import img30 from "../../img/partner/lenovo.png";
import img18 from "../../img/partner/Narcotics-logo.png";
import img27 from "../../img/partner/panpacific.png";
import img28 from "../../img/partner/radisson.png";
import img31 from "../../img/partner/samsung.png";

const clientUrl = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
  img13,
  img14,
  img15,
  img16,
];
const partnerUrl = [
  img17,
  img18,
  img19,
  img20,
  img21,
  img22,
  img23,
  img24,
  img25,
  img26,
  img27,
  img28,
  img29,
  img30,
  img31,
];
const Clients = () => {
  return (
    <section>
      <div className="px-6 md:px-28 grid grid-cols-12">
        <div className="col-span-12 lg:col-span-7">
          <div className="py-12 pl-12 pr-7">
            <div className="mb-7">
              <h4 className="text-2xl text-[#3c3c3c] font-bold tracking-[1.5px]">
                Our Clients
              </h4>
            </div>
            <div>
              <ul>
                {clientUrl.map((url) => (
                  <li
                    key={url}
                    className="inline-block mr-[45px] mb-[15px] pb-[15px] relative client-after client-before "
                  >
                    <a href="/">
                      <img className="w-[60px] md:w-[100px]" src={url} alt="" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-5">
          <div className="py-12 pl-12 pr-7">
            <div className="mb-7">
              <h4 className="text-2xl text-[#3c3c3c] font-bold tracking-[1.5px]">
                Our Partner
              </h4>
            </div>
            <div>
              <ul>
                {partnerUrl.map((url) => (
                  <li
                    key={url}
                    className="inline-block mr-[45px] mb-[15px] pb-[15px] relative client-after client-before after:-right-20"
                  >
                    <a href="/">
                      <img className="w-[50px] md:w-[80px]" src={url} alt="" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
