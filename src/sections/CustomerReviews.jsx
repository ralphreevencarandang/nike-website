
import { reviews } from "../constant";
import ReviewCard from "../components/ReviewCard";
export default function CustomerReviews(){
    return(
        <section className="max-container">
            <h3 className="font-sans text-center text-4xl font-bold">What Our <span className="text-red-400">Customers</span> Say?</h3>
            <p className="text-center m-auto mt-5 text-slate-500 max-w-lg">Here genuine stories from our statisfied customers about their execeptional experiences with us.</p>
        
            <div className="mt-24 flex justify-evenly flex-1 items-center max-lg:flex-col gap-14">
                {reviews.map((review, index) => 
                    <ReviewCard key={index} {...review}/>
                )}
            </div>
        
        </section>
    );
}