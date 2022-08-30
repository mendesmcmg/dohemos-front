import "./styles.css";

function ImportantInformationPage() {
  return (
    <body>
      <main class="conteudo">
        <div class="principal">
          <h1 class="titulo-principal">Informações importantes</h1>

          <form action="" class="adicionar" id="novoItem">
            <label for="nome" class="texto">
              Tipo sanguíneo *
            </label>
            <input type="text" name="nome" id="nome" />

            <label for="DD" class="texto">
              Data da última doação
            </label>
            <input type="text" name="DD" id="DD" />

            <label class="checkbox" className="texto">
              <input type="checkbox" checked />
              Ainda não realizei doações
            </label>

            <p>
              As informações coletadas aqui não substituem a triagem realizada
              nos hemocentros! A coleta tem o intuito de oferecer uma
              experiência personalizada no DoHemos.
            </p>

            <div class="situaçãoA">
              <fieldset>
                <legend>Preencha de acordo com a sua situação atual:</legend>

                <label for="radio-email">
                  <input
                    type="radio"
                    name="contato"
                    value="email"
                    id="radio-email"
                  />
                  Fiz piercing ou tatuagem nos últimos 12 meses
                </label>

                <label for="radio-telefone">
                  <input
                    type="radio"
                    name="contato"
                    value="telefone"
                    id="radio-telefone"
                  />
                  Realizei procedimento de endoscopia nos últimos 6 meses
                </label>

                <label for="radio-whatsapp">
                  <input
                    type="radio"
                    name="contato"
                    value="whatsapp"
                    id="radio-whatsapp"
                    checked
                  />
                  Contraí hepatite após os 11 anos de idade
                </label>

                <label for="radio-whatsapp">
                  <input
                    type="radio"
                    name="contato"
                    value="whatsapp"
                    id="radio-whatsapp"
                    checked
                  />
                  Apresentei convulsões na idade adulta
                </label>

                <label for="radio-whatsapp">
                  <input
                    type="radio"
                    name="contato"
                    value="whatsapp"
                    id="radio-whatsapp"
                    checked
                  />
                  Sem problemas aparentes
                </label>
              </fieldset>
            </div>

            <input
              type="submit"
              value="Continuar"
              class="cadastrar"
              id="cadastrar"
            />
            <input type="submit" value="Voltar" class="voltar" id="voltar" />
          </form>
        </div>
      </main>
    </body>
  );
}

export default ImportantInformationPage;
