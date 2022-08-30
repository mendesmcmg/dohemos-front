import Logo from "../../assets/logo.png";
import * as S from "./styles";

function AboutUsPage() {
  return (
    <S.Container>
      <S.BackLink href="/">Retornar</S.BackLink>
      <S.Content>
        <S.LogoImg id="logo" src={Logo} />{" "}
        <p>
          Somos um grupo de alunos da UnB que motivados por um artigo que chegou
          a conclusão que as últimas pesquisas levantadas acerca de informação
          no Brasil mostram que a população brasileira encontra dificuldades na
          busca por informações de serviços públicos, em especial aqueles que
          tangem a área da saúde. Um dos problemas encontrados é o acesso aos
          dados dos bancos de sangue, bem como as especificações a serem
          atendidas pelos doadores. Este site que faz parte do projeto, tem por
          objetivo facilitar a comunicação entre esta repartição governamental e
          o público-alvo, a fim de suprir a necessidade apresentada nos
          hemocentros e tornar acessível a pesquisa por informações.
        </p>
      </S.Content>
    </S.Container>
  );
}

export default AboutUsPage;
