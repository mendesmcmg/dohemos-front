import Button from "../../components/Button";
import CardImage from "../../components/CardImage";
import HemocentroImage from "/home/clara/Documentos/unb-codigos/si/dohemos-front/src/assets/hemocentro.png";

function TestPage() {
  return (
    <div>
      <h1>Test Page</h1>
      <CardImage
        image={HemocentroImage}
        title="Fundação Hemocentro de Brasília"
        subtitle="Asa Norte - Brasília (DF)"
      />

      <Button color="primary" onClick={() => console.log("click")}>
        Primary
      </Button>

      <Button color="secondary" onClick={() => console.log("click")}>
        Secondary
      </Button>

      <Button onClick={() => console.log("click")}>
        Light
      </Button>
    </div>
  );
}

export default TestPage;
