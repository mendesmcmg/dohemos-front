import "./styles.css";
import Logo from '../../assets/logo.png';

function EditProfilePage() {
  return (
    <body>
      <header>
        <div class="caixa">
          <h1>
            <img src={Logo} class="logo_p" />
          </h1>

          <nav>
            <ul>
              <li>
                <a href="">Sobre nós</a>
              </li>
              <li>
                <a href="">Dúvidas frequentes</a>
              </li>
              <li>
                <a href="">Administração</a>
              </li>
              <li>
                <a href="">Meus agendamentos</a>
              </li>
              <li id="nome">
                <a href="">Usuário</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main class="conteudo">
        <div class="principal">
          <h1 class="titulo-principal">Editar perfil</h1>

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
          </form>

          <h1 class="titulo-principal">Informações importantes</h1>

          <form action="" class="adicionar" id="novoItem">
            <label for="nome" className="texto">
              Tipo sanguíneo *
            </label>
            <input type="text" name="nome" id="nome" />

            <label for="DD" className="texto">
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
          </form>

          <h1 class="titulo-principal">Foto de perfil</h1>

          <form action="" class="adicionar" id="novoItem">
            <label for="nome" class="texto">
              Selecione uma foto de perfil!
            </label>
            <input type="file" name="nome" id="nome" />
            <input
              type="submit"
              value="Salvar"
              class="cadastrar"
              id="cadastrar"
            />
          </form>
        </div>
      </main>
    </body>
  );
}

export default EditProfilePage;
