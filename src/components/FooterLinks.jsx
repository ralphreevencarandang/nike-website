export default function FooterLinks({title, links}){
    return(
        <div>
            <h3 className="text-white text-lg font-semibold py-5">{title}</h3>
            <ul className="text-slate-500">
                {links.map((item,index) => <li key={index} className="py-1 hover:text-white cursor-pointer"><a href={item.links}>{item.name}</a></li>)}
            </ul>
        </div>
    );
}