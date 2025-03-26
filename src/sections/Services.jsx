import { services } from "../constant";
import ServiceCard from "../components/ServiceCard";
export default function Services(){

    return (
        <section className="max-container flex justify-center items-center flex-wrap gap-10">
           {services.map((service, index) => 
            <ServiceCard key={index} {...service}/>
        )}
        </section>
    );
}