const normalizeAreaName = (value: string) =>
  value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim()
    .replace(/\s+/g, " ");

const procedureAreaImageAliases: Record<string, string> = {
  labios: "/01_labios.webp",
  olheiras: "/02_olheiras.webp",
  "bigode chines": "/03_bigode_chines.webp",
  "bigode chines (sulco nasogeniano)": "/03_bigode_chines.webp",
  "sulco nasogeniano": "/03_bigode_chines.webp",
  "linhas de marionete": "/04_linhas_de_marionete.webp",
  "linha de marionete": "/04_linhas_de_marionete.webp",
  "macas do rosto": "/05_macas_do_rosto.webp",
  "regiao malar": "/05_macas_do_rosto.webp",
  malar: "/05_macas_do_rosto.webp",
  mandibula: "/06_mandibula.webp",
  queixo: "/07_queixo.webp",
  "queixo (aspecto de casca de laranja)": "/07_queixo.webp",
  mento: "/07_queixo.webp",
  "nariz (rinomodelacao)": "/08_nariz_rinomodelacao.webp",
  rinomodelacao: "/08_nariz_rinomodelacao.webp",
  temporas: "/09_temporas.webp",
  gluteos: "/10_gluteos.webp",
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
