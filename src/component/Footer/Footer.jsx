import { MdOutlineArrowForwardIos } from "react-icons/md";

const Footer = () => {
  return (
    <footer>
      <div className="top bg-[#fbfbfb] px-6 md:px-28 py-16 grid grid-cols-12 gap-0 md:gap-10 ">
        <div className="col-span-12 sm:col-span-6 md:col-span-6">
          <h3 className="text-[14px] font-semibold text-black my-3 uppercase tracking-[1px]">
            Address
          </h3>
          <p className="text-[13px] py-2 font-semibold text-[#535353]">
            <span className="text-[#a7a7a7]">CORPORATE OFFICE </span> : 49,
            Vision 2021 Tower-1, STP (Level 7),
            <br /> Kawran Bazar, Dhaka-1215.
          </p>
          <p className="text-[13px] py-2 font-semibold text-[#535353]">
            <span className="text-[#a7a7a7]">Phone</span> : +88 0244810014
          </p>
          <p className="text-[13px] py-2 font-semibold text-[#535353]">
            <span className="text-[#a7a7a7]">Email</span> : founders@etl.com.bd
          </p>
          <p className="text-[13px] py-2 font-semibold text-[#535353]">
            <span className="text-[#a7a7a7]">Web</span> : www.etl.com.bd
          </p>
        </div>
        <div className="col-span-12 sm:col-span-6 md:col-span-3">
          <h3 className="text-[14px] font-semibold text-black my-3 uppercase tracking-[1px]">
            Company
          </h3>
          <ul>
            <li className="py-2">
              <a
                className="text-[14px] text-[#676767] hover:text-[#3498D8]"
                href="/"
              >
                <MdOutlineArrowForwardIos style={{ display: "inline" }} /> About
              </a>
            </li>
            <li className="py-2">
              <a
                className="text-[14px] text-[#676767] hover:text-[#3498D8]"
                href="/"
              >
                <MdOutlineArrowForwardIos
                  style={{ display: "inline", fontSize: "14px" }}
                />{" "}
                Careers
              </a>
            </li>
            <li className="py-2">
              <a
                className="text-[14px] text-[#676767] hover:text-[#3498D8]"
                style={{ display: "inline", fontSize: "14px" }}
                href="/"
              >
                <MdOutlineArrowForwardIos style={{ display: "inline" }} />{" "}
                Services
              </a>
            </li>
            <li className="py-2">
              <a
                className="text-[14px] text-[#676767] hover:text-[#3498D8]"
                style={{ display: "inline", fontSize: "14px" }}
                href="/"
              >
                <MdOutlineArrowForwardIos style={{ display: "inline" }} /> Terms
                & Service
              </a>
            </li>
            <li className="py-2">
              <a
                className="text-[14px] text-[#676767] hover:text-[#3498D8]"
                style={{ display: "inline", fontSize: "14px" }}
                href="/"
              >
                <MdOutlineArrowForwardIos style={{ display: "inline" }} />
                 Quality Policy
              </a>
            </li>
            <li className="py-2">
              <a
                className="text-[14px] text-[#676767] hover:text-[#3498D8]"
                style={{ display: "inline", fontSize: "14px" }}
                href="/"
              >
                <MdOutlineArrowForwardIos style={{ display: "inline" }} />
                 Contact Us
              </a>
            </li>
          </ul>
        </div>
        <div className="col-span-12 sm:col-span-6 md:col-span-3">
          <h3 className="text-[14px] font-semibold text-black my-3 uppercase tracking-[1px]">
            Follow
          </h3>
          <ul>
            <li className="py-2">
              <a
                className="text-[14px] text-[#676767] hover:text-[#3498D8]"
                href="/"
              >
                <MdOutlineArrowForwardIos style={{ display: "inline" }} /> ETL Blog
              </a>
            </li>
            <li className="py-2">
              <a
                className="text-[14px] text-[#676767] hover:text-[#3498D8]"
                href="/"
              >
                <MdOutlineArrowForwardIos
                  style={{ display: "inline", fontSize: "14px" }}
                />{" "}
                Linkedin
              </a>
            </li>
            <li className="py-2">
              <a
                className="text-[14px] text-[#676767] hover:text-[#3498D8]"
                style={{ display: "inline", fontSize: "14px" }}
                href="/"
              >
                <MdOutlineArrowForwardIos style={{ display: "inline" }} />{" "}
                Facebook
              </a>
            </li>
            <li className="py-2">
              <a
                className="text-[14px] text-[#676767] hover:text-[#3498D8]"
                style={{ display: "inline", fontSize: "14px" }}
                href="/"
              >
                <MdOutlineArrowForwardIos style={{ display: "inline" }} /> Twitter
              </a>
            </li>
            <li className="py-2">
              <a
                className="text-[14px] text-[#676767] hover:text-[#3498D8]"
                style={{ display: "inline", fontSize: "14px" }}
                href="/"
              >
                <MdOutlineArrowForwardIos style={{ display: "inline" }} />
                 Google Plus
              </a>
            </li>
            <li className="py-2">
              <a
                className="text-[14px] text-[#676767] hover:text-[#3498D8]"
                style={{ display: "inline", fontSize: "14px" }}
                href="/"
              >
                <MdOutlineArrowForwardIos style={{ display: "inline" }} />
                 Youtube
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="bottom flex items-center justify-center py-6">
        <p className="text-[11px] tracking-[1px] text-[#535353]">
          &copy; 2023 EZZE TECHNOLOGY LTD.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
