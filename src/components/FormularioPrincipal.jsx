import React, { useState } from "react";
import {
  Container,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Switch,
  Typography,
} from "@material-ui/core";
import SorteiroNumero from "./SorteioNumero";
import SorteioNome from "./SorteioNome";

export default function FormularioPrincipal() {
  const [byNumuro, setByNumero] = useState(true);
  const [byNome, setByNome] = useState(false);
  const [valorSorteado, setValorSorteado] = useState("");
  const [sorteioRealizado, setSorteioRealizado] = useState(false);

  function _handlerSelecioneModoSorteiro(e) {
    setByNumero(!byNumuro);
    setByNome(!byNome);
  }

  return (
    <Container maxWidth="sm">
      <header>
        <Typography component="h1" variant="h3" align="center">
          Meus sorteios
        </Typography>
      </header>
      <main>
        <Typography
          component="h1"
          variant="h6"
          align="center"
          style={{ margin: "40px" }}
        >
          Bem-vindo ao site "Meus sorteios"
        </Typography>

        {sorteioRealizado ? (
          <Typography
            component="h1"
            variant="h6"
            align="center"
            style={{ margin: "60px" }}
          >
            O valor sorteado foi: {valorSorteado}
          </Typography>
        ) : null}

        <FormControl>
          <FormLabel>Selecione o modo do sorteio</FormLabel>
          <FormGroup row={true}>
            <FormControlLabel
              control={
                <Switch
                  size="medium"
                  color="primary"
                  checked={byNumuro}
                  onChange={_handlerSelecioneModoSorteiro}
                />
              }
              label="Via números"
            />
            <FormControlLabel
              control={
                <Switch
                  size="medium"
                  color="primary"
                  checked={byNome}
                  onChange={_handlerSelecioneModoSorteiro}
                />
              }
              label="Via nomes"
            />
          </FormGroup>
        </FormControl>
        {byNumuro ? (
          <SorteiroNumero
            setValorSorteado={setValorSorteado}
            setSorteioRealizado={setSorteioRealizado}
          />
        ) : (
          <SorteioNome />
        )}
      </main>
    </Container>
  );
}
