import ProcedurePageLayout, { type ProcedurePageData } from "@/components/procedure/ProcedurePageLayout";

const data: ProcedurePageData = {
  title: (<>REJUVENESCIMENTO<br /><span className="block">Íntimo</span></>),
  subtitle: "Procedimentos e tecnologias disponíveis no programa Paciente Modelo.",
  intro: (
    <>
      <p>
        O rejuvenescimento íntimo integra procedimentos e tecnologias oferecidos no programa de
        Paciente Modelo da Derma Concept Academy.
      </p>
      <p>
        Agende uma avaliação para conhecer as opções disponíveis e verificar sua elegibilidade como
        paciente modelo.
      </p>
    </>
  ),
  areasTitle: "Procedimentos e Tecnologias",
  areas: [
    { label: "Peeling" },
    { label: "Laser Acroma" },
    { label: "Laser CO2" },
    { label: "Bioestimuladores de colágeno" },
    { label: "Linear Z" },
  ],
};

export default function RejuvenescimentoIntimo() {
  return <ProcedurePageLayout data={data} />;
}
