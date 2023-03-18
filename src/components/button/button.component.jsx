import React from 'react'
import {DestinationTab, HomeButton, CrewButton, TechButton} from './button.styles'

export const BUTTON_TYPE_CLASSES = {
    destinationTab: 'destination-tab',
    homeButton: 'home-button',
    crewButton: 'crew-button',
    techButton: 'tech-button',
}

const getButton = (buttonType) => ({
    [BUTTON_TYPE_CLASSES.destinationTab] :DestinationTab,
    [BUTTON_TYPE_CLASSES.homeButton] : HomeButton,
    [BUTTON_TYPE_CLASSES.crewButton] : CrewButton,
    [BUTTON_TYPE_CLASSES.techButton] : TechButton
}[buttonType])


const Button = ({children,buttonType, ...otherProps}) => {
    const CustomButton = getButton(buttonType)

  return (
    <CustomButton {...otherProps}>{children}</CustomButton>
  )
}

export default Button