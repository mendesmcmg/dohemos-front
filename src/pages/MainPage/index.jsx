import CardImage from "../../components/CardImage";
import * as S from "./styles";
import hemocentros from "./mock";
import { useEffect, useState } from "react";

function MainPage() {
  const [search, setSearch] = useState("");

  useEffect(() => {}, [search]);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <S.Container>
      <S.SearchBar
        type="text"
        onChange={(e) => handleSearch(e)}
        placeholder="Busque por instituição, cidade ou estado"
      />

      <S.CheckboxDiv>
        <S.FilterText>Filtre por: </S.FilterText>
        <input type="checkbox" id="estoques" name="estoques" value="estoques" />
        <S.FilterText>Estoques baixos</S.FilterText>

        <input
          type="checkbox"
          id="plaquetas"
          name="plaquetas"
          value="plaquetas"
        />
        <S.FilterText>Doação de Plaquetas</S.FilterText>
      </S.CheckboxDiv>
      <S.Grid>
        {hemocentros.map(({ id, image, title, subtitle }) => (
          <CardImage key={id} image={image} title={title} subtitle={subtitle} />
        ))}
      </S.Grid>
    </S.Container>
  );
}

export default MainPage;
