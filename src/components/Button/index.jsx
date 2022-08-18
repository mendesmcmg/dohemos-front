import * as S from "./styles";

function Button({ color = "default", children, onClick }) {
  function selectedColor(color) {
    switch (color) {
      case "primary":
        return "#890E06";
      case "secondary":
        return "#24CEB7";
      default:
        return "#C9C9C9";
    }
  }

  onClick = onClick || (() => {});

  return (
    <S.Button backgroundColor={selectedColor(color)} onClick={onClick}>
      {children}
    </S.Button>
  );
}

export default Button;
