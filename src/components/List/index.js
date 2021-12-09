
export function List(props) {

  return (
    <div>
      <ul>
        {
          props.livros.map((item) => {
            return (
              <li>
                <h2>{item.author}</h2>
                <p>{item.title}</p>
                <a href={item.url} >Ler</a>
              </li>
            )
          })
        }
      </ul>

    </div >
  )

}