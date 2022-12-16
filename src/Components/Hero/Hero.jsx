import New from "../New/New"
const information = [{headline: "Hydrogen vs. Electric Cars", content: "Will hydrogen cars ever catch up to EV's?"},
                    {headline: "The downsides of AI artistry", content: "What are the possible adverse effects of AI?"},
                    {headline: "Is VC funding drying up?", content: "Private funding is down 50% YOY.  We take a look at what that means."}]
export default function Hero() {
    return(
        <div className="flex flex-col md:grid md:grid-cols-3 gap-6">
            <div className = "flex flex-col md:col-span-2 gap-6">
            <img src="../src/assets/images/image-web-3-desktop.jpg" className="hover:cursor-pointer"></img>
                <div className="w-full md:grid md:grid-cols-2 gap-6 pt-6">
                    <h1 className="text-5xl text-left font-bold hover:cursor-pointer">The Bright Future of Web 3.0?</h1>
                    <div className="w-full flex flex-col justify-between gap-3">
                        <p className="text-left">We dive into the next evolution of the web that promises to put the power of
                        the platforms back in the hands of the people. But is it really fulfilling it's promise?
                        </p>
                        <p className="p-3 bg-pink-500 rounded text-white w-1/2 hover:cursor-pointer hover:bg-pink-400">Learn More</p>
                    </div>
                </div>
            </div>
        <div className= "bg-slate-800 p-3">
            <div className="text-yellow-400 text-3xl">New</div>
            <New 
                information={information} />
        </div>
        </div>
    )
}