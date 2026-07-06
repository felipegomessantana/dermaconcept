import { Navigate, useLocation } from "react-router-dom";

/** Redireciona a rota legada do Liftera 2 para a seção de Paciente Modelo na home. */
export default function LifteraRedirect() {
  const { search } = useLocation();

  return (
    <Navigate
      to={{ pathname: "/", hash: "paciente-modelo", search }}
      replace
    />
  );
}
