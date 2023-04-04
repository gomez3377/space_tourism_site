import styled from "styled-components";

export const DefaultButton = styled.button`
  cursor: pointer;
  border: none;
  text-transform: uppercase;
`;

export const HomeButton = styled(DefaultButton)`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: white;
  letter-spacing: 2px;
  font-size: 32px;
  font-family: "Bellefair", serif;
`;

export const DestinationTab = styled(DefaultButton)`
  border-bottom: 3px solid transparent;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 2.7px;
  background-color: transparent;
  color: ${({ theme: { colors } }) => colors.lightBlue};
  font-family: "Barlow Condensed", sans-serif;
  padding-bottom: 12px;
  &:hover {
    border-bottom-color: rgba(255, 255, 255, 0.5);
  }
  &.active {
    border-bottom-color: white;
  }
`;

export const CrewButton = styled(DefaultButton)`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.17);
  &:hover {
    background-color: rgba(255,255,255,0.5);
  }
  &.active{
    background-color:white;
  }
`;

export const TechButton = styled(DefaultButton)`
  border: 1px solid rgba(255, 255, 255, 0.25);
  background-color: ${({ theme: { colors } }) => colors.nearBlack};
  color: white;
  font-family: "Bellefair", serif;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  font-size: 32px;
  &:hover {
    border: 1px solid white;
  }
  &.active {
    border: none;
    background-color:white;
    color:${({ theme: { colors } }) => colors.nearBlack};
  }
`;
