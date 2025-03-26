import Button from "../components/Button";
import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import LearnMoreButton from "../components/LearnMoreButton";

export default function SpecialOffers(){
    return(
        <section className="flex flex-col jus  max-xl:flex-col-reverse gap-10 max-container">
            <h2 className="text-4xl font-bold max-xl:order-1"><span className="text-red-400">Special</span> Offer</h2>
           
            <p className="text-slate-500 break-words ">Embark on a shopping journet that redefines your experience with unbeatable deals. From premier selections to incredible savings, we offer unparalleled value that sets us apart.</p>
            <p className="text-slate-500 break-words  ">Navigate a realm of possibilities designed to fulfill your unique desires, surpassing the loftiest expectations. Your journey with us in nothing short of exceptional.</p>
            <div className="flex gap-5">
                <Button label='Shop now' iconUrl={arrowRight}/>
                <LearnMoreButton label='Learn more'/>
            </div>
       
            <div className="w-full object-contain flex justify-center ">
                <img src={offer} alt="Offer Image" width={773}height={687} />
            </div>
           
       </section>
    ); 
}