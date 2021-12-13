import { Container } from "./styles";

export function Pesquisa({ value, type = 'text', onInputChange, onButtnChange }) {

  return (
    <Container>
      <form>
        <input value={value} type={type} onChange={onInputChange}></input>
        <button type="button" onClick={onButtnChange} >Pesquisar</button>
      </form>

    </Container>


  )
}