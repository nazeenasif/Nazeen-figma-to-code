import Image from "next/image";
import logo from "../../../assets/Logo.png";
const Footer=()=>{
    return(
        <>
          <div className=" w-[1920px] h-[461px] top-[5195px] left-[1px] px-[220px] py-[140px] gap-[200px] text-white bg-[#043873] ">
               <div className=" w-[1480px] h-[289px] gap-[100px] ">
                    <div className=" w-[1482px] h-[169px] gap-[100px] flex flex-row justify-between ">
                        <div className="w-[295px] h-[169px] gap-[15px] ">
                          <div className=" w-[191px] h-[34px]"><Image src={logo} alt='logo'/></div>
                          <div className="w-[240px] h-[120px] text-lg font-normal  leading-[30px] tracking-[-0.02cm] mt-4 ">whitepace was created for the new ways we live and work. We make a better workspace around the world</div>
                        </div>
                        <div className="w-[295px] h-[127px] gap-[15px] ">
                         <div className="w-[68px] h-[22px] font-bold font-Inter text-lg leading-[27.78px] tracking-[-0.02cm]">Product</div>
                         <div className="w-[70px] h-[20px] font-normal font-Inter text-base leading-[20px] tracking-[-0.02cm] mt-4 text-[#FFE492]">Overview</div>
                         <div className="w-[50px] h-[20px] font-normal font-Inter text-base leading-[20px] tracking-[-0.02cm] mt-3">Pricing</div>
                         <div className="w-[50px] h-[20px] font-normal font-Inter text-base leading-[20px] tracking-[-0.02cm] mt-3">Customer stories</div>
                       </div>
                       <div className=" w-[295px] h-[130px] gap-[16px] font-Inter tracking-[-0.02cm]">
                         <div className="w-[91px] h-[22px] font-bold font-Inter text-lg leading-[27.78px]  ">Resources</div>
                         <div className="w-[33px] h-[20px] font-normal font-Inter text-base leading-5 mt-4">Blog</div>
                         <div className="w-[128px] h-[20px] font-normal font-Inter text-base leading-5 mt-3">Guides & tutorials</div>
                         <div className="w-[130px] h-[20px] font-normal font-Inter text-base  leading-5 mt-3">Help center</div>
                       </div>
                       <div className="w-[295px] h-[130px] gap-[16px] font-Inter tracking-[-0.02cm]">
                         <div className="w-[83px] h-[22px] font-bold  text-lg leading-[27.78px] ">Company</div>
                         <div className="w-[66px] h-[20px] font-normal text-base leading-5 mt-4 ">About us</div>
                         <div className="w-[62px] h-[20px] font-normal text-base leading-5 mt-3">Careers</div>
                         <div className="w-[99px] h-[20px] font-normal text-base leading-5 mt-3">Media kit</div>
                       </div>
                   </div>
                   <div className="w-[1480px] h-[20px] mt-[100px]">
                     <div className="w-[169px] h-[20px] gap-[60px] mx-[655.5px]">
                       <p className="font-normal font-Inter text-base leading-5 tracking-[-0.02cm]">©2021 Whitepace LLC.</p>
                     </div>
                   </div>
               </div>
          </div>       
       </>
    );
};
export default Footer;