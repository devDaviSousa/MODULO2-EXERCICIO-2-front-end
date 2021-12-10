import { ItemList } from "../ItemList";

import { Container } from "./styles"

export function List(props) {

  return (
    <Container>
      <ul>
        {
          props.leitura.map((leitura, id) => {
            return (
              <ItemList key={id} leitura={leitura} />
            )
          })
        }
      </ul>
    </Container >
  )

}