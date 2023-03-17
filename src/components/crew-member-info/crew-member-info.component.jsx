import React from "react";
import CrewNav from "../crew-nav/crew-nav.component";

const CrewMemberInfo = ({currentCrewMember}) => {
 const {name, role, bio} = currentCrewMember
 
    return (
    <div>
      <h4>{role}</h4>
      <h3>{name}</h3>
      <p>{bio}</p>
        
    <CrewNav/>

    </div>
  );
};

export default CrewMemberInfo;
