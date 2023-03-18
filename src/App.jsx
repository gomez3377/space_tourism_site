import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component";
import HomePage from "./routes/home/home.component";
import DestinationPage from "./routes/destination/destination.component";
import CrewPage from "./routes/crew/crew-page.component";
import TechnologyPage from "./routes/technology/technology.component";
import { Theme } from "./utils/themes.styles";
import { GlobalStyle } from "./global.styles";

const App = () => {
  return (
    <Theme>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<HomePage />} />
          <Route path="destination" element={<DestinationPage />} />
          <Route path="crew" element={<CrewPage />} />
          <Route path="technology" element={<TechnologyPage />} />
        </Route>
      </Routes>
    </Theme>
  );
};

export default App;
