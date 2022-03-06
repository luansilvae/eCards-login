import { ReactNode } from "react";
import { ButtonProps } from "../../types/ButtonProps";

import { Container } from "./styles";

interface ButtonComponentProps extends React.HTMLProps<HTMLButtonElement>, ButtonProps {
  children: ReactNode;
  onClick?: () => void
  disabled?: boolean
};

function Button({ children, background, color, borderColor, onClick, disabled }: ButtonComponentProps ) {
  return (
    <Container 
      background={background} 
      color={color} 
      borderColor={borderColor}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </Container>
  );
}

export default Button;
