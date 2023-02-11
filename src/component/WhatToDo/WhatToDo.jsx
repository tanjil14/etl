import { FaLaptop } from "react-icons/fa";
import { IoRocketOutline,IoPaperPlaneOutline } from "react-icons/io5";
import { ImVideoCamera } from "react-icons/im";
import { SlBriefcase } from "react-icons/sl";
import { TbDatabaseImport } from "react-icons/tb";
const WhatToDo = () => {
  return (
    <section className="bg-[#238de6] py-20">
      <div className="px-6 md:px-28">
        <div className="text-center mb-[60px]">
          <h3 className="text-[30px] uppercase m-0 font-normal tracking-[3px] text-white">
            WHAT WE DO
          </h3>
          <hr className="h-[2px] w-[25px] border-none my-[30px] mx-auto bg-white" />
        </div>
        <div>
          <ul className="grid grid-cols-12 gap-0 md:gap-8">
            <li className="col-span-12 md:col-span-6">
              <article className="flex gap-4">
                <div className="text-center">
                  <div className="h-[98px] w-[98px]  leading-[98px] flex items-center justify-center border border-solid border-[#ea6a6a] rounded-[50%] bg-[#ea6a6a] mt-2">
                    <IoRocketOutline className="text-white text-[30px]" />
                  </div>
                </div>
                <div className="text-white">
                  <h6 className="text-base font-semibold py-2">
                    Web Development
                  </h6>
                  <p className="text-[15px] leading-[30px] ">
                    Ezze Technology Ltd. offers web solutions which tend to be
                    effective tools of marketing and ensure return on
                    investments. We are devoted to give our customers affordable
                    and custom based packages which surpass the expectation of
                    the clientele.
                  </p>
                </div>
              </article>
            </li>
            <li className="col-span-12 md:col-span-6">
              <article className="flex gap-4">
                <div>
                  <div className="h-[98px] w-[98px]  leading-[98px] flex items-center justify-center border border-solid border-[#67bbb4] rounded-[50%] bg-[#67bbb4] mt-2">
                    <FaLaptop className="text-white text-[30px]" />
                  </div>
                </div>
                <div className="text-white">
                  <h6 className="text-base font-semibold py-2">
                    Apps Development
                  </h6>
                  <p className="text-[15px] leading-[30px] ">
                    Ezze Technology Ltd. provides wide assortment of services
                    for mobile applications and developments which makes the
                    transition of your company into the online world as smooth
                    as possible. Our professional team constantly hones their
                    skill to ensure that your company stays ahead in this
                    competitive world.
                  </p>
                </div>
              </article>
            </li>
            <li className="col-span-12 md:col-span-6">
              <article className="flex gap-4">
                <div>
                  <div className="h-[98px] w-[98px]  leading-[98px] flex items-center justify-center border border-solid border-[#e8852d] rounded-[50%] bg-[#e8852d] mt-2">
                    <IoPaperPlaneOutline className="text-white text-[30px]" />
                  </div>
                </div>
                <div className="text-white">
                  <h6 className="text-base font-semibold py-2">
                    Digital Marketing
                  </h6>
                  <p className="text-[15px] leading-[30px] ">
                    Digital Marketing is driving the society to a phase which
                    creates new ways of thinking, interrelationships and global
                    awareness. We are trying to provide out of the box solutions
                    which can help to find lasting and hi-impact solutions to
                    marketing issue.
                  </p>
                </div>
              </article>
            </li>
            <li className="col-span-12 md:col-span-6">
              <article className="flex gap-4">
                <div>
                  <div className="h-[98px] w-[98px]  leading-[98px] flex items-center justify-center border border-solid border-[#ce5281] rounded-[50%] bg-[#ce5281] mt-2">
                    <TbDatabaseImport className="text-white text-[30px]" />
                  </div>
                </div>
                <div className="text-white">
                  <h6 className="text-base font-semibold py-2">
                    Domain & Hosting
                  </h6>
                  <p className="text-[15px] leading-[30px] ">
                    Ezze Technology Ltd. realizes that now a day’s everyone
                    needs an online presence, regardless of their line of
                    business or technical expertise. With an authoritative and
                    straightforward way to hosting solution, we are able to
                    cover everyone’s need and requirements.
                  </p>
                </div>
              </article>
            </li>
            <li className="col-span-12 md:col-span-6">
              <article className="flex gap-4">
                <div>
                  <div className="h-[98px] w-[98px]  leading-[98px] flex items-center justify-center border border-solid border-[#F44336] rounded-[50%] bg-[#F44336] mt-2">
                    <ImVideoCamera className="text-white text-[30px]" />
                  </div>
                </div>
                <div className="text-white">
                  <h6 className="text-base font-semibold py-2">
                    Live Streming
                  </h6>
                  <p className="text-[15px] leading-[30px] ">
                    Live Streaming video is content that sent in compressed form
                    over the Internet and displayed by the viewer in real time.
                    We ensure video streaming platform which allows customers to
                    live their video content in a seamless way.
                  </p>
                </div>
              </article>
            </li>
            <li className="col-span-12 md:col-span-6">
              <article className="flex gap-4">
                <div>
                  <div className="h-[98px] w-[98px]  leading-[98px] flex items-center justify-center border border-solid border-[#4CAF50] rounded-[50%] bg-[#4CAF50] mt-2">
                    <SlBriefcase className="text-white text-[30px]" />
                  </div>
                </div>
                <div className="text-white">
                  <h6 className="text-base font-semibold py-2">
                    E-Business Solution
                  </h6>
                  <p className="text-[15px] leading-[30px] ">
                    Ezze Technology Ltd. brings a package program that lets you
                    build, customize, and run an online store. We will walk you
                    through the entire process: hosting, design, pricing and
                    payment options, marketing tools and reports.
                  </p>
                </div>
              </article>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WhatToDo;
