import styled from 'styled-components'



export const TechInfoContainer = styled.div`
width: fit-content;
.subheading-2{
    color:${({theme:{colors}}) => colors.lightBlue};
    font-size:16px;
    letter-spacing:2.7px;
}
h3{
    margin-top:11px;
    white-space:nowrap;
}
p{
    margin-top:17px;
    width:444px;
    color:${({theme:{colors}}) => colors.lightBlue};
}

`