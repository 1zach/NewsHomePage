export default function Navbar() {
    return(
        <div className = "flex justify-between items-baseline pb-8">
            <div>
                <div className="text-4xl font-bold">W.</div>
            </div>
            <div >
                <ul className = "hidden md:flex hover:cursor-pointer gap-6 text-gray-600">
                    <li>Home</li>
                    <li>New</li>
                    <li>Popular</li>
                    <li>Trending</li>
                    <li>Categories</li>
                </ul>
            </div>



        </div>
    ) 
}