import Button from "../button/button.component"
import { nanoid } from "nanoid"
import { useContext } from "react"
import { DataContext } from "../../context/data.context"


const TECH_BUTTON_NUMBERS = [1,2,3]

const TechNav = () => {
    const {setCurrentTech, technology} = useContext(DataContext)



  return (
    <div> 
    {technology.map((tech, index) => <Button key={nanoid()} onClick={() => setCurrentTech(tech) }>{index + 1}</Button>)}
  </div>
  )
}

export default TechNav