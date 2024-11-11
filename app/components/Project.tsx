import Image from "next/image";
import work from '../../../assets/work.jpg';    
const Project = () => {
    return(
        <> 
           <div className=" w-[1920px] h-[1588px] py-[140] px-[220px] gap-[100px]  font-Inter top-[921px] left-[1px] ">
                <div className="w-[1480px] h-[547px] gap-[60px] flex justify-center items-center">
                    <div className=" w-[672px] h-[411px] gap-[60px] mt-60">
                        <div className=" w-[672px] h-[288px] gap-[24px] font-bold text-black">
                         <h1 className=" w-[672px] h-[174px] text-7xl leading-[87.14px] tracking-[-0.02px] ">Project Management</h1>
                         <p className=" w-[672px] h-[90px] text-lg tracking-[-0.02] leading-[30px] mt-5 ">Images, videos, PDFs and audio files are supported. Create math expressions and diagrams directly from the app. Take photos with the mobile app and save them to a note.</p>
                       </div>
                       <div className=" w-[201px] h-[63px] ">
                          <button className=" rounded-[6px] px-10 py-5 mt-10 bg-[#4F9CF9] ">Get Started &rarr;</button>
                       </div>
                    </div>
                    <div className=" w-[748px] h-[547px] mt-60 bg-[#C4DEFD] "></div>
                </div>
                <div className=" w-[1480px] h-[661px] gap-[100px] flex my-72">
                    <div className=" w-[710px] h-[661px] border-[#A7CEFC] "><Image src={work} alt=''/></div>
                    <div className=" w-[670px] h-[294px] gap-[60px] my-44 font-Inter">
                        <div className="w-[670px] h-[171px] gap-6 text-[#212529] ">
                             <h1 className="w-[670px] h-[87px] text-7xl font-bold leading-[87.14px] tracking-[-0.02cm] ">Work together</h1>
                             <p className="w-[670px] h-[60px] mt-6 font-normal text-lg leading-[30px] tracking-[-0.02cm]">With whitepace, share your notes with your colleagues and collaborate on them.
                             You can also publish a note to the internet and share the URL with others.
                             </p>
                        </div>
                        <div className=" w-[186px] h-[63px] rounded-md px-10 py-5 bg-[#4F9CF9] gap-[10px] mt-14">
                             <button className="w-[82px] h-[23px] font-Inter font-medium text-lg leading-[23px] tracking-[-0.02cm] text-nowrap text-white">Try it now &rarr;</button>
                        </div>
                    </div>
                </div>
           </div>
        </>
    )
};
export default Project;