import { star } from "../assets/icons";

export default function PopularProductCard({ imgURL, name, price }) {
  return (
    <>
       
            <div className="flex flex-1 flex-col w-full max-sm:w-full ">
                
                <img src={imgURL} alt={name} className="w-[280px] h-[280px] " />

                <div className="mt-8 flex justify-start gap-2.5">
                <img src={star} alt="rating" width={24} height={24} />
                <p className="font-sans text-xl leading-normal text-slate-700">
                    (4.5)
                </p>
                </div>

                <h3 className="mt-2 font-sans text-xl leading-normal text-slate-700 font-semibold">
                {name}
                </h3>

                <p className="mt-2 font-sans  text-sm leading-normal text-red-400 font-semibold">
                {price}
                </p>

            </div>
 
    </>
  );
}
