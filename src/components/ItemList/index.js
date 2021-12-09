
export function ItemList(props) {

  return (
    <li>
      <h2>{props.item.author}</h2>
      <p>{props.item.title}</p>
      <a href={props.item.url} >Ler</a>
    </li>
  )

}