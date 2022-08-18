import * as S from "./styles";

function CardImage({ image, title, subtitle }) {
  return (
    <S.CardContainer>
      <S.Image src={image} alt={title} />
      <S.Title>{title}</S.Title>
      <S.Subtitle>{subtitle}</S.Subtitle>
    </S.CardContainer>
  );
}

export default CardImage;
