import { Button, TextField } from "@material-ui/core";
import React, { useState } from "react";

export default function SorteiroNumero({
  setValorSorteado,
  setSorteioRealizado,
}) {
  const [valorInicial, setValorInicial] = useState("");
  const [valorFinal, setValorFinal] = useState("");
  const padraoNumero = RegExp(/^\d{0,6}$/);
  const [erros, setErros] = useState({
    inicio: { valido: true, mensagem: null },
    final: { valido: true, mensagem: null },
  });

  function _handlerValorInicial(e) {
    const valor = e.target.value;
    if (padraoNumero.test(valor)) {
      setValorInicial(valor);
    }
  }

  function _handlerValidaDigitacao(e) {
    const { name, value } = e.target;
    const newState = { ...erros };

    if (value.length < 1) {
      newState[name] = {
        valido: false,
        mensagem: "O campo deve ser preenchido",
      };
    } else {
      newState[name] = { valido: true, mensagem: null };
    }

    setErros({ ...newState });
  }

  function _handlerValorFinal(e) {
    const valor = e.target.value;

    if (padraoNumero.test(valor)) {
      setValorFinal(valor);
    }
  }

  function _sorteio() {
    let random = Math.floor(
      Math.random() * (parseInt(valorFinal) - parseInt(valorInicial) + 1) +
        parseInt(valorInicial)
    );
    setValorSorteado(random);
    setSorteioRealizado(true);
  }

  return (
    <section>
      <main>
        <TextField
          label="Valor inicial"
          size="medium"
          variant="outlined"
          placeholder="Valor inicial"
          value={valorInicial}
          onChange={_handlerValorInicial}
          onBlur={_handlerValidaDigitacao}
          style={{ margin: "20px" }}
          error={!erros.inicio.valido}
          helperText={erros.inicio.mensagem}
          name="inicio"
        />
        <TextField
          label="Valor final"
          size="medium"
          variant="outlined"
          placeholder="Valor final"
          value={valorFinal}
          onChange={_handlerValorFinal}
          onBlur={_handlerValidaDigitacao}
          style={{ margin: "20px" }}
          error={!erros.final.valido}
          helperText={erros.final.mensagem}
          name="final"
        />
      </main>
      <Button
        disabled={
          !(
            parseInt(valorInicial) > 0 &&
            parseInt(valorInicial) < parseInt(valorFinal)
          )
        }
        fullWidth={false}
        color="primary"
        variant="contained"
        onClick={_sorteio}
        style={{ margin: "15px 0 0 0"}}
      >
        Sorteio
      </Button>
    </section>
  );
}
