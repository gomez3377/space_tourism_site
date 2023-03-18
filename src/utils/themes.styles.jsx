import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    nearBlack: "#0B0D17",
    lightBlue: "#D0D6F9",
  },
  
};

export const Theme = ({children}) => (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
)
