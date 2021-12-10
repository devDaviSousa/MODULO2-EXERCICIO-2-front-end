
export function ItemList(props) {

  return (
    <li>
      <h2>{props.livro.author}</h2>
      <p>{props.livro.title}</p>

      <button>
        <a href={props.livro.url} >Ler</a>
      </button>
    </li>
  )

}