
import {star} from "../assets/icons";

export default function ReviewCard({imgURL, customerName, rating, feedback }){
    return(
        <div className="flex flex-col items-center gap-3">
            <img src={imgURL} alt="Review Image" width={100} height={100} className="rounded-full"/>
            <p className="text-center max-w-xs text-slate-500">{feedback}</p>
            <div className="flex gap-3">
                <img src={star} alt="rating" width={20} height={20} />
                <p className="text-slate-500 text-lg">({rating})</p>

            </div>
           <h3 className="text-2xl font-semibold font-sans">{customerName}</h3>
    
        </div>
    );
}