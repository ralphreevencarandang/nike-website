import { footerLogo } from "../assets/images";
import { socialMedia , footerLinks} from "../constant";
import SocialMediaIcon from "../components/SocialMediaIcon";
import FooterLinks from "../components/FooterLinks";

export default function Footer(){
    return(
        <footer>

            <div className="max-container flex items-center justify-between gap-20 flex-wrap max-lg:flex-col max-lg:items-start w-full">
                <div className="max-w-xs">
                    <img src={footerLogo} alt="Footer Logo" width={150} height={120}/>
                    <p className=" pt-5 text-slate-500">Get shoes ready for the new term at your nearest Nike store. Find Your perfect Size In Store. Get Rewards</p>

                    <div className="flex gap-5 max-w-xs mt-10">
                    {socialMedia.map((icon, index) => 
                        <SocialMediaIcon key={index} src={icon.src} alt={icon.alt}/>
                    )}
                </div>
                </div>

               

                <div className="flex gap-20 flex-wrap max-sm:gap-5 ">
                    {footerLinks.map((items, index)=>
                        <FooterLinks key={index} {...items}/>
                    )}
                </div>
            </div>
           
            
            <div className="flex flex-1 justify-between text-white mt-24 max-sm:flex-col max-sm:items-center max-container">
                <p className="text-slate-400">© Copyright. All right reserved.</p>
                <p className="text-slate-400">Terms & Conditions</p>
            </div>


        </footer>
    );
}