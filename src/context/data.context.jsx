import { createContext, useState } from "react";

import DATA from "../data.json";

const setDefaultData = (array) => array[0];

export const DataContext = createContext({
  pages: [],
  technology: [],
  destinations: [],
  crew: [],
  currentDestination: {},
  currentTech: {},
  currentCrewMember: {},
  currentPage: "",
  setCurrentCrewMember: () => {},
  setCurrentDestination: () => {},
  setCurrentTech: () => {},
  setCurrentPage: () => {},
});

export const DataProvider = ({ children }) => {
  const pages = [
    {
      name: "home",
      link: "/",
      pageNumber: "00",
    },
    { 
      name: "destination", 
      link: "/destination", 
      pageNumber: "01" 
    },
    { name: "crew", 
    link: "/crew", 
    pageNumber: "02" 
  },
    { 
      name: "technology", 
      link: "/technology", 
      pageNumber: "03" 
    },
  ];

  const { technology, crew, destinations } = DATA;
  const [currentDestination, setCurrentDestination] = useState(
    setDefaultData(destinations)
  );
  const [currentTech, setCurrentTech] = useState(setDefaultData(technology));
  const [currentCrewMember, setCurrentCrewMember] = useState(
    setDefaultData(crew)
  );
  const [currentPage, setCurrentPage] = useState('home');

  const value = {
    pages,
    technology,
    crew,
    destinations,
    currentTech,
    currentCrewMember,
    currentDestination,
    setCurrentCrewMember,
    setCurrentDestination,
    setCurrentTech,
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};
