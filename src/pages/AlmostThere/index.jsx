import './styles.css'

function AlmostTherePage() {
  return (
    <body>
        <main class="conteudo">
            <div class="principal">
                <h1 class="titulo-principal">...quase lá!</h1>
                <form action="" class="adicionar" id="novoItem">
                    <label for="nome" class="texto">Selecione uma foto de perfil!</label>
                    <input type="file" name="nome" id="nome"/>
                    <input type="submit" value="Finalizar" class="cadastrar" id="cadastrar"/>
                    <input type="submit" value="Voltar" class="voltar" id="voltar"/>
                </form>
            </div>
        </main>
	</body>
  )
}

export default AlmostTherePage;