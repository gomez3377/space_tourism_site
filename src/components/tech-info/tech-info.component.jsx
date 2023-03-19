import { TechInfoContainer } from "./tech-info.styles";

const TechInfo = ({ name, description }) => {
  return (
    <TechInfoContainer>
      <p className="subheading-2">The Terminology...</p>
      <h3>{name}</h3>
      <p>{description}</p>
    </TechInfoContainer>
  );
};

export default TechInfo;
