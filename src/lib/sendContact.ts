export type ContactPayload = {
  nome: string;
  email: string;
  telefone: string;
  mensagem: string;
};

export async function sendContactMessage(payload: ContactPayload) {
  const response = await fetch("/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  let data: { error?: string; ok?: boolean } = {};
  try {
    data = await response.json();
  } catch {
    // ignore non-JSON responses
  }

  if (!response.ok) {
    throw new Error(data.error || "Não foi possível enviar a mensagem.");
  }

  return data;
}
