import React from "react";
import CrewNav from "../crew-nav/crew-nav.component";
import PageHeader from "../page-header/page-header.components";
import { CrewMemberInfoContainer } from "./crew-member-info.styles";

const CrewMemberInfo = ({currentCrewMember}) => {
 const {name, role, bio} = currentCrewMember
 
    return (
    <CrewMemberInfoContainer>
      <PageHeader pageNumber="02" title="Meet Your Crew" />
      <h4>{role}</h4>
      <h3>{name}</h3>
      <p>{bio}</p>
        
    <CrewNav/>

    </CrewMemberInfoContainer>
  );
};

export default CrewMemberInfo;
