import "./styles.css";

function LoginPage() {
  return (
    <body>
      <main class="conteudo">
        <div class="principal">
          <center>
            <img id="logo" src="logo.png" />{" "}
          </center>
          <form action="" class="adicionar" id="novoItem">
            <label for="nome">Login</label>
            <input type="text" name="nome" id="nome" />
            <label for="quantidade">Senha</label>
            <input type="password" name="quantidade" id="quantidade" />
            <input
              type="submit"
              value="Entrar"
              class="cadastrar"
              id="cadastrar"
            />
          </form>

          <p>
            <a href="">Esqueceu a sua senha?</a>
          </p>
          <p>
            <a href="">Ainda não possui uma conta? Cadastre-se</a>
          </p>
          <p>
            <a href="">Você representa um Hemocentro? Entre em contato!</a>
          </p>
        </div>
      </main>
    </body>
  );
}

export default LoginPage;
