import Achievements from "../../component/Achievement/Achievements";
import Clients from "../../component/Clients/Clients";
import CoBrands from "../../component/CoBrands/CoBrands";
import Footer from "../../component/Footer/Footer";
import Nav from "../../component/Navbar/Nav";
import Photo from "../../component/Photo/Photo";
import RecentWork from "../../component/RecentWork/RecentWork";
import WhatToDo from "../../component/WhatToDo/WhatToDo";

const Home = () => {
  return (
    <>
      <div className="bg-Hero h-[600px] bg-top bg-cover relative">
      <Nav />
       <h3 className="absolute top-[45%] left-12 sm:left-24 text-[40px] text-white font-semibold tracking-[1.5px]">Welcome to Innovation!</h3>
      </div>
      <RecentWork />
      <WhatToDo />
      <Achievements />
      <Clients />
      <Photo />
      <CoBrands />
      <Footer />
    </>
  );
};

export default Home;
