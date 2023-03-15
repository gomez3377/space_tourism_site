import {createContext, useState} from "react";

import DATA from '../data.json'
const {technology, crew, destinations} = DATA

const setDefaultData = (array) =>  array[0]

export const DataContext = createContext({
    technologyData:[],
    destinationData:[],
    crewData:[],
    currentDestination:{},
    currentTech:{},
    currentCrewMember:{},
    setCurrentCrewMember:() => {},
    setCurrentDestination:() => {},
    setCurrentTech: () => {}



})



export const DataProvider = ({children}) => {

    const [currentDestination, setCurrentDestination ] = useState(setDefaultData(destinations))
    const [currentTech, setCurrentTech ] = useState(setDefaultData(technology))
    const [currentCrewMember, setCurrentCrewMember ] = useState(setDefaultData(crew))
   


  

    const value = {
      technology,
      crew,
      destinations,
      currentTech,
      currentCrewMember,
      currentDestination,
      setCurrentCrewMember,
      setCurrentDestination,
      setCurrentTech
    }

    return(<DataContext.Provider value={value}>{children}</DataContext.Provider>)
}