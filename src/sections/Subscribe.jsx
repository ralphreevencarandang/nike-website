import Button from "../components/Button";

export default function Subscribe(){
    return(
        <section id="contact-us" className="flex max-container justify-center items-center max-lg:flex-col gap-10">
            <h3 className="text-4xl font-bold font-sans text-center lg:max-w-md"> Sign Up for <span className="text-red-400">Updates</span> & Newsletter</h3>
       
            <div className="lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5  p-2.5 sm:border sm:border-slate-500 rounded-full">
                    <input type="text" className="input" placeholder="Subscribe@.nike.com"/>
                
                    <div className="flex max-sm:justify-center max-sm:w-full items-center">
                        <Button label='Sign Up'/>
                    </div>
            </div>
        </section>
    );
}