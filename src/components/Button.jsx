


export default function Button({label, iconUrl}){
    return(
        <>
            <button className='flex items-center gap-2 justify-center bg-red-400 text-white rounded-3xl px-4 py-2 cursor-pointer hover:bg-red-500 transition duration-300 ease-in'>
                {label}

                {iconUrl && <img src={iconUrl} alt="arrowRight"  />}
            </button> 

        </>
    );
}