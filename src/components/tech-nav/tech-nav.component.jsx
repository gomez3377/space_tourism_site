import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import { nanoid } from "nanoid";
import { useContext } from "react";
import { DataContext } from "../../context/data.context";
import { TechNavContainer } from "./tech-nav.styles";

const TechNav = () => {
  const { currentTech, setCurrentTech, technology } = useContext(DataContext);

  return (
    <TechNavContainer>
      {technology.map((tech, index) => (
        <Button
          className={tech === currentTech && "active"}
          key={nanoid()}
          buttonType={BUTTON_TYPE_CLASSES.techButton}
          onClick={() => setCurrentTech(tech)}
        >
          {index + 1}
        </Button>
      ))}
    </TechNavContainer>
  );
};

export default TechNav;
