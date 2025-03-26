

export default function SocialMediaIcon({src, alt}){
    return(
        <div className="rounded-full bg-white p-2">
            <img src={src} alt={alt} width={20} height={20}/>
        </div>
    );
}