import img1 from "../../img/photo/s1.png"
import img2 from "../../img/photo/s2.jpg"
import img3 from "../../img/photo/s3.jpg"
import img4 from "../../img/photo/s4.jpg"
import img5 from "../../img/photo/s5.jpg"
import img6 from "../../img/photo/s6.jpg"
import img7 from "../../img/photo/etl_7.jpg"
import img8 from "../../img/photo/s8.jpg"


const Photo = () => {
    return (
        <section>
            <div className='text-center mb-[60px]'>
              <h3 className="text-[30px] uppercase font-normal tracking-[3px]">PHOTO STREAM</h3>
              <hr className="h-[2px] w-[25px] bg-[#444444] border-none my-[30px] mx-auto"/>
            </div>
            <div className="py-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
              <figure className="overflow-hidden"><img className="w-full h-auto scale-100 duration-700 ease-in-out hover:scale-[1.1]" src={img1} alt="" /></figure>
              <figure className="overflow-hidden"><img className="w-full h-auto scale-100 duration-700 ease-in-out hover:scale-[1.1]" src={img2} alt="" /></figure>
              <figure className="overflow-hidden"><img className="w-full h-auto scale-100 duration-700 ease-in-out hover:scale-[1.1]" src={img3} alt="" /></figure>
              <figure className="overflow-hidden"><img className="w-full h-auto scale-100 duration-700 ease-in-out hover:scale-[1.1]" src={img4} alt="" /></figure>
              <figure className="overflow-hidden"><img className="w-full h-auto scale-100 duration-700 ease-in-out hover:scale-[1.1]" src={img5} alt="" /></figure>
              <figure className="overflow-hidden"><img className="w-full h-auto scale-100 duration-700 ease-in-out hover:scale-[1.1]" src={img6} alt="" /></figure>
              <figure className="overflow-hidden"><img className="w-full h-auto scale-100 duration-700 ease-in-out hover:scale-[1.1]" src={img7} alt="" /></figure>
              <figure className="overflow-hidden"><img className="w-full h-auto scale-100 duration-700 ease-in-out hover:scale-[1.1]" src={img8} alt="" /></figure>
            </div>
        </section>
    );
};

export default Photo;