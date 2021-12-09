import axios from "axios";
import { useEffect, useState } from "react"

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

    <div>

      <Header title="Davi sousa"></Header>
      <Pesquisa>
      </Pesquisa>

      <List livros={livros}></List>



    </div>


  )
}

export default App;
