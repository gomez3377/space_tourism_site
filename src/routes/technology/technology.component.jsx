import { useContext } from "react";
import BackgroundImage from "../../components/background-image/background-image.component";
import PageHeader from "../../components/page-header/page-header.components";
import TechImage from "../../components/tech-image/tech-image.component";
import TechInfo from "../../components/tech-info/tech-info.component";
import TechNav from "../../components/tech-nav/tech-nav.component";
import { DataContext } from "../../context/data.context";
import { TechPageContent } from "./technology.styles";
const TechnologyPage = () => {
  const { currentTech } = useContext(DataContext);
  const { name, description, images } = currentTech;
  const {portrait, landscape} = images
  return (

    <>
    <BackgroundImage url="tech" />
    <TechPageContent>
<PageHeader pageNumber='03' title="Space Launch 101" />
 
      <section className="tech-page-content">
        
       <TechNav />
        <TechInfo name={name} description={description} />
       <TechImage url={portrait} />
      </section>
    </TechPageContent>
    </>
  );
};

export default TechnologyPage;
