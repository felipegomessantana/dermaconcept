const normalizeAreaName = (value: string) =>
  value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim()
    .replace(/\s+/g, " ");

const procedureAreaImageAliases: Record<string, string> = {
  labios: "/paciente-modelo/preenchimento-acido-hialuronico/01_labios.webp",
  olheiras: "/paciente-modelo/preenchimento-acido-hialuronico/02_olheiras.webp",
  "bigode chines": "/paciente-modelo/preenchimento-acido-hialuronico/03_bigode_chines.webp",
  "bigode chines (sulco nasogeniano)": "/paciente-modelo/preenchimento-acido-hialuronico/03_bigode_chines.webp",
  "sulco nasogeniano": "/paciente-modelo/preenchimento-acido-hialuronico/03_bigode_chines.webp",
  "linhas de marionete": "/paciente-modelo/preenchimento-acido-hialuronico/04_linhas_de_marionete.webp",
  "linha de marionete": "/paciente-modelo/preenchimento-acido-hialuronico/04_linhas_de_marionete.webp",
  "macas do rosto": "/paciente-modelo/preenchimento-acido-hialuronico/05_macas_do_rosto.webp",
  "regiao malar": "/paciente-modelo/preenchimento-acido-hialuronico/05_macas_do_rosto.webp",
  malar: "/paciente-modelo/preenchimento-acido-hialuronico/05_macas_do_rosto.webp",
  mandibula: "/paciente-modelo/preenchimento-acido-hialuronico/06_mandibula.webp",
  queixo: "/paciente-modelo/preenchimento-acido-hialuronico/07_queixo.webp",
  "queixo (aspecto de casca de laranja)": "/paciente-modelo/preenchimento-acido-hialuronico/07_queixo.webp",
  mento: "/paciente-modelo/preenchimento-acido-hialuronico/07_queixo.webp",
  "nariz (rinomodelacao)": "/paciente-modelo/preenchimento-acido-hialuronico/08_nariz_rinomodelacao.webp",
  rinomodelacao: "/paciente-modelo/preenchimento-acido-hialuronico/08_nariz_rinomodelacao.webp",
  temporas: "/paciente-modelo/preenchimento-acido-hialuronico/09_temporas.webp",
  gluteos: "/paciente-modelo/preenchimento-acido-hialuronico/10_gluteos.webp",
};

const procedureAreaAltTexts: Record<string, string> = {
  labios: "Preenchimento com ácido hialurônico nos lábios",
  olheiras: "Tratamento de olheiras com ácido hialurônico",
  "bigode chines": "Tratamento do bigode chinês ou sulco nasogeniano",
  "bigode chines (sulco nasogeniano)": "Tratamento do bigode chinês ou sulco nasogeniano",
  "sulco nasogeniano": "Tratamento do sulco nasogeniano",
  "linhas de marionete": "Tratamento das linhas de marionete",
  "linha de marionete": "Tratamento das linhas de marionete",
  "macas do rosto": "Tratamento estético das maçãs do rosto",
  "regiao malar": "Tratamento estético da região malar",
  malar: "Tratamento estético da região malar",
  mandibula: "Tratamento estético da mandíbula",
  queixo: "Tratamento estético do queixo",
  "queixo (aspecto de casca de laranja)": "Tratamento estético do queixo",
  mento: "Tratamento estético do mento",
  "nariz (rinomodelacao)": "Rinomodelação com ácido hialurônico",
  rinomodelacao: "Rinomodelação com ácido hialurônico",
  temporas: "Tratamento estético das têmporas",
  gluteos: "Procedimento estético na região dos glúteos",
};

export const getCanonicalProcedureAreaImage = (title: string): string | undefined =>
  procedureAreaImageAliases[normalizeAreaName(title)];

export const getCanonicalProcedureAreaAlt = (title: string): string | undefined =>
  procedureAreaAltTexts[normalizeAreaName(title)];
