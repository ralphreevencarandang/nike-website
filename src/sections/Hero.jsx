import {arrowRight} from '../assets/icons';
import { statistics, shoes } from '../constant';
import Button from '../components/Button';
import { bigShoe1 } from '../assets/images';
import ShoeCard from '../components/ShoeCard';

import { useState } from 'react';
import { use } from 'react';

export default function Hero (){
    const [bigShoeImage, setBigShoeImage] = useState(bigShoe1);
    return(
        <>
            <section id='home' className=' w-full min-h-screen flex xl:flex-row flex-col justify-center max-container gap-10'>
                <div className='relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28 '>
                    <p className='text-red-400 text-xl'>Our Summer collections</p>
                    <h1 className='mt-10 max-sm:text-[72px] max-sm:leading-[80px] '>
                        <span className='xl:bg-white xl:whitespace-nowrap relative z-10 pr-10'>The New Arrival</span> <br /> 
                        <span className='text-red-400 inline-block m-3'> Nike</span> Shoes
                    </h1>
                    <p className='my-10 text-slate-500 text-lg leading-8 sm:max-w-sm'>Discover stylish Nike arrivals, quality comfort, and innovations for your active life</p>
                    <Button label='Shop now' iconUrl={arrowRight}/>
                    <div className='flex justify-start items-start w-full flex-wrap mt-20 gap-16'>
                        {statistics.map(item => 
                            <div key={item.label}>
                                <p className='text-4xl font-bold'>{item.value}</p>
                                <p className='leading- text-slate-500'>{item.label}</p> 
                            </div>
                        )}
                    </div>
                </div>

                <div className='relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-slate-200 bg-cover bg-center   '>
                    <img src={bigShoeImage} alt="Shoe Image" width={610} height={500} className='relative object-contain z-10'/>


                    <div className='flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm: px-6'>
                        {shoes.map( (shoe,index) => 
                            <div key={index}>
                               <ShoeCard bigShoeImage={bigShoeImage} imgURL={shoe} changeBigShoeImage = {(shoe)=> {setBigShoeImage(shoe)}}/>
                            </div>
                        )}
                    </div>
                </div>
                
                
                
                
               

          
            </section>
        </>
    );
}