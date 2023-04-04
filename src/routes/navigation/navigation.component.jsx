import { Outlet } from "react-router-dom";
import SpaceLogo from "../../assets/shared/logo.svg";

import { NavigationContainer } from "./navigation.styles";
import NavLinks from "../../components/nav-links/nav-links.component";
const Navigation = () => {
  return (
    <>
      <NavigationContainer>
        <img src={SpaceLogo} alt="logo" />
        <hr />
        <NavLinks />
      </NavigationContainer>
      <Outlet />
    </>
  );
};

export default Navigation;
