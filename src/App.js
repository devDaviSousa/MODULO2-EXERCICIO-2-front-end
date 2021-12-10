
import { useEffect, useState } from "react"
import { GlobalStyle } from "./styles/global";

import { Header } from "./components/Header";
import { List } from "./components/List";
import { Pesquisa } from "./components/Pesquisa";
import { api } from "./services/api";

function App() {

  const [livros, setLivros] = useState([]);
  const [pesquisa, setPesquisa] = useState('');
  const [chave, setChave] = useState('')

  useEffect(() => {
    api.get(`${chave}`)
      .then(response => {
        const data = response.data.hits
        setLivros(data);
      })
  }, [chave])

  const handleSearch = event => {
    setPesquisa(event.target.value);
  }

  const handleButton = () => {
    return (
      setChave(pesquisa)
    )
  }

  return (
    <>
      <Header title={process.env.REACT_APP_NAME}></Header>
      <Pesquisa value={pesquisa}
        onInputChange={handleSearch}
        onButtnChange={handleButton}
      >
      </Pesquisa>
      <List livros={livros} ></List>
      <GlobalStyle />
    </>
  )
}

export default App;
