import img1 from "../../img/recent_work/mujib100.png";
import img2 from "../../img/recent_work/bloodbank.png";
import img3 from "../../img/recent_work/startup.png";
import img4 from "../../img/recent_work/eed.png";
const RecentWork = () => {
  return (
    <section className="relative overflow-hidden w-full pb-[50px] bg-transparent -mt-[140px] px-6 md:px-24">
      <h3 className="text-[30px] text-white font-normal mb-5 tracking-[3px]">
        Recent Work
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        <div className="wrapper rounded-[2px] shadow-lg bg-white">
          <article className="relative group overflow-hidden">
            <div className="portfolio-image p-3 overflow-hidden">
              <img
                className="w-full duration-700 ease-in-out group-hover:scale-[1.1]"
                src={img1}
                alt=""
              />
            </div>
            <div className="flex justify-center items-center absolute h-full w-full bg-blackRgba -bottom-0 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <a
                className="bg-[#6b97c5] text-white uppercase mb-2 tracking-[2px] border-none py-2 px-4 rounded-[4px] mr-2"
                href="/"
              >
                View
              </a>
              <a
                className="bg-[#e86211] text-white uppercase mb-2 tracking-[2px] rounded-[4px] py-2 px-4 border-none ml-2"
                href="/"
              >
                Details
              </a>
            </div>
          </article>
          <div className="item-info p-3">
            <h6 className="m-0 text-base uppercase mb-3 font-medium text-[#3c3c3c] tracking-[1.5px]">
              PARLIAMENT MUJIB100
            </h6>
            <span>Web Application</span>
          </div>
        </div>
        <div className="wrapper rounded-[2px] shadow-lg bg-white">
          <article className="relative group overflow-hidden">
            <div className="portfolio-image p-3 overflow-hidden">
              <img
                className="w-full duration-700 ease-in-out group-hover:scale-[1.1]"
                src={img2}
                alt=""
              />
            </div>
            <div className="flex justify-center items-center absolute h-full w-full bg-blackRgba -bottom-0 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <a
                className="bg-[#6b97c5] text-white uppercase mb-2 tracking-[2px] border-none py-2 px-4 rounded-[4px] mr-2"
                href="/"
              >
                View
              </a>
              <a
                className="bg-[#e86211] text-white uppercase mb-2 tracking-[2px] rounded-[4px] py-2 px-4 border-none ml-2"
                href="/"
              >
                Details
              </a>
            </div>
          </article>
          <div className="item-info p-3">
            <h6 className="m-0 text-base uppercase mb-3 font-medium text-[#3c3c3c] tracking-[1.5px]">
            BLOODBANK LIVE
            </h6>
            <span>Mobile Application</span>
          </div>
        </div>
        <div className="wrapper rounded-[2px] shadow-lg bg-white">
          <article className="relative group overflow-hidden">
            <div className="portfolio-image p-3 overflow-hidden">
              <img
                className="w-full duration-700 ease-in-out group-hover:scale-[1.1]"
                src={img3}
                alt=""
              />
            </div>
            <div className="flex justify-center items-center absolute h-full w-full bg-blackRgba -bottom-0 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <a
                className="bg-[#6b97c5] text-white uppercase mb-2 tracking-[2px] border-none py-2 px-4 rounded-[4px] mr-2"
                href="/"
              >
                View
              </a>
              <a
                className="bg-[#e86211] text-white uppercase mb-2 tracking-[2px] rounded-[4px] py-2 px-4 border-none ml-2"
                href="/"
              >
                Details
              </a>
            </div>
          </article>
          <div className="item-info p-3">
            <h6 className="m-0 text-base uppercase mb-3 font-medium text-[#3c3c3c] tracking-[1.5px]">
            STARTUP BANGLADESH
            </h6>
            <span>Mobile Application</span>
          </div>
        </div>
        <div className="wrapper rounded-[2px] shadow-lg bg-white">
          <article className="relative group overflow-hidden">
            <div className="portfolio-image p-3 overflow-hidden">
              <img
                className="w-full duration-700 ease-in-out group-hover:scale-[1.1]"
                src={img4}
                alt=""
              />
            </div>
            <div className="flex justify-center items-center absolute h-full w-full bg-blackRgba -bottom-0 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <a
                className="bg-[#6b97c5] text-white uppercase mb-2 tracking-[2px] border-none py-2 px-4 rounded-[4px] mr-2"
                href="/"
              >
                View
              </a>
              <a
                className="bg-[#e86211] text-white uppercase mb-2 tracking-[2px] rounded-[4px] py-2 px-4 border-none ml-2"
                href="/"
              >
                Details
              </a>
            </div>
          </article>
          <div className="item-info p-3">
            <h6 className="m-0 text-base uppercase mb-3 font-medium text-[#3c3c3c] tracking-[1.5px]">
            EDUCATION BUILDING
            </h6>
            <span>Web Application</span>
          </div>
        </div>
      </div>
      <div className="mt-[50px] float-right">
        <a className="bg-[#e14260] rounded-[4px] text-[10px] px-5 py-2 tracking-[2px] uppercase text-white border-none font-medium cursor-pointer hover:bg-[#141414]" href="/">More Project</a>
      </div>
    </section>
  );
};

export default RecentWork;
