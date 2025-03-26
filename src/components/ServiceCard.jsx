
export default function ServiceCard({imgURL,label, subtext}){

    return (
        <div className=" flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px]  shadow-2xl px-8 py-16 ">
            <div className="w-11 h-11 flex  justify-center items-center bg-red-400 rounded-full">
                <img src={imgURL} alt="Services Icon" width={24} height={24}  />
            </div>
            <h3 className="font-bold mt-5 font-sans text-lg">{label}</h3>
            <p className="text-slate-500  font-sans break-words  leading-normal">{subtext}</p>
            
        </div>
    );
}