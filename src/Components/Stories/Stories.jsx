export default function Stories(props) {
    
    const newStories = props.stories.map((story) => {
        return(
            <div className="col-span-1 gap-6 grid grid-cols-3 hover:cursor-pointer">
            <img src={story.image} />
            <div className = "flex flex-col text-left col-span-2">
                <div className="text-gray-400 text-xl">{story.id}</div>
                <div className="font-bold">{story.title}</div>
                <div>{story.content}</div>
                </div>
            </div>
            
        )
    })
    
    return(
    <div className = "flex flex-col md:grid md:grid-cols-3 h-28 pt-12 gap-6">
        {newStories}
    </div>
    )
}