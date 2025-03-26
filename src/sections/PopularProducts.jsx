import ShoeCard from "../components/ShoeCard";
import {products} from '../constant';
import PopularProductCard from "../components/PopularProductCard";
export default function PopularProducts(){
    return(
        <>

            <section id="products" className="max-container max-sm:mt-12">
                <div className="flex flex-col justify-start gap-5">
                    <h2 className="text-4xl font-sans font-bold">Our <span className="text-red-400">Popular</span> Products</h2>
                    <p className="lg:max-w-lg mt-2 font-sans text-slate-600">Experience top-notch quality and stile with our sought afrer selections. Discover a world of comfort design, and value</p>
                </div>

                <div className="mt-16 grid lg:grids-cols-4 md:grid-cols-4 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14">
                    {products.map((product)=> 
                        <PopularProductCard key={product.name} {...product}/>
                    )}
                </div>
            </section>

           
           
        </>
    );
}