import "./styles.css";

function PersonalInfoPage() {
  return (
    <body>
      <main class="conteudo">
        <div class="principal">
          <h1 class="titulo-principal">Dados pessoais</h1>

          <form action="" class="adicionar" id="novoItem">
            <label for="nome">Nome *</label>
            <input type="text" name="nome" id="nome" />

            <label for="sobrenome">Sobrenome *</label>
            <input type="text" name="sobrenome" id="sobrenome" />

            <label for="e-mail">E-mail *</label>
            <input type="text" name="e-mail" id="e-mail" />

            <label for="DN">Data de nascimento *</label>
            <input type="text" name="DN" id="DN" />

            <label for="sexo">Sexo *</label>
            <input type="text" name="sexo" id="sexo" />

            <label for="quantidade">Defina uma senha *</label>
            <input type="password" name="quantidade" id="quantidade" />

            <label for="quantidade">Confirme a senha *</label>
            <input type="password" name="quantidade" id="quantidade" />

            <input
              type="submit"
              value="Entrar"
              class="cadastrar"
              id="cadastrar"
            />
            <input
              type="submit"
              value="Cancelar"
              class="cancelar"
              id="cancelar"
            />
          </form>
        </div>
      </main>
    </body>
  );
}

export default PersonalInfoPage;