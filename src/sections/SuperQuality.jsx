import Button from "../components/Button";
import { shoe8 } from "../assets/images";
export default function SuperQuality(){
    return (
        <>
           <section id="about-us" className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container">
            
            <div className="flex flex-col flex-1">
                <h2 className="text-4xl font-bold font-sans lg:max-w-lg">We Provide You <span className="text-red-400">Super Quality</span> Shoes</h2>
                <p className="text-slate-500 mt-10 lg:max-w-lg" >Ensuring premium comfort and style, our meticulously crafted footwer is designed to elevate your experience, providing you with unmatched quality, innovation, and a touch of elegance.</p>
                
                <p className="text-slate-500 mt-8 lg:max-w-lg ">Our dedication to detail and excellence ensures your satisfaction</p>
            
            <div className="mt-15">
                <Button label="View details" />
            </div>

            </div>
            
            <div className="flex-1 flex justify-center items-center">
                <img src={shoe8} alt="" width={570} height={522} className="object-contain"/>
            </div>


           </section>
        </>
    );
}