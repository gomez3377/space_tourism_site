import { useContext } from "react";
import BackgroundImage from "../../components/background-image/background-image.component";
import TechImage from "../../components/tech-image/tech-image.component";
import TechInfo from "../../components/tech-info/tech-info.component";
import TechNav from "../../components/tech-nav/tech-nav.component";
import { DataContext } from "../../context/data.context";
const TechnologyPage = () => {
  const { currentTech } = useContext(DataContext);
  const { name, description, images } = currentTech;
  const {portrait, landscape} = images
  return (

    <>
    <BackgroundImage url="tech" />
      <h5>
        <span className="page-number">04</span> Space Launch 101
      </h5>
      <section className="tech-page-content">
       <TechNav />
        <TechInfo name={name} description={description} />
       <TechImage url={portrait} />
      </section>
    </>
  );
};

export default TechnologyPage;
