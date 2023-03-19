import styled from 'styled-components'



export const CrewMemberInfoContainer = styled.div`
display:flex;
flex-direction:column;
justify-content:space-between;
width:50%;
height:594px;
margin-bottom:94px;
h4{
    margin-top: 154px;
    
}
h3{
    white-space:nowrap;
}
p{
    color: ${({theme:{colors}}) => colors.lightBlue};
    width: 444px;
    
}

`

