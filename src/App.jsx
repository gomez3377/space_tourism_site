import { useState } from "react";
import "./index.scss";
import { Routes, Route } from "react-router-dom";
import DestinationPage from "./routes/destination/destination.component";
import HomePage from "./routes/home/home.component";
import CrewPage from "./routes/crew/crew-page.component";
import TechnologyPage from './routes/technology/technology.component'
import Navigation from "./routes/navigation/navigation.component";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<HomePage />} />
        <Route path="destination" element={<DestinationPage />} />
        <Route path="crew" element={<CrewPage />} />
        <Route path="technology" element={<TechnologyPage/>} />
      </Route>

    </Routes>
  );
}

export default App;
