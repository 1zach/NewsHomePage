export default function New(props) {
    console.log(props.information)
    const info = props.information.map((item) => {
        return(
            <div className="text-left py-6">
               <h2 className="text-white text-xl pb-2 hover:cursor-pointer">{item.headline}</h2> 
               <p className="text-stone-400">{item.content}</p>
            </div>
        )
    })
    return(
        <div className="flex flex-col divide-y h-full  divide-gray-700">
        {info}
        </div>
    )
}