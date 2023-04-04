import React, { useContext } from "react";
import { DataContext } from "../../context/data.context";
import { NavLinksContainer } from "./nav-links.styles";
import NavLink from "../nav-link/nav-link.component";
const NavLinks = () => {
  const { pages, currentPage } = useContext(DataContext);

  return (
    <NavLinksContainer>
      {pages.map((page) => (
        <NavLink
          to={page.link}
          page={page}
          className={page.name === currentPage && "active"}
        />
      ))}
    </NavLinksContainer>
  );
};

export default NavLinks;
