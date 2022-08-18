import CardImage from "../../components/CardImage";
import HemocentroImage from "/home/clara/Documentos/unb-codigos/si/dohemos-front/src/assets/hemocentro.png";

function TestPage() {
  console.log("TestPage");
  return (
    <div>
      <h1>Test Page</h1>
      <CardImage
        image={HemocentroImage}
        title="Fundação Hemocentro de Brasília"
        subtitle="Asa Norte - Brasília (DF)"
      />
    </div>
  );
}

export default TestPage;
