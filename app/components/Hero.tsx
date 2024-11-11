import React from "react";

const Hero = () => {
    return(
        <>
         <div className="w-[1920px] h-[829px] left-[1px] py-[140px] px-[220] top-[92px] font-Inter bg-[#043873] text-white flex flex-row justify-center items-center">
            <div className=" w-[656px] h-[361px] gap-[60px] ">
                <div className=" w-[656px] h-[238px] gap-[24px] ">
                    <h2 className=" font-bold text-6xl leading-[77.45px] tracking-[-0.02cm] ">
                        Get More Done with whitepace</h2>
                    <p className="font-normal w-[656px] h-[60px] text-lg leading-[30px] tracking-[-0.02cm]">Project management software that enables your teams to
                     collaborate, plan, analyze and manage everyday tasks</p>
                </div>
                <div className="w-[219] h-[63px] rounded-[8px] p-5 gap- text-left ">
                    <button className=" rounded-[8px] p-5 bg-[#4F9CF9] text-nowrap ">Try Whitepace free &rarr;</button>
                </div>
            </div>
            <div className=" w-[824px] h-[549px] gap-[4px] bg-[#C4DEFD] ">
                
            </div>
         </div>
        </>
    )
}
export default Hero;        