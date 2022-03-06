import { ReactNode } from "react";
import { ButtonProps } from "../../types/ButtonProps";

import { Container } from "./styles";

interface ButtonComponentProps extends ButtonProps {
  children: ReactNode;
};

function Button({ children, background, color, borderColor }: ButtonComponentProps ) {
  return (
    <Container 
      background={background} 
      color={color} 
      borderColor={borderColor}
    >
      {children}
    </Container>
  );
}

export default Button;
