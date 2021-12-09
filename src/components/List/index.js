import { Container } from "./styles"

export function List(props) {

  return (
    <Container>
      <ul>
        {
          props.livros.map((item) => {
            return (
              <li key={item.url}>
                <h2>{item.author}</h2>
                <p>{item.title}</p>

                <button>
                  <a href={item.url} >Ler</a>
                </button>
              </li>
            )
          })
        }
      </ul>

    </Container >
  )

}