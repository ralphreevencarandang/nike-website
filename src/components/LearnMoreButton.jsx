export default function LearnMoreButton({ label }) {
    return(
        <>
            <button 
            className="text-center border border-slate-500 bg-white text-slate-500 rounded-3xl px-4 py-2 cursor-pointer hover:text-white hover:bg-red-400 transition duration-300 ease-in">
                {label}
            </button>
        </>
    );
}