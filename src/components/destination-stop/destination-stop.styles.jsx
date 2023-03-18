import styled from 'styled-components'

export const DestinationStopContainer = styled.div`
width: 445px;
height: 472px;

h2{
    margin-top:37px;
    margin-bottom:14px;
}
p{
    color: ${({theme:{colors}}) => colors.lightBlue};
    margin-bottom: 54px;
}
`


export const DestinationFacts = styled.div`
display:flex;
justify-content:space-between;
width:344px;
margin-top: 28px;
.subheading-2{
    margin-bottom:12px;
}


`

