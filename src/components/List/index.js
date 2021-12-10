import { ItemList } from "../ItemList";

import { Container } from "./styles"

export function List(props) {

  return (
    <Container>
      <ul>
        {
          props.livros.map((livro) => {
            return (
              <ItemList key={livro.id} livro={livro} />
            )
          })
        }
      </ul>
    </Container >
  )

}