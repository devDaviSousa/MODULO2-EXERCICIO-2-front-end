
export function ItemList(props) {

  return (
    <li>
      <h2>{props.leitura.author}</h2>
      <p>{props.leitura.title}</p>

      <button>
        <a href={props.leitura.url} >Ler</a>
      </button>
    </li>
  )

}