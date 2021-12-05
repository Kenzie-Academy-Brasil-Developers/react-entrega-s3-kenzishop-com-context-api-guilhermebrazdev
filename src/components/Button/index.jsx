import { Container } from "./styles";

export const Button = ({ children, ...rest }) => (
  <Container type="button" {...rest}>
    {children}
  </Container>
);
