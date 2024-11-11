import Image from 'next/image';
import Apple from '../../../assets/Apple.png';
import Microsoft from '../../../assets/Microsoft.png';
import Slack from '../../../assets/Slack.png';
import Google from '../../../assets/Google.png';
const Sponsor=()=>{
    return(
        <>
           <div className="w-[1922px] h-[538px] top-[4654px] px-[220px] py-[140px] gap-[100px] ">
             <div className="w-[1482px] h-[87px] font-Inter text-7xl font-bold text-center leading-[87.214px] tracking-[-0.02px] ">Our sponsors</div>
             <div className="w-[1482px] h-[71px] flex flex-row justify-between mt-20">
                <div className='w-[55.47px] h-[68px] gap-[4px] '><Image src={Apple} alt=''/></div>
                <div className='w-[287px] h-[62px] gap-[4px]'><Image src={Microsoft} alt=''/></div>
                <div className='w-[280px] h-[671px] gap-[4px]'><Image src={Slack} alt=''/></div>
                <div className='w-[211px] h-[69.81px] gap-[4px]'><Image src={Google} alt=''/></div>
             </div>
           </div>
        </>
    );
};
export default Sponsor;
