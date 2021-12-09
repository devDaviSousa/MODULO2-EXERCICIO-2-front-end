import axios from "axios";
import { useEffect, useState } from "react"
import { GlobalStyle } from "./styles/global";

import { Header } from "./components/Header";
import { List } from "./components/List";
import { Pesquisa } from "./components/Pesquisa";

function App() {
  const [livros, setLivros] = useState([]);

  useEffect(() => {
    axios.get('https://hn.algolia.com/api/v1/search?query=chave')
      .then(response => {
        const data = response.data.hits
        setLivros(data);

      })
  }, [])
  return (

    <>
      <Header title="Modulo 2 - Exercico 2"></Header>
      <Pesquisa>
      </Pesquisa>
      <List livros={livros}></List>
      <GlobalStyle />
    </>

  )
}

export default App;
