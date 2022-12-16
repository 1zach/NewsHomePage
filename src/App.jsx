import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Stories from './Components/Stories/Stories'

function App() {
  const stories=[{id: "01", image: "./src/assets/images/image-retro-pcs.jpg", title: "Reviving retro PC's", content: "What happens when old PC's are given modern upgrades?"},
                {id: "02", image: "./src/assets/images/image-top-laptops.jpg", title: "Top 10 Laptops of 2020", content: "We rate the best laptops of the last year."},
                {id: "03", image: "./src/assets/images/image-gaming-growth.jpg", title: "Best Learning Websites", content: "10 great websites you can use to learn a new skill today"}]

  return (
    <div className="py-4 px-10">
    <Navbar />
    <Hero />
    <Stories 
      stories={stories}/>
    </div>
  )
}

export default App
