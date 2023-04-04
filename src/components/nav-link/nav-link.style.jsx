import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const NavLinkContainer = styled(Link)`
border-bottom: 3px solid transparent;
padding-bottom:35px;
font-family: 'Barlow Condensed',sans-serif ;
text-transform: uppercase;
font-weight: 400;
color: white;
letter-spacing: 2.7px;
font-size: 1rem;
span {
  font-weight: 700;
}
&:hover{
  border-bottom: 3px solid rgba(255,255,255,0.5);
}
&.active{
  border-bottom-color: white;
}



`