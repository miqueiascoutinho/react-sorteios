import { Button, TextField } from "@material-ui/core";
import React, { useState } from "react";

export default function SorteioNome(props) {
  const [nomes, setNomes] = useState("");

  function _sorteio() {
    const opcoes = nomes.split(",");
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
          onChange={(e) => setNomes(e.target.value)}
          style={{ margin: "10px", width: "70%" }}
        />
      </main>
      <Button
        disabled={!(nomes.length > 0)}
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
