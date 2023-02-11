import img from "../../img/logo/achive-two.jpg";
import {BsTrophyFill} from "react-icons/bs"
const Achievements = () => {
  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="div">
            <div className="py-[50px] px-[20px]">
                <h2 className="text-[30px] sm:text-[48px] font-extralight uppercase text-[#3c3c3c] mb-[30px]">ACHIEVEMENTS</h2>
                <ul>
                    <li className="mb-[35px]">
                        <h4 className="flex items-center gap-4 uppercase italic font-normal tracking-normal leading-8 text-2xl text-[#3c3c3c] my-[10px]"><BsTrophyFill className="text-lg text-[#607D8B]"/>NATIONAL MOBILE APP DEVELOPMENT AWARD-15</h4>
                        <p className="leading-7 font-normal text-[14px] text-[#535353]">Online Awarded For Live Blood Bank Mobile Application, Category- Health & Environment, Position: Runner-up</p>
                    </li>
                    <li className="mb-[35px]">
                        <h4 className="flex items-center gap-4 uppercase italic font-normal tracking-normal leading-8 text-2xl text-[#3c3c3c] my-[10px]"><BsTrophyFill className="text-lg text-[#607D8B]"/>BEST LIVE STREMING AWARD</h4>
                        <p className="leading-7 font-normal text-[14px] text-[#535353]">Online Streaming Partnership: Bangladesh ICT Expo-2015 (15 June to 17 June) at BICC</p>
                    </li>
                    <li className="mb-[35px]">
                        <h4 className="flex items-center gap-4 uppercase italic font-normal tracking-normal leading-8 text-2xl text-[#3c3c3c] my-[10px]"><BsTrophyFill className="text-lg text-[#607D8B]"/>ARIJIT SINGH LIVE IN CONCERT</h4>
                        <p className="leading-7 font-normal text-[14px] text-[#535353]">Arijit Singh Live in Concert: 12th Dec 2014 — at Jamuna Future Park, Dhaka</p>
                    </li>
                </ul>
            </div>
        </div>
        <div className="div">
          <img className="w-full h-auto" src={img} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Achievements;
