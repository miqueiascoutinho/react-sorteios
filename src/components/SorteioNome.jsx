import { Button, TextField, Typography } from "@material-ui/core";
import React, { useState } from "react";

export default function SorteioNome(props) {
  const [nomes, setNomes] = useState("");
  const [opcoes, setOpcoes] = useState([]);

  
  function _handlerNomesDigitados(e) {
    let values = e.target.value;
    setNomes(values);
    setOpcoes(values.split(",").filter((nome) => nome.trim().length > 0));
  }

  function _sorteio() { 
    const qtdeOpcoes = opcoes.length;
    let random = Math.floor(Math.random() * qtdeOpcoes);
    props.setValorSorteado(opcoes[random]);
    props.setSorteioRealizado(true);
  }

  return (
    <section>
      <main>
        <TextField
          rows={10}
          multiline={true}
          variant="outlined"
          label="Nomes a serem sorteados"
          value={nomes}
          helperText="Use vírgula (,) para separar os nomes"
          onChange={_handlerNomesDigitados}
          style={{ margin: "10px", width: "70%" }}
        />
        <Typography>Total de nomes digitados: {opcoes.length}</Typography>
      </main>
      <Button
        disabled={!(nomes.search(/[a-zA-Z]+/) > -1)}
        fullWidth={false}
        color="primary"
        variant="contained"
        style={{ margin: "15px 0 0 0" }}
        onClick={_sorteio}
      >
        Sorteio
      </Button>
    </section>
  );
}
