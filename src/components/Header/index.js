import { Container } from "./styles";

export function Header(props) {
  return (
    <Container>
      <h1>{props.title}</h1>

    </Container>
  )
}